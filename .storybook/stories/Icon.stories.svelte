<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@app/types'
	import { Icon } from '@app/components'

	const SIZES = [
		'auto',
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		'1x',
		'2x',
		'3x',
		'4x',
		'5x',
		'6x',
		'7x',
		'8x',
		'9x',
	]
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
<Story name="size" let:args>
	{#each SIZES as size}
		<Icon {...args} name="menu" {size} />
	{/each}
</Story>
