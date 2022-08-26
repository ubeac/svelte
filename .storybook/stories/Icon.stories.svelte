<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Icon, ICON_SIZES } from '$lib/components'
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
		name: {
			control: {
				type: 'text',
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

<Story name="Colors" let:args>
	<div class="example-icons">
		{#each COLORS as color}
			<Icon {color} name="user" {...args} />
		{/each}
	</div>
</Story>
<Story name="Sizes" let:args>
	<div class="example-icons">
		{#each ICON_SIZES as size}
			<div style="margin: 5px;">
				<Icon {...args} name="star" {size} />{size}
			</div>
		{/each}
	</div>
</Story>

<Story name="Filled" let:args>
	<div class="example-icons">
		{#each ['heart', 'star', 'circle', 'square'] as name}
			<Icon {...args} {name} color="primary" filled />
		{/each}
	</div>
</Story>

<Story name="Material Icons" args={{ size: '2x' }} let:args>
	<div class="example-icons">
		{#each ['bell', 'brightness', 'volume', 'account-plus', 'camera-plus', 'data-matrix-remove'] as name}
			<div style="display: flex; align-items: center; gap: 0.5rem;">
				<Icon {...args} color="red" pack="mdi" {name} />
				{name}
			</div>
		{/each}
	</div>
</Story>
