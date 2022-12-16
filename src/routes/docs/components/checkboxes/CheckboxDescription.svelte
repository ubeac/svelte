<script>
	import { Checkbox } from '@ubeac/svelte'

	let value = false
</script>

<Checkbox bind:value label="label" description="this is description" />
<Checkbox bind:value label="this is label" description="this is another description" />
