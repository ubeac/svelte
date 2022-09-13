<script lang="ts">
	import { FormRadioGroup } from '@ubeac/svelte'

	let selected: string
</script>

<FormRadioGroup label="Radio Group" bind:value={selected} items={['Option 1', 'Option 2', 'Option 3']} />

<span if={!!selected}>You selected: {selected}</span>
