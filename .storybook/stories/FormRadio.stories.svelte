<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormRadio } from '$lib/components'
	import { COLORS } from '$lib/types'

	let group = ''
</script>

<Meta
	title="Form/FormRadio"
	component={FormRadio}
	argTypes={{
		description: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
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
		descriptionColor: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'default',
				options: COLORS,
			},
		},
	}} />

<Template let:args>
	<FormRadio label="form-radio 1" bind:group {...args} />
</Template>

<Story name="default" let:args>
	<FormRadio label="form-radio 1" bind:group {...args} />
</Story>
<Story name="description" args={{ description: 'this is description' }} />
<Story name="description:color" args={{ description: 'this is description', descriptionColor: 'danger' }}>
	{#each COLORS as color, i}
		<FormRadio
			label={`form-radio ${color}`}
			{color}
			bind:group
			descriptionColor={color}
			description={`this is description by ${color} color`} />
	{/each}
</Story>
<Story name="group" args={{ group: 'radio2' }} />
<Story name="label" args={{ label: 'label' }} />
