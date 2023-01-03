<script>
	import { Doc, Preview } from '$lib/docs-components'
	import SwitchColor from './SwitchColor.svelte'
	import SwitchDefault from './SwitchDefault.svelte'
	import SwitchDescription from './SwitchDescription.svelte'
	import SwitchDisabled from './SwitchDisabled.svelte'
	import SwitchInline from './SwitchInline.svelte'
	import SwitchReverse from './SwitchReverse.svelte'
</script>

<Doc title="Switch">
	The Switch component provides users the ability to choose between two distinct values. These are very similar to a
	toggle, or on/off switch, though aesthetically different than a Switch.
</Doc>
<Preview src="./SwitchDefault.svelte">
	<SwitchDefault />
</Preview>

<Doc title="Switch Color">Switch components (Switch and FormSwitch) can have color.</Doc>
<Preview src="./SwitchColor.svelte">
	<SwitchColor />
</Preview>

<Doc title="Switch Description">Switch components (Switch and FormSwitch) can have description.</Doc>
<Preview src="./SwitchDescription.svelte">
	<SwitchDescription />
</Preview>

<Doc title="Switch Disabled">
	<!--  -->
</Doc>
<Preview src="./SwitchDisabled.svelte">
	<SwitchDisabled />
</Preview>

<Doc title="Switch Inline">
	<!--  -->
</Doc>
<Preview src="./SwitchInline.svelte">
	<SwitchInline />
</Preview>

<Doc title="Switch Reverse">
	<!--  -->
</Doc>
<Preview src="./SwitchReverse.svelte">
	<SwitchReverse />
</Preview>
