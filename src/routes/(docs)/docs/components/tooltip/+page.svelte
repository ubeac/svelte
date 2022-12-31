<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import TooltipDefault from './TooltipDefault.svelte'
	import TooltipHtml from './TooltipHTML.svelte'
	import TooltipPlacement from './TooltipPlacement.svelte'
</script>

<h1>Tooltip</h1>
<p>
	Tooltips are text labels which appear when a user hovers over an interface element. They explain the interface
	elements that may be unclear for users and guide them when they need help. If used properly, tooltips can
	significantly enhance user experience and add value to your website or software.
</p>

<Doc title="Basic usage">
	Default slot is used to display the text label. The text label is displayed when the user hovers over the element with
	the mouse cursor.
</Doc>
<Preview src="./TooltipDefault.svelte">
	<TooltipDefault />
</Preview>

<Doc title="Palcement">
	You can decide where the text label is to be displayed - at the top, bottom or on either side of the element. To
	change the placement of the tooltip, use the <code>placement</code> prop.
</Doc>
<Preview src="./TooltipPlacement.svelte">
	<TooltipPlacement />
</Preview>

<Doc title="HTML">
	You can insert HTML to other components code inside <code>Tooltip</code>'s default slot to highlight particular bits
	of information and make the content more attractive.
</Doc>
<Preview src="./TooltipHTML.svelte">
	<TooltipHtml />
</Preview>
