<script>
	import { Card, CardBody, CardMedia, CardTitle, CardActions, CardFooter } from '@ubeac/svelte/components/card'
	import { Row, Col } from '@ubeac/svelte/components/gird'
</script>

<Row>
	<Col class="mb-3">
		<Card class="example-column example-column-1">
			<CardMedia position="top">
				<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
			</CardMedia>
			<CardBody>
				<CardTitle>Title</CardTitle>
				<p>Body</p>
			</CardBody>
		</Card>
	</Col>
	<Col class="mb-3">
		<Card class="example-column example-column-1">
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
	</Col>
	<Col class="mb-3">
		<Card class="example-column example-column-1">
			<CardBody>
				<CardTitle>Title</CardTitle>
				<p>Body</p>
			</CardBody>
			<CardMedia position="bottom">
				<img alt="" src="https://preview.tabler.io/static/photos/9f36332564ca271d.jpg" />
			</CardMedia>
		</Card>
	</Col>
</Row>
