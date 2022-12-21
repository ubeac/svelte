<script>
	import { FormCheckbox } from '@ubeac/svelte'
	let value = false
</script>

<FormCheckbox description="This is description" bind:value label="Form Checkbox">Check 1</FormCheckbox>

<span if={value}>{value}</span>
