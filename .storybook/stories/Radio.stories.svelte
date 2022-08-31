<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { Radio, RadioGroup } from '$lib/components'
	import { COLORS } from '$lib/types'

	let items = [
		{ label: 'apple', value: false },
		{ label: 'banana', value: true },
		{ label: 'orange', value: false },
		{ label: 'plum', value: false },
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

<Story name="Group" let:args>
	<RadioGroup {items} {...args} />
</Story>

<Story name="Value">
	<Radio value label="checkbox1" />
</Story>

<Story name="Disabled">
	<Radio label="disabled" disabled />
</Story>
