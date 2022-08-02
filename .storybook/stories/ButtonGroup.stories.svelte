<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button, ButtonGroup, Grid, GridItem, BUTTON_SIZES } from '$lib/components'
</script>

<Meta
	title="ButtonGroup"
	component={ButtonGroup}
	argTypes={{
		size: {
			control: 'radio',
			options: BUTTON_SIZES,
		},
	}} />

<Story name="default" let:args>
	<ButtonGroup {...args}>
		<Button>Button</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</ButtonGroup>
</Story>

<Story name="vertical" let:args>
	<ButtonGroup vertical {...args}>
		<Button>Button</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</ButtonGroup>
</Story>
<Story name="Sizes" let:args>
	<Grid gutter="sm" vertical alignItems="center">
		{#each BUTTON_SIZES as size}
			<GridItem>
				<ButtonGroup {size} {...args}>
					<Button>Button</Button>
					<Button>Button</Button>
					<Button>Button</Button>
				</ButtonGroup>
			</GridItem>
		{/each}
	</Grid>
</Story>

<Story name="vertical + Sizes" let:args>
	<Grid gutter="sm" justifyContent="center">
		{#each BUTTON_SIZES as size}
			<GridItem>
				<ButtonGroup vertical {size} {...args}>
					<Button>Button</Button>
					<Button>Button</Button>
					<Button>Button</Button>
				</ButtonGroup>
			</GridItem>
		{/each}
	</Grid>
</Story>
