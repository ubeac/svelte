<script>
	import { FormTextarea, Col, Button, El } from '@ubeac/svelte'
</script>

<El container>
	<El row>
		<FormTextarea cols="6" label="Bio" />
		<FormTextarea cols="6" label="Bio 2" />

		<FormTextarea label="Description" />
		<FormTextarea label="Description 2" />
		<Col class="mt-3" offset="9" cols="3">
			<Button block color="primary">Submit</Button>
		</Col>
	</El>
</El>
