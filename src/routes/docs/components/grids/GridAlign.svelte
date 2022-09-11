<script>
	import { Container, Row, Col, Card, CardBody } from '@ubeac/svelte'
</script>

{#each ['start', 'center', 'end'] as align}
	<Container class="container-example">
		<Row class="row-example" {align}>
			{#each [1, 2, 3] as item}
				<Col>
					<Card class="card-example">One of three columns</Card>
				</Col>
			{/each}
		</Row>
	</Container>
{/each}
