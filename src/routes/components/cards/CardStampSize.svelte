<script>
	import { Card, CardBody, CardHeader, CardTitle, CardStamp } from '@ubeac/svelte/components/card'
	import { Row, Col } from '@ubeac/svelte/components/gird'
</script>

<Row>
	{#each ['sm', 'md', 'lg'] as size}
		<Col class="mb-3">
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
		</Col>
	{/each}
</Row>
