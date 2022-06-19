<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Icon } from '$lib/components'

	const SIZES = ['auto', 'xs', 'sm', 'md', 'lg', 'xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x']
</script>

<Meta
	title="Icon"
	component={Icon}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		size: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				options: SIZES,
			},
		},
	}} />

<Template let:args>
	<Icon {...args} />
</Template>

<Story name="default" args={{ name: 'menu' }} />
<Story name="color" let:args>
	{#each COLORS as color}
		<Icon {...args} name="user" {color} />
	{/each}
</Story>
<Story name="size" let:args>
	{#each SIZES as size}
		<Icon {...args} name="menu" {size} />
	{/each}
</Story>
