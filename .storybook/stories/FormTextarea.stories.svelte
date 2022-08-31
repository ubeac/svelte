<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormTextarea } from '$lib/components'
</script>

<Meta
	title="Form/FormTextarea"
	component={FormTextarea}
	argTypes={{
		col: {
			control: 'text',
		},
		icon: {
			control: 'text',
		},
		id: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
		value: {
			control: 'text',
		},
	}} />

<Template let:args>
	<FormTextarea label="textarea" {...args} />
</Template>

<Story name="default" />
<Story name="col" args={{ col: '12' }} />
<Story name="icon" args={{ icon: 'user' }} />
<Story name="id" args={{ id: 'textarea-1' }} />
<Story name="label" args={{ label: 'label' }} />
<Story name="loading" args={{ loading: true }} />
<Story name="required" args={{ required: true }} />
<Story name="value" args={{ value: 'changed value' }} />
