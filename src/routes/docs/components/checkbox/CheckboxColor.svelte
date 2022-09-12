<script>
	import { Checkbox } from '@ubeac/svelte'
	import { COLORS } from '@ubeac/svelte/types'

	let checked = false
</script>

{#each COLORS as color}
	<Checkbox value={checked} bind:checked label={color} {color} />
{/each}
