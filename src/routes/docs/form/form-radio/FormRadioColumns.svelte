<script>
	import { FormRadio, Button, Col, Container, FormFieldset, FormHint, Row } from '@ubeac/svelte'
</script>

<Container>
	<FormFieldset label="Form Radios">
		<Row>
			<FormRadio cols="8" label="2/3 width:" text="Radio 1" />
			<FormRadio cols="4" value label="1/3 width:" text="Radio 2" />
			<FormRadio cols="4" value label="1/3 width:" text="Radio 3" />
			<FormRadio cols="4" label="1/3 width:" text="Radio 4" required />
			<FormRadio cols="4" label="1/3 width:" text="Radio 5" required>
				<FormHint slot="message" state="invalid">This field is required</FormHint>
			</FormRadio>

			<Col offset="9" cols="auto">
				<Button block>Submit</Button>
			</Col>
		</Row>
	</FormFieldset>
</Container>
