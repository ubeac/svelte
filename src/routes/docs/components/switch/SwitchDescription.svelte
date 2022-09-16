<script>
	import { Switch } from '@ubeac/svelte'

	let value = false
	let value2 = false
</script>

<Switch bind:value text="Switch 1: {value}" description="This is description of switch" />

<Switch bind:value={value2} text="Switch 2: {value}" descriptionColor="red" description="This is red description" />
