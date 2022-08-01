<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Icon } from '$lib/components'

	// TODO: why we should have x in numbered values
	const SIZES = ['auto', 'xs', 'sm', 'md', 'lg', 'xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x']
</script>

<Meta
	title="Components/Icon"
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

<Story name="default" let:args>
	<Icon {...args} name="ghost" />
	<Icon {...args} name="star" />
	<Icon {...args} name="bike" />
	<Icon {...args} name="heart" />
	<Icon {...args} name="menu" />
	<Icon {...args} name="plus" />
	<Icon {...args} name="upload" />
	<Icon {...args} name="user" />
</Story>

<Story name="Icon colors" let:args>
	<div>
		{#each COLORS as color}
			<Icon {...args} name="user" {color} />
		{/each}
	</div>
</Story>
<Story name="Icon sizes" let:args>
	{#each SIZES as size}
		<div style="margin: 5px;">
			<Icon {...args} name="star" {size} />{size}
		</div>
	{/each}
</Story>
