<script lang="ts">
	import { Button, FormFieldset, Grid, Radio } from '$lib/components'

	let value = ''
	let value2 = ''

	function changeValue(val) {
		value = val
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
		<Radio on:change={() => changeValue('Red')} name="color" />
		<Radio on:change={() => changeValue('Green')} name="color" />
		<Radio on:change={() => changeValue('Blue')} name="color" />
	</FormFieldset>

	<Radio disabled on:change={() => changeValue('Green')} name="color" />
	<Radio disabled on:change={() => changeValue('Blue')} name="color" />
</div>
