<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: any = undefined
</script>

<RadioGroup bind:value {items} let:item let:index>
	{index + 1}- {item.text} ({item.code})
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
