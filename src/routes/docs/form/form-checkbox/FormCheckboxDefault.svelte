<script>
	import { FormCheckbox } from '@ubeac/svelte'
	let value = false
</script>

<FormCheckbox bind:value label="Form Checkbox" text="Check 1" />

<span if={value}>{value}</span>
