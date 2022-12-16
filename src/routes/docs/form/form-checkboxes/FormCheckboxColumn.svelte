<script>
	import { Button, Col, FormFieldset, FormHint, FormCheckbox, El } from '@ubeac/svelte'
	let value = false
</script>

<El container>
	<FormFieldset label="Form checkboxes">
		<El row>
			<FormCheckbox col="8" label="2/3 width:">Check 1</FormCheckbox>
			<FormCheckbox col="4" value label="1/3 width:">Check 2</FormCheckbox>
			<FormCheckbox col="4" value label="1/3 width:">Check 3</FormCheckbox>
			<FormCheckbox col="4" label="1/3 width:" required>Check 4</FormCheckbox>
			<FormCheckbox col="4" label="1/3 width:" required>Check 5</FormCheckbox>

			<Col offset="9" cols="auto">
				<Button w="100">Submit</Button>
			</Col>
		</El>
	</FormFieldset>
</El>

<span if={value}>{value}</span>
