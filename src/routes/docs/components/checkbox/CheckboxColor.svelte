<script>
	import { Checkbox } from '@ubeac/svelte'
	import { COLORS } from '@ubeac/svelte/types'

	let checked = true
</script>

{#each COLORS as color}
	<Checkbox bind:value={checked} text={color} {color} />
{/each}
