<script>
	import { Switch } from '@ubeac/svelte'

	let value1 = false
	let value2 = false
</script>

<Switch bind:value={value1} text="Switch 1: {value1}">
	<div slot="description">this is description slot</div>
</Switch>

<Switch bind:value={value2} text="Switch 2: {value2}" description="this is description prop" />
