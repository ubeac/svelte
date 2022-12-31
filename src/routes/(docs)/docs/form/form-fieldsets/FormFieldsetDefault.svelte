<script>
	import { FormFieldset, FormInput, FormCheckbox } from '@ubeac/svelte'
</script>

<FormFieldset label="Contact Information">
	<FormInput placeholder="Full name" label="Full name" required />
	<FormInput placeholder="Company" label="Company" />
	<FormInput placeholder="Email" label="Email" required />
	<FormInput placeholder="Phone number" label="Phone number" />
	<FormCheckbox required>I agree to the terms and conditions</FormCheckbox>
</FormFieldset>
