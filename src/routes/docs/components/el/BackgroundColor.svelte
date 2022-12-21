<script>
	import { El, BACKGROUND_COLOR_TYPES } from '@ubeac/svelte'
</script>

{#each BACKGROUND_COLOR_TYPES.slice(0, 16) as color}
	<El bgColor={color}>{color}</El>
{/each}
