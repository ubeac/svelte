<script>
	import { Preview } from '@ubeac/svelte'
	import IconColors from './IconColors.svelte'
	import IconDefault from './IconDefault.svelte'
	import IconFilled from './IconFilled.svelte'
	import IconSizes from './IconSizes.svelte'
</script>

<h1>Icons</h1>

<h2>Icon</h2>
<Preview src="./IconDefault.svelte">
	<IconDefault />
</Preview>

<h2>Icon colors</h2>
<Preview src="./IconColors.svelte">
	<IconColors />
</Preview>

<h2>Filled icons</h2>
<Preview src="./IconFilled.svelte">
	<IconFilled />
</Preview>

<h2>Icon sizes</h2>
<Preview src="./IconSizes.svelte">
	<IconSizes />
</Preview>
