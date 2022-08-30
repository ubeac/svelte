<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Container, Row } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
	import { COLORS } from '$lib/types'
	import { GRID_ALIGN_CONTENT, GRID_ALIGN_ITEMS } from '$lib/components/gird/grid.types'
</script>

<Meta
	title="Row"
	component={Row}
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
			<Card style="max-width: 200px;height:100px">
				<CardBody>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
				</CardBody>
			</Card>
			<Card style="max-width: 200px;height:200px">
				<CardBody>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</CardBody>
			</Card>
		</Row>
	</Container>
</Story>
<!-- <Story name="Header actions" let:args>
	<div class="container-xl">
		<div class="row">
			<div class="col">
				<Card>
					<CardHeader>
						<CardTitle>Button in header</CardTitle><CardActions>
							<Button color="warning">Upload</Button>
						</CardActions>
					</CardHeader>
					<CardBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</CardBody>
					<CardFooter>This is standard card footer</CardFooter>
				</Card>
			</div>
			<div class="col">
				<Card>
					<CardHeader>
						<CardTitle>Icon button in header</CardTitle><CardActions>
							<Button color="primary">
								<Icon name="upload" />
							</Button>
						</CardActions>
					</CardHeader>
					<CardBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</CardBody>
					<CardFooter>This is standard card footer</CardFooter>
				</Card>
			</div>
			<div class="col">
				<Card>
					<CardHeader>
						<CardTitle>Icon buttons</CardTitle>
						<CardActions>
							<Button><Icon name="user" /></Button>
							<Button><Icon name="refresh" /></Button>
						</CardActions>
					</CardHeader>
					<CardBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</CardBody>
					<CardFooter>This is standard card footer</CardFooter>
				</Card>
			</div>
		</div>
	</div>
</Story> -->
