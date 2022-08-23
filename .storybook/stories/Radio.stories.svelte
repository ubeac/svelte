<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Radio, RadioGroup } from '$lib/components'
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
	title="RadioGroup"
	component={RadioGroup}
	argTypes={{
		group: {
			control: 'text',
		},
	}}
	parameters={{
		actions: {
			handles: ['changed'],
		},
	}} />


<Story name="Default" let:args>
	<Radio name="radio" value="radio1" {...args} />
	<Radio name="radio" value="radio2" {...args} />
	<Radio name="radio" value="radio3" {...args} />
</Story>

<Story name="Group" args={{ group: 'radio2' }} let:args>
	<Radio name="radio" value="radio1" {...args} />
	<Radio name="radio" value="radio2" {...args} />
	<Radio name="radio" value="radio3" {...args} />
</Story>

<Story name="color:danger" args={{ group: 'radio2' }} let:args>
	<Radio name="radio" value="radio1" {...args} color="danger" />
	<Radio name="radio" value="radio2" {...args} color="danger" />
	<Radio name="radio" value="radio3" {...args} color="danger" />
</Story>

<Story name="Value">
	<div class="example-radios">
		<Radio />
		<Radio value />
	</div>
</Story>

<Story name="Disabled">
	<div class="example-radios">
		<Radio disabled />
		<Radio value disabled />
	</div>
</Story>
