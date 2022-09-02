<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import {
		Button,
		Card,
		CardBody,
		CardActions,
		CardFooter,
		CardHeader,
		CardStamp,
		CardStatus,
		CardTitle,
		Icon,
	} from '$lib/components'
	import { COLORS } from '$lib/types'
</script>

<Meta
	title="Containers/Card"
	component={Card}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		title: {
			control: {
				type: 'text',
			},
		},
	}} />
<Story name="default" let:args>
	<div class="container-xl">
		<div class="row">
			<div class="col">
				<Card title="Card Title" {...args}>
					<CardStatus color="red" position="top" />
					<CardBody>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</CardBody>
					<CardFooter>This is standard card footer</CardFooter>
				</Card>
			</div>
			<div class="col">
				<Card>
					<CardStatus color="primary" position="start"/>
					<CardBody>
						<CardTitle>Card Title</CardTitle>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</CardBody>
					<CardFooter>This is standard card footer</CardFooter>
				</Card>
			</div>
			<div class="col">
				<Card>
					<CardStatus color="green" position="bottom"/>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
					</CardHeader>
					<CardBody>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</CardBody>
					<CardFooter transparent>This is transparent card footer</CardFooter>
				</Card>
			</div>
		</div>
	</div>
</Story>

<Story name="Header actions" let:args>
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
</Story>

<Story name="Status color" let:args>
	<div class="container-xl">
		<div class="row">
			{#each COLORS as color}
				<div class="col-4 mb-3">
					<Card title="Status color: {color}">
						<CardBody>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</CardBody>
						<CardStatus {color} position="start" />
					</Card>
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Status size" let:args>
	<div class="container-xl">
		<div class="row">
			{#each ['sm', 'md', 'lg'] as size}
				<div class="col">
					<Card title="Status size: {size}">
						<CardBody>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
						</CardBody>
						<CardStatus color="red" position="top" {size} />
					</Card>
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Status position" let:args>
	<div class="container-xl">
		<div class="row">
			{#each ['top', 'bottom', 'start'] as position}
				<div class="col-4">
					<Card title="Status position: {position}">
						<CardBody>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
						</CardBody>
						<CardStatus color="red" {position} />
					</Card>
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Stamp color" let:args>
	<div class="container-xl">
		<div class="row">
			{#each ['primary', 'secondary', 'warning'] as color}
				<div class="col mb-3">
					<Card>
						<CardBody>
							<CardTitle>Stamp color: {color}</CardTitle>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
						</CardBody>
						<CardStamp {color} icon="bell" />
					</Card>
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Stamp size" let:args>
	<div class="container-xl">
		<div class="row">
			{#each ['sm', 'md', 'lg'] as size}
				<div class="col">
					<Card>
						<CardBody>
							<CardTitle>Stamp size: {size}</CardTitle>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
						</CardBody>
						<CardStamp {size} position="top-end" color="yellow" icon="bell" />
					</Card>
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Stamp position" let:args>
	<div class="container-xl">
		<div class="row">
			{#each ['top-start', 'top-end', 'bottom-start', 'bottom-end'] as position}
				<div class="col-6 mb-3">
					<Card>
						<CardBody>
							<CardTitle>Stamp position: {position}</CardTitle>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
						</CardBody>
						<CardStamp {position} color="primary" icon="bell" />
					</Card>
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Footer transparent" let:args>
	<Card title="Transparent footer">
		<CardBody>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
				a type specimen book.
			</p>
		</CardBody>
		<CardFooter transparent><i>This is transparent card footer</i></CardFooter>
	</Card>
</Story>

<Story name="Footer text with actions" let:args>
	<Card title="Footer text with actions">
		<CardBody>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
				a type specimen book.
			</p>
		</CardBody>
		<CardFooter>
			Footer text
			<CardActions>
				<Button color="danger"><Icon name="trash" />Remove</Button>
				<Button color="primary">Continue</Button>
			</CardActions>
		</CardFooter>
	</Card>
</Story>
<!-- 
<Story name="media">
	<Card>
		<CardMedia position="top">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</CardMedia>
		<CardBody>
			<CardTitle>Title</CardTitle>
			<p>Body</p>
		</CardBody>
	</Card>
	<br />
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			<p>Body</p>
		</CardBody>
		<CardMedia position="middle">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</CardMedia>
		<CardBody>
			<p>Body</p>
		</CardBody>
	</Card>
	<br />
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			<p>Body</p>
		</CardBody>
		<CardMedia position="bottom">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</CardMedia>
	</Card>
</Story> -->
