<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormDatePicker } from '$lib/components'
</script>

<Meta
	title="Components/Form/DatePicker"
	component={FormDatePicker}
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
	}} />

<Template let:args>
	<FormDatePicker label="datepicker" {...args} />
</Template>

<Story name="default" />
<Story name="col" args={{ col: '4' }} />
<Story name="icon" args={{ icon: 'user' }} />
<Story name="id" args={{ id: 'datepicker-1' }} />
<Story name="label" args={{ label: 'label' }} />
<Story name="loading" args={{ loading: true }} />
<Story name="required" args={{ required: true }} />
