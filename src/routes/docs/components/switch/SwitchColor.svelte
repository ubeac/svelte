<script>
	import { Switch } from '@ubeac/svelte'
	import { COLORS } from '@ubeac/svelte/types'

	let value = true
</script>

{#each COLORS as color}
	<Switch {value} label={color} {color} />
{/each}
