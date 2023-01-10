<script>
	import { Doc, Preview } from '$lib/docs-components'
	import TabsDefault from './TabsDefault.svelte'
	import TabsGrow from './TabsGrow.svelte'
	import TabsVertical from './TabsVertical.svelte'
	import TabsIcons from './TabsIcons.svelte'
	import TabsEnd from './TabsEnd.svelte'
	import TabsOnlyIcons from './TabsOnlyIcons.svelte'
</script>

<h1>Tabs</h1>
<p>
	Tabs are used to split content between multiple sections. They are useful when you have too much content to fit on a
	single page.
</p>

<Doc title="Basic usage">
	To use tabs, you need to wrap the <code>&lt;Tabs&gt;</code> component around the <code>&lt;TabList&gt;</code> and
	<code>&lt;TabContent&gt;</code> components.
</Doc>
<Preview src="./TabsDefault.svelte">
	<TabsDefault />
</Preview>

<Doc title="Grow">
	To make the tabs grow to fill all the available space, you can use the <code>grow</code> prop.
</Doc>
<Preview src="./TabsGrow.svelte">
	<TabsGrow />
</Preview>

<Doc title="Vertical">
	To make the tabs vertical, you can use the <code>vertical</code> prop.
</Doc>
<Preview src="./TabsVertical.svelte">
	<TabsVertical />
</Preview>

<Doc title="Icons">
	To add icons to the tabs, you can use the <code>&lt;Icon&gt;</code> component inside the <code>&lt;TabItem&gt;</code>
	component.
</Doc>
<Preview src="./TabsIcons.svelte">
	<TabsIcons />
</Preview>

<Doc title="Only icons" />
<Preview src="./TabsOnlyIcons.svelte">
	<TabsOnlyIcons />
</Preview>

<Doc title="Tab at the end" />
<Preview src="./TabsEnd.svelte">
	<TabsEnd />
</Preview>
