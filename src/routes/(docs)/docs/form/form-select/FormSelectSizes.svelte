<script lang="ts">
	import { FormSelect } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormSelect label="Label" size="lg" bind:value {items} />
<FormSelect label="Label" bind:value {items} />
<FormSelect label="Label" size="sm" bind:value {items} />

<i>Selected value: {value}</i>
