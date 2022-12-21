<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import IconColors from './IconColors.svelte'
	import IconDefault from './IconDefault.svelte'
	import IconFilled from './IconFilled.svelte'
	import IconSizes from './IconSizes.svelte'
</script>

<h1>Icons</h1>

<Doc title="Icon" />
<Preview src="./IconDefault.svelte">
	<IconDefault />
</Preview>

<Doc title="Icon colors" />
<Preview src="./IconColors.svelte">
	<IconColors />
</Preview>

<Doc title="Filled icons" />
<Preview src="./IconFilled.svelte">
	<IconFilled />
</Preview>

<Doc title="Icon sizes" />
<Preview src="./IconSizes.svelte">
	<IconSizes />
</Preview>
