<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	let items = [
		{ color: 'Red', hex: '#ff0000' },
		{ color: 'Green', hex: '#00ff00' },
		{ color: 'Blue', hex: '#0000ff' },
		{ color: 'White', hex: '#ffffff' },
		{ color: 'Black', hex: '#000000' },
	]

	let selected: string
</script>

<RadioGroup inline {items} key="hex" text="color" bind:value={selected} />
<span if={!!selected}>You selected: {selected}</span>
