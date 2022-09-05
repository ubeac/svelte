<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { FormCheckboxGroup } from '$lib/components'
	import { COLORS } from '$lib/types'

	let selectedValues = ['apple', 'banana']

	let items = [
		{ text: 'apple', key: 'apple' },
		{ text: 'banana', key: 'banana' },
		{ text: 'orange', key: 'orange' },
		{ text: 'plum', key: 'plum' },
	]
</script>

<Meta
	title="Form/FormCheckboxGroup"
	component={FormCheckboxGroup}
	argTypes={{
		group: {
			control: 'text',
		},
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'default',
				options: COLORS,
			},
		},
	}} />

<Story name="Default" let:args>
	<FormCheckboxGroup {items} {...args} />
</Story>

<Story name="Group">
	<FormCheckboxGroup {items} />
</Story>

<Story name="Inline">
	<FormCheckboxGroup {items} inline />
</Story>

<Story name="Colors">
	<div class="d-flex">
		<div class="mx-2">
			<FormCheckboxGroup {items} color="blue" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="azure" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="indigo" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="purple" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="pink" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="red" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="orange" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="yellow" value={selectedValues} inline={true} />
		</div>
		<div class="mx-2">
			<FormCheckboxGroup {items} color="lime" value={selectedValues} inline={true} />
		</div>
	</div>
</Story>
