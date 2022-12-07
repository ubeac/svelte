<script>
	import { Page, Col, El } from '@ubeac/svelte'
	import CardBlog from '../cards/CardBlog.svelte'
</script>

<Page title="Dashboard">
	<El row>
		{#each [1, 2, 3, 4] as item}
			<Col>
				<CardBlog />
			</Col>
		{/each}
	</El>
</Page>
