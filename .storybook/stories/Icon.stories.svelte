<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Icon, ICON_SIZES } from '$lib/components'

	const MATERIAL_ICONS = ['bell', 'brightness', 'volume', 'account-plus', 'camera-plus', 'data-matrix-remove']

	// TODO: why we should have x in numbered values
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
				options: ICON_SIZES,
			},
		},
	}} />

<Story name="Default" let:args>
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
	{#each ICON_SIZES as size}
		<div style="margin: 5px;">
			<Icon {...args} name="star" {size} />{size}
		</div>
	{/each}
</Story>

<Story name="Material Icons" args={{ size: '2x' }} let:args>
	{#each MATERIAL_ICONS as name}
		<div style="display: flex; align-items: center; gap: 0.5rem;">
			<Icon {...args} pack="mdi" {name} />
			{name}
		</div>
	{/each}
</Story>
