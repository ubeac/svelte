<script lang="ts">
	import { FormDatePicker } from '@ubeac/svelte'

	let value: string
</script>

<FormDatePicker cols="6" label="date:" placeholder="Enter a date" bind:value />

<i>{value}</i>
