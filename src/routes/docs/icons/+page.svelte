<script>
	import { Preview } from '@ubeac/svelte'
	import IconColor from './IconColor.svelte'
	import IconDefault from './IconDefault.svelte'
	import IconSize from './IconSize.svelte'
</script>

<h1>Icons</h1>
<p>
	Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.
	See the icons documentation from <a href="https://tabler-icons.io/" target="_blank">tabler-icons</a>.
</p>

<h2>Examples</h2>
<Preview src="./IconDefault.svelte">
	<IconDefault />
</Preview>

<h2>Color</h2>
<p>
	Set the <code>color</code> prop to change your icons color.
</p>
<Preview src="./IconColor.svelte">
	<IconColor />
</Preview>

<h2>Size</h2>
<p>
	Set the <code>size</code> prop to change your icons size.
</p>
<Preview src="./IconSize.svelte">
	<IconSize />
</Preview>
