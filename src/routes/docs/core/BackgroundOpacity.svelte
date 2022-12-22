<script>
	import { El, OPACITY_TYPES } from '@ubeac/svelte'
</script>

{#each OPACITY_TYPES as opacity}
	<El bgOpacity={opacity} bgColor="blue">{opacity}</El>
{/each}
