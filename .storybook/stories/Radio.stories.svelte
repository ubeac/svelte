<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { Radio, RadioGroup } from '$lib/components'
	import { COLORS } from '$lib/types'

	let items = [
		{ text: 'apple', key: 'apple' },
		{ text: 'banana', key: 'banana' },
		{ text: 'orange', key: 'orange' },
		{ text: 'plum', key: 'plum' },
	]

	let itemsRelatedName = [
		{ label: 'apple', value: 'apple' },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange' },
		{ label: 'plum', value: 'plum' },
	]
</script>

<Meta
	title="Inputs/RadioGroup"
	component={RadioGroup}
	argTypes={{
		group: {
			control: 'text',
		},
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
	}}
	parameters={{
		actions: {
			handles: ['changed'],
		},
	}} />

<Story name="Default" let:args>
	<RadioGroup {items} {...args} />
</Story>

<Story name="Custom Related Item Name" let:args>
	<RadioGroup items={itemsRelatedName} {...args} text="label" key="value" />
</Story>

<Story name="Group" let:args>
	<RadioGroup {items} {...args} />
</Story>

<Story name="Value">
	<Radio value label="checkbox1" />
</Story>

<Story name="Disabled">
	<Radio label="disabled" disabled />
</Story>
