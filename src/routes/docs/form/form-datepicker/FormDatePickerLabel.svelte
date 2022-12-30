<script lang="ts">
	import { FormDatePicker } from '@ubeac/svelte'

	let value: string
</script>

<FormDatePicker label="Hiring date" placeholder="Enter a date" bind:value />
<i>{value}</i>
