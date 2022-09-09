<script>
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
</script>

<Container class="container-example">
	<Row noGutters>
		{#each [1, 2, 3] as col}
			<Col cols={col == 2 ? 6 : undefined}>
				<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
			</Col>
		{/each}
	</Row>
	<Row noGutters>
		{#each [1, 2, 3] as col}
			<Col cols={col == 2 ? 5 : undefined}>
				<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
			</Col>
		{/each}
	</Row>
</Container>
