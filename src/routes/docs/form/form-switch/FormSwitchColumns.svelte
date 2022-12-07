<script>
	import { FormSwitch, Button, Col, FormFieldset, FormHint, El } from '@ubeac/svelte'
</script>

<El container>
	<FormFieldset label="Form Switches">
		<El row>
			<FormSwitch cols="8" label="2/3 width:" text="Switch 1" />
			<FormSwitch cols="4" value label="1/3 width:" text="Switch 2" />
			<FormSwitch cols="4" value label="1/3 width:" text="Switch 3" />
			<FormSwitch cols="4" label="1/3 width:" text="Switch 4" required />
			<FormSwitch cols="4" label="1/3 width:" text="Switch 5" required>
				<FormHint slot="message" state="invalid">This field is required</FormHint>
			</FormSwitch>

			<Col offset="9" cols="auto">
				<Button block>Submit</Button>
			</Col>
		</El>
	</FormFieldset>
</El>
