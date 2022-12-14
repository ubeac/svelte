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

<RadioGroup bind:value {items} label={(item) => item.text} />

<i>You selected: {JSON.stringify(value)}</i>
