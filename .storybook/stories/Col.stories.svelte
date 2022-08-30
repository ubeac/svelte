<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
	import { GRID_ALIGN_CONTENT, GRID_ALIGN_ITEMS } from '$lib/components/gird/grid.types'
</script>

<Meta
	title="Col"
	component={Col}
	argTypes={{
		align: {
			control: {
				type: 'select',
				options: GRID_ALIGN_ITEMS,
			},
		},
		alignContent: {
			control: {
				type: 'select',
				options: GRID_ALIGN_CONTENT,
			},
		},
		tag: {
			control: {
				type: 'text',
			},
		},
	}} />
<Story name="default" let:args>
	<Container>
		<Row align="center">
			<Card>
				<CardBody>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt libero nesciunt. Sed dignissimos
						laboriosam eaque non aliquid ipsam architecto facilis, delectus molestias. Laborum tempore aliquid, in quas
						amet reprehenderit.
					</p>
				</CardBody>
			</Card>
		</Row>
	</Container>
</Story>

<Story name="tag" let:args>
	<Container tag="section">
		<Row tag="section" align="center">
			<Card>
				<CardBody>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt libero nesciunt. Sed dignissimos
						laboriosam eaque non aliquid ipsam architecto facilis, delectus molestias. Laborum tempore aliquid, in quas
						amet reprehenderit.
					</p>
				</CardBody>
			</Card>
		</Row>
	</Container>
</Story>

<Story name="fluid" let:args>
	<Container fluid>
		<Row
			tag="section"
			align="center"
			alignContent="center"
			alignMd="center"
			justify="center"
			justifyLg="between"
			noGutters
			dense>
			<Col cols="4" lg="12">
				<Card style="max-width: 200px;height:100px">
					<CardBody>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
					</CardBody>
				</Card>
			</Col>
			<Col cols="8">
				<Card style="max-width: 200px;height:200px">
					<CardBody>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</Story>
