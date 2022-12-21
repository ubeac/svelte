<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row class="row-example" noGutters>
		<Col>
			<Card class="card-example">First, but unordered</Card>
		</Col>
		<Col order="5">
			<Card class="card-example">Second, but last</Card>
		</Col>
		<Col order="1">
			<Card class="card-example">Third, but first</Card>
		</Col>
	</El>
</El>
<El container class="container-example">
	<El row class="row-example" noGutters>
		<Col order="last">
			<Card class="card-example">First, but last</Card>
		</Col>
		<Col>
			<Card class="card-example">Second, but unordered</Card>
		</Col>
		<Col order="first">
			<Card class="card-example">Third, but first</Card>
		</Col>
	</El>
</El>
