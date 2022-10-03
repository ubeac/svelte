<script>
	import { Preview } from '@ubeac/svelte'
	import DialogAbsolute from './DialogAbsolute.svelte'
	import DialogCenter from './DialogCenter.svelte'

	import DialogDefault from './DialogDefault.svelte'
	import DialogLarge from './DialogLarge.svelte'
	import DialogPersistent from './DialogPersistent.svelte'
	import DialogScrollable from './DialogScrollable.svelte'
	import DialogSmall from './DialogSmall.svelte'
</script>

<h1>Dialog</h1>

<h2>Default</h2>
<Preview src="./DialogDefault.svelte">
	<DialogDefault />
</Preview>

<h2>absolute</h2>
<Preview class="example-absolute" src="./DialogAbsolute.svelte">
	<DialogAbsolute />
</Preview>

<h2>persistent</h2>
<Preview src="./DialogPersistent.svelte">
	<DialogPersistent />
</Preview>

<h2>Scrollable</h2>
<p>You can make dialog's content scrollable using <code>scrollable</code> prop.</p>
<Preview src="./DialogScrollable.svelte">
	<DialogScrollable />
</Preview>

<h2>Size</h2>
<p>Dialog also supports Small and Large sizes.</p>
<Preview src="./DialogLarge.svelte">
	<DialogLarge />
</Preview>

<Preview src="./DialogSmall.svelte">
	<DialogSmall />
</Preview>

<h2>Centered Dialog</h2>
<p>set <code>placement</code> property to <code>center </code> to vertically center the Dialog.</p>
<Preview src="./DialogCenter.svelte">
	<DialogCenter />
</Preview>
<h2>Without Backdrop</h2>
<p>Disables the backgruond dimming effect.</p>
<Preview src="./DialogPersistent.svelte">
	<DialogPersistent />
</Preview>

<style global>
	.example-absolute .u-preview-body {
		position: relative;
		height: 400px;
	}
</style>
