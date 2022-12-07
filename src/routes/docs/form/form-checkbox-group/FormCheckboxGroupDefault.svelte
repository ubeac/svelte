<script lang="ts">
	import { FormCheckboxGroup } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = []
</script>

<FormCheckboxGroup {items} bind:value />

<span if={value.length > 0}>{value}</span>
