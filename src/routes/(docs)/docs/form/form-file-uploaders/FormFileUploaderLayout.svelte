<script>
	import { FormInput, FormFileUploader, Button, El } from '@ubeac/svelte'
</script>

<El row>
	<FormInput label="First Name" col="6" />
	<FormInput label="Last Name" col="6" />
	<FormInput label="Username" col="12" />
	<FormInput label="Email" col="12" />
	<FormInput label="Password" col="6" />
	<FormInput label="Repeat Password" col="6" />
	<FormFileUploader label="Profile Picture" col="6" />
	<FormFileUploader label="Resume" col="6" />
	<El col textAlign="end">
		<Button color="primary">Submit</Button>
	</El>
</El>
