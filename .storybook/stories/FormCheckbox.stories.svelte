<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormCheckbox } from '$lib/components'
	import { COLORS } from '$lib/types'
</script>

<Meta
	title="Form/FormCheckbox"
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
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
		descriptionColor: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
	}} />
<Template let:args>
	<FormCheckbox label="checkbox" {...args} on:change={(e) => console.log(e.detail)} />
	<FormCheckbox label="checkbox" {...args} />
</Template>

<Story name="default" />
<Story name="description" args={{ description: 'this is description' }} />
<Story name="description:color" args={{ description: 'this is description', descriptionColor: 'danger' }}>
	{#each COLORS as color, i}
		<FormCheckbox
			label={`form-checkbox ${color}`}
			{color}
			descriptionColor={color}
			description={`this is description by ${color} color`} />
	{/each}
</Story>
<Story name="inline">
	<FormCheckbox label="checkbox 1" inline />
	<FormCheckbox label="checkbox 2" inline />
</Story>
<Story name="label" args={{ label: 'label' }} />
<Story name="value" args={{ value: true }} />
