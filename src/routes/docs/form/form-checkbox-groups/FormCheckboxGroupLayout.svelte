<script>
	import { Button, Col, FormFieldset, FormCheckboxGroup, El } from '@ubeac/svelte'
	let value = false

	let items = ['HTML', 'CSS', 'JS', 'SVELTE']
	let items2 = ['Dark', 'Light']
	let items3 = ['Red', 'Green', 'Blue', 'Yellow']
	let items4 = ['Apple', 'Banana', 'Cherry']
	let items5 = ['Active', 'Inactive', 'Online', 'Offline']
</script>

<El container>
	<FormFieldset label="Form checkbox Groups">
		<El row>
			<FormCheckboxGroup col="8" inline {items} label="Choose Languages (inline):" />
			<FormCheckboxGroup col="4" items={items2} value={[items[1]]} label="Choose Theme:" />
			<FormCheckboxGroup col="4" items={items3} value={[items[1], items[2]]} label="Colors:" />
			<FormCheckboxGroup col="4" items={items4} label="Fruits:" required />
			<FormCheckboxGroup col="4" items={items5} label="State:" required />

			<Col offset="9" cols="auto">
				<Button>Submit</Button>
			</Col>
		</El>
	</FormFieldset>
</El>

<span if={value}>{value}</span>
