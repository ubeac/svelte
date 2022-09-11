<script>
	import { Page, Col, Row } from '@ubeac/svelte'
	import CardBlog from '../cards/CardBlog.svelte'
</script>

<Page title="Dashboard">
	<Row>
		{#each [1, 2, 3, 4] as item}
			<Col>
				<CardBlog />
			</Col>
		{/each}
	</Row>
</Page>
