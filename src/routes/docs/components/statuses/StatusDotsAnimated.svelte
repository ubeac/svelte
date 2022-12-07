<script>
	import { Status, Dot, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Status {color}>
		<Dot {color} animated />
		{color}</Status>
{/each}
