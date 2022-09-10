<script>
	import { Preview } from '@ubeac/svelte/components/preview'
	import PageHeaderSimple from './PageHeaderSimple.svelte'
	import PageHeaderAction from './PageHeaderAction.svelte'
</script>

<h2>Simple header</h2>
<Preview vertical src="./PageHeaderSimple.svelte">
	<PageHeaderSimple />
</Preview>
<h2>Header with action</h2>
<Preview vertical src="./PageHeaderAction.svelte">
	<PageHeaderAction />
</Preview>

<style>
	h2 {
		margin-top: 3rem;
	}
</style>
