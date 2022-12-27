<script>
	import { Switch } from '@ubeac/svelte'

	let value1 = false
	let value2 = false
	let value3 = false
	let value4 = false
</script>

<Switch bind:value={value1} label="Switch 1: {value1}" />
<Switch bind:value={value2} checked label="Switch 2: {value2}" />
<Switch bind:value={value3} disabled checked label="Switch 3: {value3}" />
<Switch bind:value={value4} disabled label="Switch 4: {value4}" />
