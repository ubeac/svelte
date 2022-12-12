<script lang="ts">
	import { FormTextarea } from '@ubeac/svelte'

	let value: string
</script>

<FormTextarea cols="6" label="Text:" placeholder="Enter some text here" bind:value />

<span if={!!value}>{value}</span>
