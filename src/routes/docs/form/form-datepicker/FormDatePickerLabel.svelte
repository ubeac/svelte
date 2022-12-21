<script lang="ts">
	import { FormDatePicker } from '@ubeac/svelte'

	let value: string
</script>

<FormDatePicker col="6" label="date:" placeholder="Enter a date" bind:value />

<span if={!!value}>{value}</span>
