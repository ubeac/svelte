<script>
	import { Preview } from '@ubeac/svelte'
	import AccordionDefault from './AccordionDefault.svelte'
	import AccordionOpen from './AccordionOpen.svelte'
	import AccordionPersistent from './AccordionPersistent.svelte'
</script>

<h2>Example</h2>
<p>Click the accordions below to expand/collapse the accordion content.</p>
<Preview src="./AccordionDefault.svelte">
	<AccordionDefault />
</Preview>

<h2>Open</h2>
<p>open by default with <code>open</code> attribute.</p>
<Preview src="./AccordionOpen.svelte">
	<AccordionOpen />
</Preview>

<h2>Persistent</h2>
<p>open one item at the same time.</p>
<Preview src="./AccordionPersistent.svelte">
	<AccordionPersistent />
</Preview>
