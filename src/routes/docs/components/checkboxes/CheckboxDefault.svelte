<script>
	import { Checkbox } from '@ubeac/svelte'

	let value1 = false
	let value2 = true
</script>

<Checkbox bind:value={value1} label="checkbox 1" />
<Checkbox bind:value={value2} label="checkbox 2" />
