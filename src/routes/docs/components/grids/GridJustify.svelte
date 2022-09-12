<script>
	import { Container, Row, Col, Card } from '@ubeac/svelte'
</script>

<Container class="container-example">
	{#each ['start', 'center', 'end', 'around', 'between'] as justify}
		<Row class="row-example" noGutters {justify}>
			<Col cols="4">
				<Card class="card-example">1 of 2</Card>
			</Col>
			<Col cols="4">
				<Card class="card-example">2 of 2</Card>
			</Col>
		</Row>
	{/each}
</Container>
