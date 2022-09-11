<script>
	import { Card, CardBody, CardHeader, CardTitle, CardStatus } from '@ubeac/svelte'
	import { Row, Col } from '@ubeac/svelte'
</script>

<Row>
	<Col>
		<Card>
			<CardStatus color="danger" position="top" />
			<CardBody>
				<CardTitle>Card with top status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
					neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</Col>
	<Col>
		<Card>
			<CardStatus color="green" position="start" />

			<CardBody>
				<CardTitle>Card with side status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
					neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</Col>
	<Col>
		<Card>
			<CardStatus color="pink" position="bottom" />

			<CardBody>
				<CardTitle>Card with bottom status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
					neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</Col>
</Row>
