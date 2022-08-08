<script lang="ts">
	import { Divider } from '$lib/components'
	import { Radio, RadioGroup } from '$lib/components/index'

	let value = 10
	function onChange(event) {
		console.log('obj')
		console.log(event)
	}
</script>

{value}
<Divider />
<RadioGroup
	row
	bind:value
	items={[
		{ label: '10', value: 10 },
		{ label: '20', value: 20 },
		{ label: '30', value: 30 },
	]}>
	<!-- <Radio on:change={onChange} value="10" label="10" name="test" />
	<Radio on:change={onChange} value="20" label="20" name="test" /> -->
</RadioGroup>
