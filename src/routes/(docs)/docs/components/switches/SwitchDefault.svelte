<script>
	import { Switch } from '@ubeac/svelte'

	let checked = false
</script>

<Switch bind:checked text="Switch: {checked}" />
