<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

<El container class="container-example">
	<El row noGutters>
		{#each [1, 2, 3] as col}
			<Col cols={col == 2 ? 6 : undefined}>
				<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
			</Col>
		{/each}
	</El>
	<El row noGutters>
		{#each [1, 2, 3] as col}
			<Col cols={col == 2 ? 5 : undefined}>
				<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
			</Col>
		{/each}
	</El>
</El>
