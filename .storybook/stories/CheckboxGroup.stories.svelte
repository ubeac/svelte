<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { CheckboxGroup } from '$lib/components'
	let items = [
		{ label: 'apple', value: 'apple' },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange' },
		{ label: 'plum', value: 'plum' },
	]
	let items2 = [
		{ label: 'apple', value: 'apple' },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange', disabled: true },
		{ label: 'plum', value: 'plum', disabled: true },
	]
</script>

<Meta
	title="CheckboxGroup"
	component={CheckboxGroup}
	argTypes={{
		group: {
			control: 'text',
		},
	}} />

<Story name="default">
	<CheckboxGroup {items} />
</Story>
<Story name="inline">
	<CheckboxGroup row {items} />
</Story>
<Story name="disable">
	<CheckboxGroup row items={items2} />
</Story>
