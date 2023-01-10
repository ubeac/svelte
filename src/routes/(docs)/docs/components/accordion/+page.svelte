<script>
	import { Doc, Preview } from '$lib/docs-components'
	import AccordionDefault from './AccordionDefault.svelte'
	import AccordionOpen from './AccordionOpen.svelte'
	import AccordionPersistent from './AccordionPersistent.svelte'
</script>

<h1>Accordions</h1>

<Doc title="Example">Click the accordions below to expand/collapse the accordion content.</Doc>
<Preview src="./AccordionDefault.svelte">
	<AccordionDefault />
</Preview>

<Doc title="Open">Open by default with <code>open</code> attribute.</Doc>
<Preview src="./AccordionOpen.svelte">
	<AccordionOpen />
</Preview>

<Doc title="Persistent">Open ONLY one item at the same time.</Doc>
<Preview src="./AccordionPersistent.svelte">
	<AccordionPersistent />
</Preview>
