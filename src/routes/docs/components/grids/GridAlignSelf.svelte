<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row class="row-example" noGutters>
		{#each ['start', 'center', 'end'] as align}
			<Col alignSelf={align}>
				<Card class="card-example">One of three columns</Card>
			</Col>
		{/each}
	</El>
</El>
