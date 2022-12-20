<script lang="ts">
	import { CheckboxGroup } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = ['Peach']
</script>

<CheckboxGroup inline color="primary" {items} bind:value />
<CheckboxGroup inline color="secondary" {items} bind:value />

<i>value: {JSON.stringify(value)}</i>
