<script>
	import { Button, Preview, Tooltip } from '@ubeac/svelte/components'
	import TooltipDefault from './TooltipDefault.svelte'
  import TooltipHtml from './TooltipHTML.svelte'
</script>

<h1>Tooltip</h1>
<p>
	Tooltips are text labels which appear when a user hovers over an interface element. They explain the interface
	elements that may be unclear for users and guide them when they need help. If used properly, tooltips can
	significantly enhance user experience and add value to your website or software.
</p>

<h2>Default Markup</h2>
<p>
	Use the default markup to create tooltips that will help users understand particular elements of your interface. You
	can decide where the text label is to be displayed - at the top, bottom or on either side of the element.
</p>

<Preview src="./TooltipDefault.svelte">
	<TooltipDefault />
</Preview>


<h2>Tooltip with HTML</h2>
<p>you can write HTML code inside Tooltip to highlight particular bits of information and make the content more attractive.</p>

<Preview src="./TooltipHTML.svelte">
	<TooltipHtml />
</Preview>
