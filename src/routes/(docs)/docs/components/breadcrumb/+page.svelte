<script>
	import { Doc, Preview } from '$lib/docs-components'
	import BreadcrumbDefault from './BreadcrumbDefault.svelte'
	import BreadcrumbHeader from './BreadcrumbHeader.svelte'
	import BreadcrumbSeperator from './BreadcrumbSeperator.svelte'
</script>

<h1>Breadcrumb</h1>
<p>
	Breadcrumbs are used to show the current website or app location and reduce the number of actions users have to take.
	Thanks to breadcrumbs, they can easily navigate within the website hierarchy and better understand its structure.
</p>

<Doc title="Default">
	<!--  -->
</Doc>
<Preview src="./BreadcrumbDefault.svelte">
	<BreadcrumbDefault />
</Preview>

<Doc title="Breadcrumb variations">
	If you wish to use different separators, set the <code>separator</code> prop. Depending on the aesthetics of your design,
	you can choose dots, bullets or arrows.
</Doc>
<Preview vertical src="./BreadcrumbSeperator.svelte">
	<BreadcrumbSeperator />
</Preview>

<Doc title="Breadcrumb in Header">If you wish to use breadcrumbs in headers, place them above the headers.</Doc>
<Preview vertical src="./BreadcrumbHeader.svelte">
	<BreadcrumbHeader />
</Preview>
