<script>
	import { Container, Row, Col, Card, CardBody } from '@ubeac/svelte'
</script>

<Container class="container-example">
	<Row class="row-example" noGutters>
		{#each ['start', 'center', 'end'] as align}
			<Col alignSelf={align}>
				<Card class="card-example">One of three columns</Card>
			</Col>
		{/each}
	</Row>
</Container>
