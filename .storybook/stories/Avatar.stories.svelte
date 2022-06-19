<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Avatar } from '$lib/components'
	import { COLORS } from '$lib/types'

	const SHAPES = ['circle', 'round', 'tile']
	const SIZES = ['xs', 'sm', 'md', 'lg', 'xl']
</script>

<Meta
	title="Avatar"
	component={Avatar}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		shape: {
			control: {
				type: 'radio',
				options: SHAPES,
			},
		},
		size: {
			control: {
				type: 'radio',
				options: SIZES,
			},
		},
	}} />

<Template let:args>
	<Avatar {...args}>
		{args.slot}
	</Avatar>
</Template>

<Story name="default" args={{ slot: 'AB' }} />
<Story name="colors" let:args>
	{#each COLORS as color}
		<Avatar {...args} {color}>AB</Avatar>
		&nbsp;
	{/each}
</Story>
<Story name="shapes" let:args>
	{#each SHAPES as shape}
		<Avatar {...args} {shape}>AB</Avatar>
		&nbsp;
	{/each}
</Story>
<Story name="sizes" let:args>
	{#each SIZES as size}
		<Avatar {...args} {size}>
			{size}
		</Avatar>
		&nbsp;
	{/each}
</Story>
