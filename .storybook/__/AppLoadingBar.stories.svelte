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

<Story name="Default" let:args>
	<AppLoadingBar show {...args} />
</Story>

<Story name="Color" let:args>
	{#each COLORS as color}
		<AppLoadingBar {color} show {...args} />
		<br />
	{/each}
</Story>

<Story name="Duration" let:args>
	<AppLoadingBar duration={3000} show {...args} />
</Story>

<Story name="Fixed" args={{ show: true, fixed: true }} let:args>
	<AppLoadingBar fixed {...args} />
	<div style="height: 200vh;">Scroll the page and see top of it</div>
</Story>

<Story name="Indeterminate" let:args>
	<AppLoadingBar indeterminate show {...args} />
</Story>
