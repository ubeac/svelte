<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormFieldset, FormInput } from '$lib/components'
</script>

<Meta
	title="FormFieldset"
	component={FormFieldset}
	argTypes={{
		label: {
			control: 'text',
		},
	}} />

<Template let:args>
	<FormFieldset label="filedset" {...args}>
		<FormInput col="12" label="input1" placeholder2="input1" />
		<FormInput col="12" label="input2" placeholder2="input2" />
	</FormFieldset>
</Template>

<Story name="default" />
<Story name="id" args={{ id: 'fieldset-1' }} />
<Story name="label" args={{ label: 'label' }} />
