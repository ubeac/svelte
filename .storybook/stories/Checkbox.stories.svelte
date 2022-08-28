<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Checkbox } from '$lib/components'
	import { COLORS } from '$lib/types'
</script>

<Meta
	component={Checkbox}
	title="Checkbox"
	argTypes={{
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
		label: {
			control: {
				type: 'text',
			},
		},
	}} />

<Template let:args>
	<Checkbox {...args} label="checkbox1" />
</Template>

<Story name="default" />

<Story name="disabled" let:args>
	<Checkbox {...args} disabled label="checkbox1" value={true} />
</Story>

<Story name="checked" let:args>
	<Checkbox {...args} label="checkbox1" value={true} />
</Story>

<Story name="Colors" let:args>
	<Checkbox {...args} value={true} inline color="blue" label="checkbox1" />
	<Checkbox {...args} value={true} inline color="azure" label="checkbox2" />
	<Checkbox {...args} value={true} inline color="indigo" label="checkbox3" />
	<Checkbox {...args} value={true} inline color="purple" label="checkbox4" />
	<Checkbox {...args} value={true} inline color="pink" label="checkbox5" />
	<Checkbox {...args} value={true} inline color="red" label="checkbox6" />
	<Checkbox {...args} value={true} inline color="orange" label="checkbox7" />
	<Checkbox {...args} value={true} inline color="yellow" label="checkbox8" />
	<Checkbox {...args} value={true} inline color="lime" label="checkbox9" />
	<Checkbox {...args} value={true} inline color="green" label="checkbox10" />
	<Checkbox {...args} value={true} inline color="teal" label="checkbox11" />
	<Checkbox {...args} value={true} inline color="cyan" label="checkbox11" />
</Story>
