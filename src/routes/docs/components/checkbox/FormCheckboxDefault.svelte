<script>
	import { FormCheckbox } from '@ubeac/svelte'

	let checked = false
</script>

<FormCheckbox value={checked} bind:checked label="Form Checkbox" />
