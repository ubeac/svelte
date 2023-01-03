<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import IconColors from './IconColors.svelte'
	import IconDefault from './IconDefault.svelte'
	import IconFilled from './IconFilled.svelte'
	import IconSizes from './IconSizes.svelte'
	import IconAnimation from './IconAnimation.svelte'
</script>

<h1>Icons</h1>
<p>
	Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.
	See the icons documentation from <a href="https://tabler-icons.io/" target="_blank">tabler-icons</a>.
</p>

<Doc title="Name">
	To use an icon, set the <code>name</code> prop to the icon name.
</Doc>
<Preview src="./IconDefault.svelte">
	<IconDefault />
</Preview>

<Doc title="Color">
	Set the <code>color</code> prop to change your icons color.
</Doc>
<Preview src="./IconColors.svelte">
	<IconColors />
</Preview>

<Doc title="Filled">
	To use a filled icon, set the <code>filled</code> prop to <code>true</code>.
</Doc>
<Preview src="./IconFilled.svelte">
	<IconFilled />
</Preview>

<Doc title="Size">
	To use a different icon size, set the <code>size</code> prop to <code>sm</code>, <code>md</code> or <code>lg</code>,
	<code>xl</code>,
	<code>1x</code>,
	<code>2x</code>,
	<code>3x</code>,
	<code>4x</code>,
	<code>5x</code>,
	<code>6x</code>,
	<code>7x</code>,
	<code>8x</code>,
	<code>9x</code>.
</Doc>
<Preview src="./IconSizes.svelte">
	<IconSizes />
</Preview>

<Doc title="Animate">TODO</Doc>
<Preview src="./IconAnimation.svelte">
	<IconAnimation />
</Preview>
