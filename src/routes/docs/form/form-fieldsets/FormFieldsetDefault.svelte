<script>
	import { FormFieldset, FormInput, FormCheckbox } from '@ubeac/svelte'
</script>

<FormFieldset label="Contact Information">
	<FormInput placeholder="Full name" mb="2" />
	<FormInput placeholder="Company" mb="2" />
	<FormInput placeholder="Email" mb="2" />
	<FormInput placeholder="Phone number" mb="2" />
	<FormCheckbox mb="2">I agree to the terms and conditions</FormCheckbox>
</FormFieldset>
