<script>
	import { Checkbox } from '@ubeac/svelte'

	let value1 = false
	let value2 = true
	let value3 = false
</script>

<Checkbox bind:value={value1} label="Option 1" />
<Checkbox bind:value={value2} label="Option 2" />
<Checkbox bind:value={value3} label="Option 3" />
<i>Options: {value1}, {value2}, {value3} </i>
