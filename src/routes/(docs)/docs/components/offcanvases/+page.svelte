<script>
	import { Doc, Preview } from '$lib/docs-components'
	import OffcanvasDefault from './OffcanvasDefault.svelte'
	import OffcanvasPlacements from './OffcanvasPlacements.svelte'
	import OffcanvasBackdrop from './OffcanvasBackdrop.svelte'
	import OffcanvasAutoClose from './OffcanvasAutoClose.svelte'
	import OffcanvasNoScroll from './OffcanvasNoScroll.svelte'
</script>

<h1>Offcanvas</h1>
<p>Build hidden sidebars into your project for navigation, shopping carts, and more using Offcanvas.</p>

<Doc title="Show">
	You can control the visibility of the Offcanvas by using the <code>show</code> property.
</Doc>
<Preview src="./OffcanvasDefault.svelte">
	<div class="custom-class"><OffcanvasDefault /></div>
</Preview>

<Doc title="Placements">
	<code>placement</code> property can be <code>top</code>, <code>right</code>, <code>bottom</code> or <code>left</code>.
</Doc>
<Preview src="./OffcanvasPlacements.svelte">
	<div class="custom-class"><OffcanvasPlacements /></div>
</Preview>

<Doc title="Backdrop">
	<code>backdrop</code> property will activate a backdrop behind Offcanvas.
</Doc>
<Preview src="./OffcanvasBackdrop.svelte">
	<div class="custom-class"><OffcanvasBackdrop /></div>
</Preview>

<Doc title="AutoClose">
	<code>autoClose</code> property enables Offcanvas automatically being closed by pressing <i>Escape</i> key or cliking
	outside of the Offcanvas component. User can close the Offcanvas by clicking on the backdrop if <code>backdrop</code>
	property is set to <code>true</code> or by pressing <i>Escape</i> key. User can also close the Offcanvas by clicking on
	the close button .
</Doc>
<Preview src="./OffcanvasAutoClose.svelte">
	<div class="custom-class"><OffcanvasAutoClose /></div>
</Preview>

<Doc title="NoScroll">
	<code>noScroll</code> property will disable scrolling on the body when Offcanvas is open.
</Doc>
<Preview src="./OffcanvasNoScroll.svelte">
	<div class="custom-class"><OffcanvasNoScroll /></div>
</Preview>

<style>
	.custom-class > :global(.u-button) {
		margin: 0.25rem 0;
	}
</style>
