<script lang="ts">
	import { FormSelect, Select } from '$lib/components'

	let items = [
		{
			text: 'apple',
			value: 'apple',
		},
		{
			text: 'banana',
			value: 'banana',
		},
		{
			text: 'lemon',
			value: 'lemon',
		},
	]
</script>

<div style="width: 50%; padding: 20px">
	<h4>Single Select</h4>
	<Select {items} />
</div>

<div style="width: 50%; padding: 20px">
	<h4>Multiple Select</h4>
	<Select {items} multiple size="2" />
</div>
