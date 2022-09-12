<script>
	import { FormCheckbox } from '@ubeac/svelte'

	let checked = false
</script>

<FormCheckbox value={checked} bind:checked label="Form Checkbox" description="this is description" />
<FormCheckbox
	value={checked}
	bind:checked
	label="Form Checkbox"
	description="this is description by danger color"
	descriptionColor="danger" />
