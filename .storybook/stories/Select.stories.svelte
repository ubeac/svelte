<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Select } from '$lib/components'
</script>

<Meta
	title="Inputs/Select"
	component={Select}
	parameters={{
		actions: {
			handles: ['changed'],
		},
	}} />

<Story name="Default" let:args>
	<Select items={['item 1', 'item 2', 'item 3']} {...args} />
</Story>

<Story name="Items as array of Numbers" args={{ items: [123, 213, 34, 451, 345, 392] }} let:args>
	<Select {...args} />
</Story>

<Story name="Items as array of Strings" args={{ items: ['a', 'b', 'c', 'd', 'e'] }} let:args>
	<Select {...args} />
</Story>

<Story name="Items as Object" args={{ items: { first: 'FIRST', second: 'SECOND', third: 'THIRD' } }} let:args>
	<Select {...args} />
</Story>

<Story
	name="Items as array of Objects"
	args={{
		items: [
			{ key: 'a', value: 'A' },
			{ key: 'b', value: 'B' },
			{ key: 'c', value: 'C' },
		],
		key: 'key',
		text: 'value',
	}}
	let:args>
	<Select {...args} />
</Story>

<Story name="Preview" args={{ value: 'c', items: ['a', 'b', 'c'] }} let:args>
	<Select preview {...args} />
</Story>

<Story name="Value" args={{ value: 'b', items: ['a', 'b', 'c'] }} let:args>
	<Select {...args} />
</Story>
