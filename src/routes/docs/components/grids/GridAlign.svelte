<script>
	import { Col, Card, El } from '@ubeac/svelte'
</script>

{#each ['start', 'center', 'end'] as align}
	<El container class="container-example">
		<El row class="row-example" {align}>
			{#each [1, 2, 3] as item}
				<Col>
					<Card class="card-example">One of three columns</Card>
				</Col>
			{/each}
		</El>
	</El>
{/each}
