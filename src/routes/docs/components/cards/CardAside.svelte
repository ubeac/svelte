<script>
	import { Card, CardBody, CardHeader, CardTitle, CardMedia } from '@ubeac/svelte'
	import { Row, Col } from '@ubeac/svelte'
	import { Avatar } from '@ubeac/svelte/components/avatar'
	import { Icon } from '@ubeac/svelte/components/icon'
</script>

<div>
	<Card class="example-column example-column-2">
		<Row class="row-deck">
			<Col cols="3">
				<img src="https://preview.tabler.io/static/photos/36e273986ed577b8.jpg" alt="" />
			</Col>
			<Col>
				<CardBody>
					<CardTitle>Shut up!</CardTitle>
					<p>Burn her! How do you know she is a witch? You don't frighten us, English pig-dogs! Go and boil yo...</p>
					<Row class="mt-4" align="center" justify="start">
						<Col cols="1">
							<Avatar>
								<img src="https://preview.tabler.io/static/avatars/000f.jpg" alt="" />
							</Avatar>
						</Col>
						<Col>
							<div class="text-body">Egan Poetz</div>
							<span class="text-muted">3 days ago</span>
						</Col>
						<Col cols="1">
							<Icon name="heart" />
						</Col>
					</Row>
				</CardBody>
			</Col>
		</Row>
	</Card>
</div>
