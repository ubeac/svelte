<script lang="ts">
	import { FormCheckboxGroup } from '@ubeac/svelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: any[] = []
</script>

<FormCheckboxGroup label="Select Language" bind:value {items} let:item let:index>
	{index + 1}- {item.text} ({item.code})
</FormCheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
