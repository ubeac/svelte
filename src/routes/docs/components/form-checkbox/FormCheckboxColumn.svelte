<script>
	import { FormCheckbox } from '@ubeac/svelte'
	import { Button, Col, Container, FormFieldset, FormHint, Row } from '@ubeac/svelte/components'

	let value = false
</script>

<Container>
	<FormFieldset label="Form checkboxes">
		<Row>
			<FormCheckbox cols="8" label="2/3 width:" text="Check 1" />
			<FormCheckbox cols="4" value label="1/3 width:" text="Check 2" />
			<FormCheckbox cols="4" value label="1/3 width:" text="Check 3" />
			<FormCheckbox cols="4" label="1/3 width:" text="Check 4" required />
			<FormCheckbox cols="4" label="1/3 width:" text="Check 5" required>
				<FormHint slot="message" state="invalid">This field is required</FormHint>
			</FormCheckbox>

			<Col offset="9" cols="auto">
				<Button block>Submit</Button>
			</Col>
		</Row>
	</FormFieldset>
</Container>

<span if={value}>{value}</span>
