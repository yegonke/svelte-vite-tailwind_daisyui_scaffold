<script lang="ts">
    export let title = "";
    export let description = "";
    export let logo = "";
    export let locations = undefined;
</script>

<div class="uk-border-rounded uk-margin-small uk-padding-small" type="button">        
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
            <img class="uk-border-circle" width="40" height="40" alt="" src="https://vuero.cssninja.io/{logo}">
        </div>
        <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">{title} </h3>
            <p class="uk-text-meta uk-margin-remove-top">{description}</p>

            <button class="uk-button uk-button-default uk-border-pill" type="button">20 Active</button>

        </div>
    </div>
</div>

<div class="boundary-align"></div>
       