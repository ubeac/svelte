<script>
	import { Doc, Preview } from '$lib/docs-components'
	import RadioColors from './RadioColors.svelte'
	import RadioLabels from './RadioLabels.svelte'
	import RadioDisabled from './RadioDisabled.svelte'
	import RadioInline from './RadioInline.svelte'
	import RadioReverse from './RadioReverse.svelte'
	import RadioExample from './RadioExample.svelte'
	import RadioDescription from './RadioDescription.svelte'
</script>

<h1>Radio</h1>
<p>Use more advanced Radio control to display the range of available options.</p>

<Doc title="Label">
	<code>label</code> string property is used to set the radio's label. Also, label <code>slot</code> provides for
	complexcontents. If you don't set neither <code>label</code> property nor <code>label</code> slot, the radio will be rendered
	without label.
</Doc>
<Preview src="./RadioLabels.svelte">
	<RadioLabels />
</Preview>

<Doc title="Colors">
	You can change color of Radio component using <code>color</code> property. It set background color for checked radio components.
</Doc>
<Preview src="./RadioColors.svelte">
	<RadioColors />
</Preview>

<Doc title="Description">
	You can set Description for Radio component using <code>Description</code> property.
</Doc>
<Preview src="./RadioDescription.svelte">
	<RadioDescription />
</Preview>

<Doc title="Disabled">
	<code>disabled</code> property prevent users to check the radio. But, clicking in a group, will uncheck the disabled radio.
</Doc>
<Preview src="./RadioDisabled.svelte">
	<RadioDisabled />
</Preview>

<Doc title="Inline">
	Group radios on the same horizontal row by setting <code>inline</code> boolean property.
</Doc>
<Preview src="./RadioInline.svelte">
	<RadioInline />
</Preview>

<Doc title="Reverse">
	Put radios on the opposite side with the <code>reverse</code> boolean property.
</Doc>
<Preview src="./RadioReverse.svelte">
	<RadioReverse />
</Preview>

<Doc title="Example">Here is a complex example for payment card selection.</Doc>
<Preview src="./RadioExample.svelte">
	<RadioExample />
</Preview>
