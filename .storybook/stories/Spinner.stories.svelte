<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Spinner } from '$lib/components'

	const SIZES = ['sm', 'md']
	const STYLES = ['border', 'grow']
</script>

<Meta
	title="Components/Spinner"
	component={Spinner}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		size: {
			defaultValue: 'sm',
			control: {
				type: 'select',
				options: SIZES,
			},
		},
		style: {
			defaultValue: 'border',
			control: {
				type: 'radio',
				options: STYLES,
			},
		},
	}} />

<Template let:args>
	<Spinner {...args} />
</Template>

<Story name="default" />
<Story name="color" args={{ color: 'blue' }} />
<Story name="size" let:args>
	{#each SIZES as size}
		<Spinner {...args} {size} />
	{/each}
</Story>
<Story name="style" let:args>
	{#each STYLES as style}
		<Spinner {...args} {style} />
	{/each}
</Story>
