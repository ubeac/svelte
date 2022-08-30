<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { CheckboxGroup } from '$lib/components'
	import { COLORS } from '$lib/types'

	let selectedValues = ['apple', 'banana']
	let items = [
		{ text: 'apple', key: 'apple' },
		{ text: 'banana', key: 'banana' },
		{ text: 'orange', key: 'orange' },
		{ text: 'plum', key: 'plum' },
	]
	let itemsDanger = [
		{ text: 'apple', key: 'apple' },
		{ text: 'banana', key: 'banana' },
		{ text: 'orange', key: 'orange' },
		{ text: 'plum', key: 'plum' },
	]
	let itemsDisabled = [
		{ text: 'apple', key: 'apple', disabled: 'true' },
		{ text: 'banana', key: 'banana' },
		{ text: 'orange', key: 'orange' },
		{ text: 'plum', key: 'plum' },
	]
</script>

<Meta
	title="CheckboxGroup"
	component={CheckboxGroup}
	argTypes={{
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
	}} />

<Story name="default" let:args>
	<CheckboxGroup {...args} {items} value={selectedValues} />
</Story>

<Story name="Colors">
	<div class="d-flex">
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="blue" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="azure" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="indigo" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="purple" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="pink" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="red" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="orange" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="yellow" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<CheckboxGroup items={itemsDanger} color="lime" value={selectedValues} inline={true} />
		</div>
	</div>
</Story>

<Story name="Inline">
	<CheckboxGroup inline {items} value={selectedValues} />
</Story>

<Story name="Disabled">
	<CheckboxGroup inline items={itemsDisabled} value={selectedValues} />
</Story>
