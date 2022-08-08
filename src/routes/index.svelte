<script lang="ts">
	import { Divider } from '$lib/components'
	import { Radio, RadioGroup } from '$lib/components/index'

	let value = false
	function onChange(event) {
		console.log('obj')
		console.log(event)
	}
</script>

{value}
<Divider />
<RadioGroup row>
	<Radio on:change={onChange} value="10" label="10" name="test" />
	<Radio on:change={onChange} value="20" label="20" name="test" />
</RadioGroup>
