<script>
	import { FormCheckbox } from '@ubeac/svelte'

	let value = false
</script>

<FormCheckbox bind:value label="Form Checkbox" description="this is description" />
<FormCheckbox
	bind:value
	label="Form Checkbox"
	description="this is description by danger color"
	descriptionColor="danger"
/>
