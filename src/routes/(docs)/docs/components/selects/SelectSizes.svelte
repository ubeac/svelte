<script lang="ts">
	import { Select } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Select selectSize="lg" bind:value {items} />
<Select bind:value {items} />
<Select selectSize="sm" bind:value {items} />

<i>Selected value: {value}</i>
