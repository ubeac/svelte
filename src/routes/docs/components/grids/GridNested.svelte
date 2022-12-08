<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row noGutters>
		<Col cols="9">
			<Card class="card-example">Level 1: .col-sm-9</Card>
			<El row noGutters>
				<Col cols="8">
					<Card style="background-color: lightgrey;" class="card-example">Level 2: .col-8</Card>
				</Col>
				<Col cols="4">
					<Card style="background-color: lightgrey;" class="card-example">Level 2: .col-4</Card>
				</Col>
			</El>
		</Col>
	</El>
</El>
