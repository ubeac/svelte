<script>
	import { Switch } from '@ubeac/svelte'

	let value = false
</script>

<Switch bind:value text="Switch: {value}" />
