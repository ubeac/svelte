<script>
	import { Page } from '@ubeac/svelte/components/page'
	import { Button } from '@ubeac/svelte/components/button'
</script>

<Page>
	<svelte:fragment slot="headerTitle">Edit Product</svelte:fragment>
	<svelte:fragment slot="headerActions">
		<Button color="primary">update</Button>
		<Button color="danger">close</Button>
	</svelte:fragment>
</Page>
