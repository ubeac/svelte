<script>
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
</script>

<Container class="container-example">
	<Row noGutters>
		{#each [1, 2] as col}
			<Col :lg="cols[n - 1]" :md="6" :sm="cols[n - 1]">
				<Card class="card-example">col-6</Card>
			</Col>
		{/each}
	</Row>
	<Row noGutters>
		{#each [1, 2, 3] as col}
			<Col cols="sm">
				<Card class="card-example">col</Card>
			</Col>
		{/each}
	</Row>
</Container>
