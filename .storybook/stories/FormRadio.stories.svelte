<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormRadio } from '$lib/components'
	import { COLORS } from '$lib/types'

	let group = ''
</script>

<Meta
	title="FormRadio"
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
	<FormRadio value="radio1" label="form-radio 1" bind:group {...args} />
	<FormRadio value="radio2" label="form-radio 2" bind:group {...args} />
	<FormRadio value="radio3" label="form-radio 3" bind:group {...args} />
	<FormRadio value="radio4" label="form-radio 4" bind:group {...args} />
</Template>

<Story name="default" />
<Story name="description" args={{ description: 'this is description' }} />
<Story name="description:color" args={{ description: 'this is description', descriptionColor: 'danger' }}>
	{#each COLORS as color, i}
		<FormRadio
			value={`radio${i + 1}`}
			label={`form-radio ${i + 1}`}
			bind:group
			descriptionColor={color}
			description="this is description" />
	{/each}
</Story>
<Story name="group" args={{ group: 'radio2' }} />
<Story name="inline" args={{ inline: true }} />
<Story name="label" args={{ label: 'label' }} />
