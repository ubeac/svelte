<script lang="ts">
    /** Color of button */
    export let color: 'red' | 'green' | 'blue' = 'red'
</script>
<button on:click style:color>
    <slot/>
</button>