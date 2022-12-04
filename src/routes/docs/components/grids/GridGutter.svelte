<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row class="row-example" noGutters>
		<Col cols="12" sm="6" md="8">
			<Card class="card-example">.col-12 .col-sm-6 .col-md-8</Card>
		</Col>
		<Col cols="6" md="4">
			<Card class="card-example">.col-6 .col-md-4</Card>
		</Col>
	</El>
</El>
