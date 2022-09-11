<script>
	import { Container, Row, Col } from '@ubeac/svelte/components/grid'
	import { Card, CardBody } from '@ubeac/svelte/components/card'
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
