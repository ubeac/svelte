<script>
	import { Switch } from '@ubeac/svelte'

	let checked = false
</script>

<Switch reverse bind:checked text="Switch: {checked}" />
