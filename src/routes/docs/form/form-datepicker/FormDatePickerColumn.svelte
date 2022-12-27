<script>
	import { FormDatePicker, Button, El } from '@ubeac/svelte'
</script>

<El container>
	<El row>
		<FormDatePicker label="Birth Date" />
		<FormDatePicker label="Graduation Date" />

		<FormDatePicker cols="6" label="Start Date" />
		<FormDatePicker cols="6" label="End Date" />
		<El offset="9" col="3">
			<Button color="primary">Submit</Button>
		</El>
	</El>
</El>
