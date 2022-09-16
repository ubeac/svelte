<script>
	import { Preview } from '@ubeac/svelte'
	import BreadcrumbDefault from './BreadcrumbDefault.svelte'
	import BreadcrumbSeperator from './BreadcrumbSeperator.svelte'
</script>

<h1>Breadcrumb</h1>
<p>
	Breadcrumbs are used to show the current website or app location and reduce the number of actions users have to take.
	Thanks to breadcrumbs, they can easily navigate within the website hierarchy and better understand its structure.
</p>

<h2>Default</h2>
<Preview src="./BreadcrumbDefault.svelte">
	<BreadcrumbDefault />
</Preview>

<h2>Breadcrumb variations</h2>
<p>
	If you wish to use different separators, set the <code>separator</code> prop. Depending on the aesthetics of your design,
	you can choose dots, bullets or arrows.
</p>
<Preview vertical src="./BreadcrumbDots.svelte">
	<div class="example-breadcrumbs">
		<BreadcrumbSeperator />
	</div>
</Preview>

<style lang="scss">
	.example-breadcrumbs {
		width: 100%;
	}
</style>
