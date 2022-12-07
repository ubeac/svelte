<script>
	import { Preview } from '@ubeac/svelte'
	import PopoverDefault from './PopoverDefault.svelte'
	import PopoverDirections from './PopoverDirections.svelte'
	import PopoverHover from './PopoverHover.svelte'
</script>

<h1>Popover</h1>
<p>Popovers are used to provide additional information on elements where a simple tooltip is not sufficient.</p>

<h2>Default Markup</h2>
<p>To create a default popover use:</p>

<Preview src="./PopoverDefault.svelte">
	<PopoverDefault />
</Preview>

<h2>Directions</h2>
<p>Popover supports these directions:</p>
<Preview src="./PopoverDirections.svelte">
	<PopoverDirections />
</Preview>

<h2>Popover on hover</h2>
<p>Popover can be triggered manual, with a click and on focus and on hover. This one reacts on hover.</p>
<Preview src="./PopoverHover.svelte">
	<PopoverHover />
</Preview>
