<script lang="ts">
	import { Divider } from '$lib/components'
	import { Checkbox } from '$lib/components/index'

	let value: any[] = []
	let items = [
		{ label: '10', value: 10 },
		{ label: '20', value: 20 },
		{ label: '30', value: 30 },
	]
</script>

{value}
<Divider />
<Checkbox inline bind:model={value} value="apple" label="apple" />
<Checkbox inline bind:model={value} value="banana" label="banana" />
<Checkbox inline bind:model={value} value="orange" label="orange" />
<Checkbox inline bind:model={value} value="plum" label="plum" />
