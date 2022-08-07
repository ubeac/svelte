<script>
	import { AppLoadingBar, Card, CardBody, CardHeader, CardTitle, Grid, GridItem } from '$lib'

	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { COLORS } from '$lib/types'
</script>

<Meta
	title="AppLoadingBar"
	component={AppLoadingBar}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
	}} />

<Template let:args>
	<Card outline>
		<AppLoadingBar show {...args} />
		<CardHeader>
			<CardTitle>Card title</CardTitle>
		</CardHeader>
		<CardBody>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sunt ipsam voluptates laboriosam eum alias soluta
			illum impedit porro hic corporis nobis quod tempore quos in, minima, delectus explicabo cupiditate.
		</CardBody>
	</Card>
</Template>

<Story name="default" />
<Story name="color" let:args>
	<Grid vertical gutterY="sm">
		{#each COLORS as color}
			<GridItem>
				<AppLoadingBar show {...args} {color} />
			</GridItem>
		{/each}
	</Grid>
</Story>
<Story name="fixed" args={{ show: true, fixed: true }} let:args>
	<AppLoadingBar fixed {...args} />
	See Top of the page
</Story>
<Story name="indeterminate" args={{ show: true, indeterminate: true }} />
<Story name="show" args={{ show: true }} />
