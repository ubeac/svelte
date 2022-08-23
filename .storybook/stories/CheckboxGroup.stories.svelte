<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { CheckboxGroup } from '$lib/components'
	let items = [
		{ label: 'apple', value: 'apple', color:"default" },
		{ label: 'banana', value: 'banana', color:"default" },
		{ label: 'orange', value: 'orange', color:"default" },
		{ label: 'plum', value: 'plum', color:"default" },
	]
	let itemsDanger = [
		{ label: 'apple', value: 'apple', color:"danger" },
		{ label: 'banana', value: 'banana', color:"danger" },
		{ label: 'orange', value: 'orange', color:"danger" },
		{ label: 'plum', value: 'plum', color:"danger" },
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
		}
	}} />

<Story name="default">
	<CheckboxGroup {items} />
</Story>
<Story name="color:danger">
	<CheckboxGroup items={itemsDanger} />
</Story>
<Story name="inline">
	<CheckboxGroup row {items} />
</Story>
<Story name="disable">
	<CheckboxGroup row items={items2} />
</Story>
