<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	let selected: string
</script>

<RadioGroup bind:value={selected} items={['Option 1', 'Option 2', 'Option 3']} />

<i if={!!selected}>You selected: {selected}</i>
