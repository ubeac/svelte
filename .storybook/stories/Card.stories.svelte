<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import {
		Button,
		ButtonGroup,
		Card,
		CardBody,
		CardActions,
		CardFooter,
		CardHeader,
		CardMedia,
		CardStamp,
		CardStatus,
		CardSubtitle,
		CardTitle,
		Icon,
	} from '$lib/components'
</script>

<Meta title="Card" component={Card} argTypes={{}} />

<Template let:args>
	<Card {...args}>
		<CardBody>Body</CardBody>
	</Card>
</Template>

<Story name="default" />
<Story name="empty">
	<Card>Empty Content</Card>
</Story>
<Story name="body">
	<Card>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="flat">
	<Card>
		<CardBody>With Elevation</CardBody>
	</Card>
	<br />
	<Card elevation={0}>
		<CardBody>Without Elevation</CardBody>
	</Card>
</Story>
<Story name="tile">
	<Card tile>
		<CardBody>With Tile</CardBody>
	</Card>
	<br />
	<Card>
		<CardBody>Without Tile</CardBody>
	</Card>
</Story>
<Story name="header">
	<Card>
		<CardHeader>Header</CardHeader>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="footer">
	<Card>
		<CardBody>Body</CardBody>
		<CardFooter>Footer</CardFooter>
	</Card>
</Story>
<Story name="header & footer">
	<Card>
		<CardHeader>Header</CardHeader>
		<CardBody>Body</CardBody>
		<CardFooter>Footer</CardFooter>
	</Card>
</Story>
<Story name="title">
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			<p>Body</p>
		</CardBody>
	</Card>
	<br />
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="media">
	<Card>
		<CardMedia placement="top">
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
		<CardMedia placement="middle">
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
		<CardMedia placement="bottom">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</CardMedia>
	</Card>
</Story>
<Story name="actions">
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
			<CardActions>
				<Button color="primary">Test</Button>
			</CardActions>
		</CardHeader>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="actions icon">
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
			<CardActions>
				<Button><Icon name="user" /></Button>
				<Button><Icon name="refresh" /></Button>
			</CardActions>
		</CardHeader>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="actions group">
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
			<CardActions>
				<ButtonGroup>
					<Button><Icon name="user" /></Button>
					<Button><Icon name="refresh" /></Button>
				</ButtonGroup>
			</CardActions>
		</CardHeader>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="subtitle">
	<Card>
		<CardHeader>
			<div>
				<CardTitle>Title</CardTitle>
				<CardSubtitle>Subtitle</CardSubtitle>
			</div>
			<CardActions>
				<Button color="primary">Test</Button>
			</CardActions>
		</CardHeader>
		<CardBody>Body</CardBody>
	</Card>
</Story>
<Story name="footer transparent">
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>Body</CardBody>
		<CardFooter transparent>This is transparent card footer</CardFooter>
	</Card>
</Story>
<Story name="status">
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			Body
		</CardBody>
		<CardStatus color="red" placement="top" />
	</Card>
	<br />
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			Body
		</CardBody>
		<CardStatus color="green" placement="start" />
	</Card>
	<br />
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			Body
		</CardBody>
		<CardStatus color="blue" placement="bottom" />
	</Card>
</Story>
<Story name="stamp">
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			<br />
			Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
		</CardBody>
		<CardStamp size="sm" placement="top-end" color="yellow">
			<Icon name="bell" />
		</CardStamp>
	</Card>
	<br />
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			<br />
			Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
		</CardBody>
		<CardStamp size="md" placement="top-end" color="yellow">
			<Icon name="bell" />
		</CardStamp>
	</Card>
	<br />
	<Card>
		<CardBody>
			<CardTitle>Title</CardTitle>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			<br />
			Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
		</CardBody>
		<CardStamp size="lg" placement="top-end" color="yellow">
			<Icon name="bell" />
		</CardStamp>
	</Card>
</Story>
<Story name="footer actions">
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>Body</CardBody>
		<CardFooter>
			<CardActions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</CardActions>
		</CardFooter>
	</Card>
</Story>
<Story name="footer text with actions">
	<Card>
		<CardHeader>
			<CardTitle>Title</CardTitle>
			<CardActions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</CardActions>
		</CardHeader>
		<CardBody>Body</CardBody>
		<CardFooter>
			Footer text
			<CardActions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</CardActions>
		</CardFooter>
	</Card>
</Story>
