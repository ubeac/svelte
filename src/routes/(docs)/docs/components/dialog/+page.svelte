<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import DialogAbsolute from './DialogAbsolute.svelte'
	import DialogCenter from './DialogCenter.svelte'
	import DialogDefault from './DialogDefault.svelte'
	import DialogLarge from './DialogLarge.svelte'
	import DialogNoBackdrop from './DialogNoBackdrop.svelte'
	import DialogPersistent from './DialogPersistent.svelte'
	import DialogScrollable from './DialogScrollable.svelte'
	import DialogSmall from './DialogSmall.svelte'
</script>

<h1>Dialog</h1>

<Doc title="Default">
	<!--  -->
</Doc>
<Preview src="./DialogDefault.svelte">
	<DialogDefault />
</Preview>

<Doc title="absolute">
	<!--  -->
</Doc>
<Preview class="example-absolute" src="./DialogAbsolute.svelte">
	<DialogAbsolute />
</Preview>

<Doc title="Persistent">
	<!--  -->
</Doc>
<Preview src="./DialogPersistent.svelte">
	<DialogPersistent />
</Preview>

<Doc title="Scrollable">
	<!--  -->
</Doc>
<p>You can make dialog's content scrollable using <code>scrollable</code> prop.</p>
<Preview src="./DialogScrollable.svelte">
	<DialogScrollable />
</Preview>

<Doc title="Size">
	<!--  -->
</Doc>
<p>Dialog also supports Small and Large sizes.</p>
<Preview src="./DialogLarge.svelte">
	<DialogLarge />
</Preview>

<Preview src="./DialogSmall.svelte">
	<DialogSmall />
</Preview>

<Doc title="Centered Dialog">
	<!--  -->
</Doc>
<p>set <code>placement</code> property to <code>center </code> to vertically center the Dialog.</p>
<Preview src="./DialogCenter.svelte">
	<DialogCenter />
</Preview>

<Doc title="Without Backdrop">
	<!--  -->
</Doc>
<p>Disables the backgruond dimming effect.</p>
<Preview src="./DialogNoBackdrop.svelte">
	<DialogNoBackdrop />
</Preview>
