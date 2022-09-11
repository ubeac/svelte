<script>
	import { Card, CardBody, CardHeader, CardTitle, CardStamp } from '@ubeac/svelte/components/card'
	import { Row, Col } from '@ubeac/svelte/components/grid'
</script>

<Row>
	{#each ['primary', 'secondary', 'warning'] as color}
		<Col class="mb-3">
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
		</Col>
	{/each}
</Row>
