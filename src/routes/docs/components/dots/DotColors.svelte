<script>
	import { Dot, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Dot {color} />
{/each}
