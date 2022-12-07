<script>
	import { Spinner, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Spinner animate="grow" {color} />
{/each}
