<script>
	import { Card, CardBody, CardHeader, CardTitle, CardMedia } from '@ubeac/svelte/components/card'
	import { Row, Col } from '@ubeac/svelte/components/grid'
	import { Avatar } from '@ubeac/svelte/components/avatar'
	import { Icon } from '@ubeac/svelte/components/icon'
</script>

<div class="example-column example-column-1">
	<Card>
		<img src="https://preview.tabler.io/static/photos/36e273986ed577b8.jpg" alt="" />
		<CardBody>
			<CardTitle>How do you know she is a witch?</CardTitle>
			<p>Are you suggesting that coconuts migrate? No, no, no! Yes, yes. A bit. But she's got a wart. You ...</p>
			<Row align="center" justify="start">
				<Col cols="2">
					<Avatar>
						<img src="https://preview.tabler.io/static/avatars/000f.jpg" alt="" />
					</Avatar>
				</Col>
				<Col>
					<div class="text-body">Maryjo Lebarree</div>
					<span class="text-muted">3 days ago</span>
				</Col>
				<Col cols="1">
					<Icon name="heart" />
				</Col>
			</Row>
		</CardBody>
	</Card>
</div>
