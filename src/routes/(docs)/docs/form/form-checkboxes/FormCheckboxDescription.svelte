<script>
	import { FormCheckbox } from '@ubeac/svelte'
	let value = false
</script>

<FormCheckbox bind:value label="Form Checkbox" description="this is description">Text</FormCheckbox>
<FormCheckbox bind:value label="Form Checkbox" description="this is description by danger color">Text</FormCheckbox>
