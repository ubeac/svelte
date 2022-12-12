<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	let selected: string
</script>

<RadioGroup bind:value={selected} items={['Option 1', 'Option 2', 'Option 3']} />

<span if={!!selected}>You selected: {selected}</span>
