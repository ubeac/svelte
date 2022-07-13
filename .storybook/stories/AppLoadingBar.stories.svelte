<script>
	import { AppLoadingBar, Button, Card, CardActions, CardBody, CardHeader, CardTitle } from '$lib'

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
	<AppLoadingBar {...args} />
	<br />
	{#each COLORS as color}
		<AppLoadingBar {...args} {color} />
	{/each}
</Story>
<Story name="fixed" args={{ fixed: true }} />
<Story name="indeterminate" args={{ indeterminate: true }} />
<Story name="show" args={{ show: true }} />
