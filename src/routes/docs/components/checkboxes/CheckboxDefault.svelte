<script>
	import { Checkbox } from '@ubeac/svelte'

	let value1 = false
	let value2 = true
</script>

<Checkbox bind:value={value1} text="checkbox" />
<Checkbox bind:value={value2} text="checkbox" />
