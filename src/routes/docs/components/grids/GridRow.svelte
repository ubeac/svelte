<script>
	import { Col, Card, El } from '@ubeac/svelte'

	let innerWidth = 0
	$: cols = innerWidth > 1200 && innerWidth < 1400 ? [3, 9] : innerWidth < 992 && innerWidth > 576 ? [9, 3] : [6, 6]
</script>

<svelte:window bind:innerWidth />
<El container class="container-example">
	<El row noGutters>
		{#each [1, 2] as col}
			<Col lg={cols[col - 1]} md="6" sm={cols[col - 1]}>
				<Card class="card-example">col-{cols[col - 1]}</Card>
			</Col>
		{/each}
	</El>
	<El row noGutters>
		{#each [1, 2, 3] as col}
			<Col cols="sm">
				<Card class="card-example">col</Card>
			</Col>
		{/each}
	</El>
</El>
