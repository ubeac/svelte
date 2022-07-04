<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button, Card, Icon } from '$lib/components'
</script>

<Meta title="Card" component={Card} argTypes={{}} />

<Template let:args>
	<Card {...args}>
		<Card.Body>Body</Card.Body>
	</Card>
</Template>

<Story name="default" />
<Story name="empty">
	<Card>Empty Content</Card>
</Story>
<Story name="body">
	<Card>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="flat">
	<Card>
		<Card.Body>With Elevation</Card.Body>
	</Card>
	<br />
	<Card elevation={0}>
		<Card.Body>Without Elevation</Card.Body>
	</Card>
</Story>
<Story name="tile">
	<Card tile>
		<Card.Body>With Tile</Card.Body>
	</Card>
	<br />
	<Card>
		<Card.Body>Without Tile</Card.Body>
	</Card>
</Story>
<Story name="header">
	<Card>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="footer">
	<Card>
		<Card.Body>Body</Card.Body>
		<Card.Footer>Footer</Card.Footer>
	</Card>
</Story>
<Story name="header & footer">
	<Card>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>Footer</Card.Footer>
	</Card>
</Story>
<Story name="title">
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			<p>Body</p>
		</Card.Body>
	</Card>
	<br />
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="media">
	<Card>
		<Card.Media placement="top">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			<p>Body</p>
		</Card.Body>
	</Card>
	<br />
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			<p>Body</p>
		</Card.Body>
		<Card.Media placement="middle">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
		<Card.Body>
			<p>Body</p>
		</Card.Body>
	</Card>
	<br />
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			<p>Body</p>
		</Card.Body>
		<Card.Media placement="bottom">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
	</Card>
</Story>
<Story name="actions">
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
			<Card.Actions>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="actions icon">
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
			<Card.Actions>
				<Button><Icon name="user" /></Button>
				<Button><Icon name="refresh" /></Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="actions group">
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
			<Card.Actions>
				<Button.Group>
					<Button><Icon name="user" /></Button>
					<Button><Icon name="refresh" /></Button>
				</Button.Group>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="subtitle">
	<Card>
		<Card.Header>
			<div>
				<Card.Title>Title</Card.Title>
				<Card.Subtitle>Subtitle</Card.Subtitle>
			</div>
			<Card.Actions>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>
</Story>
<Story name="footer transparent">
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
		</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer transparent>This is transparent card footer</Card.Footer>
	</Card>
</Story>
<Story name="status">
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Body
		</Card.Body>
		<Card.Status color="red" placement="top" />
	</Card>
	<br />
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Body
		</Card.Body>
		<Card.Status color="green" placement="start" />
	</Card>
	<br />
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Body
		</Card.Body>
		<Card.Status color="blue" placement="bottom" />
	</Card>
</Story>
<Story name="stamp">
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			<br />
			Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
		</Card.Body>
		<Card.Stamp size="sm" placement="end" color="yellow">
			<Icon name="bell" />
		</Card.Stamp>
	</Card>
	<br />
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			<br />
			Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
		</Card.Body>
		<Card.Stamp size="md" placement="end" color="yellow">
			<Icon name="bell" />
		</Card.Stamp>
	</Card>
	<br />
	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			<br />
			Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
		</Card.Body>
		<Card.Stamp size="lg" placement="end" color="yellow">
			<Icon name="bell" />
		</Card.Stamp>
	</Card>
</Story>
<Story name="footer actions">
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
		</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>
			<Card.Actions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Footer>
	</Card>
</Story>
<Story name="footer text with actions">
	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
			<Card.Actions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>
			Footer text
			<Card.Actions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Footer>
	</Card>
</Story>
