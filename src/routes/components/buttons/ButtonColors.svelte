<script>
    import { Button } from "@ubeac/svelte";

    let colors = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
</script>

{#each colors as color}
    <Button {color}>Button {color}</Button>
{/each}