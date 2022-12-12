<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row class="row-example" noGutters>
		<Col>
			<Card class="card-example">1 of 2</Card>
		</Col>
		<Col>
			<Card class="card-example">2 of 2</Card>
		</Col>
	</El>
	<El row class="row-example" noGutters>
		<Col>
			<Card class="card-example">1 of 3</Card>
		</Col>
		<Col>
			<Card class="card-example">2 of 3</Card>
		</Col>
		<Col>
			<Card class="card-example">3 of 3</Card>
		</Col>
	</El>
</El>
