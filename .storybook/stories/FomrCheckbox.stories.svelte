<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { FormCheckbox } from '$lib/components'
</script>

<Meta component={FormCheckbox} title="FormCheckbox" />

<Template let:args>
	<FormCheckbox label="default Label" {...args} />
</Template>

<Story name="default" />

<Story name="disabled" args={{ disabled: true }} />
<Story name="id" args={{ id: 'check-1' }} />
<Story name="inline" args={{ inline: true }} let:args>
	<FormCheckbox label="checkbox 1" {...args} />
	<FormCheckbox label="checkbox 2" {...args} />
	<FormCheckbox label="checkbox 3" {...args} />
	<FormCheckbox label="checkbox 4" {...args} />
</Story>
<Story name="label" args={{ label: 'checkbox 1' }} />
<Story name="readonly" args={{ readonly: true }} />
<Story name="required" args={{ required: true }} />
<Story name="value" args={{ value: true }} />
