import DefaultLayoutSvelte from './layouts/DefaultLayout.svelte'
import Counter from './views/Counter.svelte'
import Map from './views/maps/Map.svelte'

let routes = [
    {name: "/", component: Counter, layout: DefaultLayoutSvelte},
    {name: "maps", component: Map, layout: DefaultLayoutSvelte},
]

export { routes }