<script>
	import { Radio, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<label>
		<Radio value {color} />
		<span>{color}</span>
	</label>
{/each}

<style>
	label {
		margin: 0.5rem;
	}
</style>
