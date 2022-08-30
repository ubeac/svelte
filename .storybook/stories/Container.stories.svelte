<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Container, Row } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
	import { COLORS } from '$lib/types'
</script>

<Meta
	title="Container"
	component={Container}
	argTypes={{
		fluid: {
			control: {
				type: 'boolean',
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
		<Row>
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
		<Card>
			<CardBody>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt libero nesciunt. Sed dignissimos
					laboriosam eaque non aliquid ipsam architecto facilis, delectus molestias. Laborum tempore aliquid, in quas
					amet reprehenderit.
				</p>
			</CardBody>
		</Card>
	</Container>
</Story>

<Story name="fluid" let:args>
	<Container fluid>
		<Card>
			<CardBody>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt libero nesciunt. Sed dignissimos
					laboriosam eaque non aliquid ipsam architecto facilis, delectus molestias. Laborum tempore aliquid, in quas
					amet reprehenderit.
				</p>
			</CardBody>
		</Card>
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
