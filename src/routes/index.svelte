<script lang="ts">
	import { Button, Card, Icon } from '@app/components'
</script>

<div style="max-width: 480px; margin: auto;">
	<br />

	<Card>content</Card>

	<br />

	<Card outline>
		<Card.Body>Outline</Card.Body>
	</Card>

	<br />

	<Card elevation={0}>
		<Card.Body>No Elevation</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Body>Body</Card.Body>
	</Card>

	<br />

	<Card tile>
		<Card.Body>Tile</Card.Body>
	</Card>

	<br />

	<Card padding="sm">
		<Card.Body>sm</Card.Body>
	</Card>

	<br />

	<Card padding="md">
		<Card.Body>md</Card.Body>
	</Card>

	<br />

	<Card padding="lg">
		<Card.Body>lg</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Header>header</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Body>Body</Card.Body>
		<Card.Footer>footer</Card.Footer>
	</Card>

	<br />

	<Card>
		<Card.Header>header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>footer</Card.Footer>
	</Card>

	<br />

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

	<br />

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
		<Card.Media placement="bottom">
			<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
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
		<Card.Header>
			<Card.Title>Title</Card.Title>
			<Card.Actions>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>

	<br />

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

	<br />

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

	<br />

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

	<br />

	<Card>
		<Card.Header>
			<div>
				<Card.Title>Title</Card.Title>
				<Card.Subtitle>Subtitle</Card.Subtitle>
			</div>
			<Card.Actions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
			<Card.Actions>
				<Button>Test</Button>
				<Button color="primary">Test</Button>
			</Card.Actions>
		</Card.Header>
		<Card.Body>Body</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
		</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer transparent>This is transparent card footer</Card.Footer>
	</Card>

	<br />

	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Body
		</Card.Body>
		<Card.Status />
	</Card>

	<br />

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
		<Card.Status color="blue" placement="start" size="md" />
	</Card>

	<br />

	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Body
		</Card.Body>
		<Card.Status color="green" placement="bottom" size="lg" />
	</Card>

	<br />

	<Card>
		<Card.Body>
			<Card.Title>Title</Card.Title>
			Body
		</Card.Body>
		<Card.Status color="yellow" placement="end" />
	</Card>

	<br />

	<Card>
		<Card.Header>
			<Card.Title>Title</Card.Title>
		</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>
			<Button color="primary">Test</Button>
		</Card.Footer>
	</Card>

	<br />
</div>

<style lang="scss" global>
	@import '../scss';
</style>
