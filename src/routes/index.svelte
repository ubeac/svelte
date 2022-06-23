<script lang="ts">
	import { Button, FormFieldset, FormRadio, Grid, Radio } from '$lib/components'

	let value = ''
	let value2 = ''

	function changeValue(val) {
		value = val
	}
	function changeValue2(val) {
		value2 = val
	}
</script>

<div>
	<Button color="red">This is button</Button>
	<Grid>
		<Button block>This is another button</Button>
		<Button color="secondary" elevation={0}>This is button 3</Button>
		<Button color="primary" elevation={0}>This is button 3</Button>
	</Grid>

	<FormFieldset label="Radio {value}">
		<FormRadio on:change={() => changeValue('Red')} label="Red" name="color" />
		<FormRadio on:change={() => changeValue('Green')} label="Green" name="color" />
		<FormRadio on:change={() => changeValue('Blue')} label="Blue" name="color" />
	</FormFieldset>

	<FormFieldset label="Inline radio {value2}">
		<FormRadio inline on:change={() => changeValue2('Red')} label="Red" name="color2" />
		<FormRadio inline on:change={() => changeValue2('Green')} label="Green" name="color2" />
		<FormRadio inline on:change={() => changeValue2('Blue')} label="Blue" name="color2" />
	</FormFieldset>
</div>
