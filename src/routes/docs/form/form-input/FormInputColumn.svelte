<script>
	import { FormInput, Col, Button, El } from '@ubeac/svelte'
</script>

<El container>
	<El row>
		<FormInput label="First Name" col="6" />
		<FormInput label="Last Name" col="6" />
		<FormInput label="Username" col="12" />
		<FormInput label="Email" col="12" />
		<FormInput label="Password" col="6" />
		<FormInput label="Repeat Password" col="6" />
		<Col mt="3" offset="9" col="3">
			<Button color="primary">Submit</Button>
		</Col>
	</El>
</El>
