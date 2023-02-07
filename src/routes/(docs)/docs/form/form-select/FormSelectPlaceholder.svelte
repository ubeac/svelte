<script lang="ts">
	import { FormSelect } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormSelect label="Label" bind:value {items} placeholder="Please select an item" />
<i>Selected value: {value}</i>
