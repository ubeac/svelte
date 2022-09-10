<script>
	import { Container, Row, Col } from '@ubeac/svelte/components/gird'
	import { Card, CardBody } from '@ubeac/svelte/components/card'
</script>

<Container class="container-example">
	<Row noGutters>
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as col}
			<Col>
				<Card class="card-example">col</Card>
			</Col>
		{/each}
	</Row>
	<Row noGutters>
		<Col cols="8">
			<Card class="card-example">col-8</Card>
		</Col>
		<Col cols="4">
			<Card class="card-example">col-4</Card>
		</Col>
	</Row>
	<Row noGutters>
		{#each [1, 2, 3, 4] as col}
			<Col>
				<Card class="card-example">col</Card>
			</Col>
		{/each}
	</Row>
</Container>
