<script>
	import { Preview } from '@ubeac/svelte'
	import OffcanvasDefault from './OffcanvasDefault.svelte'
	import OffcanvasPlacements from './OffcanvasPlacements.svelte'
	import OffcanvasBackdrop from './OffcanvasBackdrop.svelte'
	import OffcanvasKeyboard from './OffcanvasKeyboard.svelte'
</script>

<h1>Offcanvas</h1>
<p>Build hidden sidebars into your project for navigation, shopping carts, and more using Offcanvas.</p>

<h2>Default Markup</h2>
<p />

<Preview src="./OffcanvasDefault.svelte">
	<OffcanvasDefault />
</Preview>

<h2>Placements</h2>
<p>Offcanvas supports different directions to be placed:</p>
<Preview src="./OffcanvasPlacements.svelte">
	<OffcanvasPlacements />
</Preview>

<h2>Backdrop</h2>
<p>This property will activate a backdrop behind Offcanvas</p>
<Preview src="./OffcanvasBackdrop.svelte">
	<OffcanvasBackdrop />
</Preview>

<h2>Keyboard</h2>
<p>This property will activate a backdrop behind Offcanvas</p>
<Preview src="./OffcanvasKeyboard.svelte">
	<OffcanvasKeyboard />
</Preview>
