<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row noGutters>
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as col}
			<Col>
				<Card class="card-example">col</Card>
			</Col>
		{/each}
	</El>
	<El row noGutters>
		<Col cols="8">
			<Card class="card-example">col-8</Card>
		</Col>
		<Col cols="4">
			<Card class="card-example">col-4</Card>
		</Col>
	</El>
	<El row noGutters>
		{#each [1, 2, 3, 4] as col}
			<Col>
				<Card class="card-example">col</Card>
			</Col>
		{/each}
	</El>
</El>
