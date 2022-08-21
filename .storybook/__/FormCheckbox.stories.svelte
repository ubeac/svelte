<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormCheckbox } from '$lib/components'
</script>

<Meta
	title="FormCheckbox"
	component={FormCheckbox}
	argTypes={{
		description: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
		value: {
			control: 'boolean',
		},
	}} />
<Template let:args>
	<FormCheckbox label="checkbox" {...args} />
	<FormCheckbox label="checkbox" {...args} />
	<FormCheckbox label="checkbox" {...args} />
</Template>

<Story name="default" />
<Story name="description" args={{ description: 'this is description' }} />
<Story name="inline" args={{ inline: true }} />
<Story name="label" args={{ label: 'label' }} />
<Story name="value" args={{ value: true }} />
