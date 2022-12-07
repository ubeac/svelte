<script>
	import { Spinner, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Spinner animate="border" {color} />
{/each}
