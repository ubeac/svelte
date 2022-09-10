<script>
	import { Page } from '@ubeac/svelte/components/page'
	import { Col, Row } from '@ubeac/svelte/components/gird'
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
