<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	let items = [
		{ text: 'HTML', value: 'html' },
		{ text: 'CSS', value: 'css' },
		{ text: 'JavaScript', value: 'js' },
		{ text: 'Svelte', value: 'svelte' },
	]

	let value: any = undefined
</script>

<RadioGroup bind:value {items} label={(item) => item.text} />

<i>You selected: {JSON.stringify(value)}</i>
