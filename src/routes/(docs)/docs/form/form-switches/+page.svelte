<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormSwitchDefault from './FormSwitchDefault.svelte'
	import FormSwitchColumn from './FormSwitchColumn.svelte'
	import FormSwitchDescription from './FormSwitchDescription.svelte'
	import FormSwitchReverse from './FormSwitchReverse.svelte'
	import FormSwitchRequired from './FormSwitchRequired.svelte'
</script>

<h1>FormSwitch</h1>
<p>
	FormSwitch is similar to <a href="/docs/components/switches">Switch</a> with additional Form related features.
</p>

<Doc title="Label">FormSwitch can have a label on top.</Doc>
<Preview vertical src="./FormSwitchDefault.svelte">
	<FormSwitchDefault />
</Preview>

<Doc title="Required">FormSwitch can be required.</Doc>
<Preview vertical src="./FormSwitchRequired.svelte">
	<FormSwitchRequired />
</Preview>

<Doc title="Description">FormSwitch can have descriptions.</Doc>
<Preview vertical src="./FormSwitchDescription.svelte">
	<FormSwitchDescription />
</Preview>

<Doc title="Reverse">
	Put Switch on the opposite side with the <code>reverse</code> boolean property.
</Doc>
<Preview src="./FormSwitchReverse.svelte">
	<FormSwitchReverse />
</Preview>

<Doc title="Layout">You can set Column width of FormSwitch using <code>row</code> and <code>col</code> props.</Doc>
<Preview src="./FormSwitchColumn.svelte">
	<FormSwitchColumn />
</Preview>
