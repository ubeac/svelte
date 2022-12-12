<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import PopoverComponents from './PopoverComponents.svelte'
	import PopoverDefault from './PopoverDefault.svelte'
	import PopoverDirections from './PopoverDirections.svelte'
	import PopoverHover from './PopoverHover.svelte'
</script>

<h1>Popover</h1>
<p>Popovers are used to provide additional information on elements where a simple tooltip is not sufficient.</p>

<Doc title="Default Markup">To create a default popover use:</Doc>

<Preview src="./PopoverDefault.svelte">
	<PopoverDefault />
</Preview>

<Doc title="Directions">Popover supports these directions:</Doc>
<Preview src="./PopoverDirections.svelte">
	<PopoverDirections />
</Preview>

<Doc title="Component inside popover">You can place any components inside popovers:</Doc>

<Preview src="./PopoverComponents.svelte">
	<PopoverComponents />
</Preview>

<Doc title="Popover on hover">
	Popover can be triggered manual, with a click and on focus and on hover. This one reacts on hover.
</Doc>
<Preview src="./PopoverHover.svelte">
	<PopoverHover />
</Preview>
