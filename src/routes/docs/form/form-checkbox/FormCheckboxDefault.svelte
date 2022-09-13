<script>
	import { FormCheckbox } from '@ubeac/svelte'

	let value = false
</script>

<FormCheckbox bind:value label="Form Checkbox" />

<span if={value}>{value}</span>
