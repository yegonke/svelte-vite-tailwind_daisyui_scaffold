<script lang="ts">
    import { onMount } from "svelte"; 
    import mapboxgl from 'mapbox-gl';
    import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
    import 'mapbox-gl/src/css/mapbox-gl.css';
    import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
    import {locations} from './locations';
    import { clicked_location } from './mapevents';
    import Popup from "./Popup.svelte";

    let map: mapboxgl.Map | undefined
    let geocoder: any
    let popup: mapboxgl.Popup | undefined
    let selectedFeature = undefined;

    
    clicked_location.subscribe(feature =>{
        
        selectedFeature = feature
        if(!map ||!selectedFeature){return}
        
        let coordinates = feature.geometry.coordinates;

        map.flyTo({
            center: coordinates,
            zoom: 15,
            bearing: 0,
            essential: true,
        })

        if (popup) {popup.remove()}
        popup = new mapboxgl.Popup({focusAfterOpen : false})//see https://github.com/mapbox/mapbox-gl-js/issues/10329
                .setLngLat(coordinates)
                .setHTML('<div id="popup-content"></div>')
                .addTo(map)
                
        let popupElement = document.getElementById('popup-content')
         if (popupElement) {
            new Popup({
            target: popupElement,
            props:{
                title: selectedFeature.properties.name,
                description: selectedFeature.properties.description,
                logo: selectedFeature.properties.logo,
                locations: locations
            }
        })
         }       
    });

    async function initializeMap() {
        mapboxgl.accessToken = 
        'pk.eyJ1IjoieWVnb24iLCJhIjoiY2sxMXd5aDB0MGpqdjNubzVqbG0yMndkNiJ9.19E4x9fqoUEtK0EAvPkrRA'

        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 12,
            center: [-77.04, 38.907],
            pitch: 30
        });

        geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
    })
    }

    function loadLayers() {
    if (!map) {
        return
    }

    // Do nothing if source already added
    if (map.getSource('places')) {
        return
    }

    map.addSource('places', {
        type: 'geojson',
        data: locations as any,
    })

    // Add a layer showing the places.
    map.addLayer({
        id: 'places',
        type: 'circle',
        source: 'places',
        paint: {
        'circle-color': 'green',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': 'grey'
        },
    })

    map.on('click', 'places', (e) => {
        clicked_location.set(e.features[0])
        
    })

    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer'
    })
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = ''
    })

    };

    onMount(async() => {
        initializeMap()

        map.on('styledata', () => {
            const loadingStyles = () => {
            if (!map?.isStyleLoaded()) {
                setTimeout(loadingStyles, 1500)
                return
            }

            loadLayers()
            }
            loadingStyles()
        })

        geocoder.onAdd(map)
    })

</script>

<div id="map"  class="w-fullflex-1 rounded-2xl"></div>