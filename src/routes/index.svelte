<script lang="ts">
	import { Card } from '@app/components'
</script>

<div style="max-width: 480px; margin: auto;">
	<Card>content</Card>

	<br />

	<Card>
		<Card.Body>Body</Card.Body>
	</Card>

	<br />

	<Card tile>
		<Card.Body>Body</Card.Body>
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
		<Card.Body>body</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Body>body</Card.Body>
		<Card.Footer>footer</Card.Footer>
	</Card>

	<br />

	<Card>
		<Card.Header>header</Card.Header>
		<Card.Body>body</Card.Body>
		<Card.Footer>footer</Card.Footer>
	</Card>

	<br />

	<Card>
		<Card.Body>
			<Card.Title>title</Card.Title>
			<p>body</p>
		</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Header>
			<Card.Title>title</Card.Title>
		</Card.Header>
		<Card.Body>body</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Media placement="top">
			<img src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
		<Card.Body>
			<Card.Title>title</Card.Title>
			<p>body</p>
		</Card.Body>
	</Card>

	<br />

	<Card>
		<Card.Body>
			<Card.Title>title</Card.Title>
			<p>body</p>
		</Card.Body>
		<Card.Media placement="bottom">
			<img src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
	</Card>

	<br />

	<Card>
		<Card.Body>
			<Card.Title>title</Card.Title>
			<p>body</p>
		</Card.Body>
		<Card.Media placement="middle">
			<img src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
		</Card.Media>
		<Card.Body>
			<p>body</p>
		</Card.Body>
	</Card>

	<br />
</div>

<style lang="scss" global>
	@import '../scss';
</style>
