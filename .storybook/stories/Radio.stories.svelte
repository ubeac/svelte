<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Radio } from '$lib/components'
</script>

<Meta
	title="Radio"
	component={Radio}
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
