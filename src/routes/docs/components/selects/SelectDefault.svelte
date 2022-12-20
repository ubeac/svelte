<script lang="ts">
	import { El, Select } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Select bind:value {items} />

<El>Selected value: {value}</El>
