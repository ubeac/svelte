<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	{#each ['start', 'center', 'end', 'around', 'between'] as justify}
		<El row class="row-example" noGutters {justify}>
			<Col cols="4">
				<Card class="card-example">1 of 2</Card>
			</Col>
			<Col cols="4">
				<Card class="card-example">2 of 2</Card>
			</Col>
		</El>
	{/each}
</El>
