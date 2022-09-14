<script>
	import Preview from '@ubeac/svelte/components/preview/Preview.svelte'
	import SwitchColor from './SwitchColor.svelte'
	import SwitchDefault from './SwitchDefault.svelte'
	import SwitchDescription from './SwitchDescription.svelte'
</script>

<h1>Switch</h1>
<p>
	The Switch component provides users the ability to choose between two distinct values. These are very similar to a
	toggle, or on/off switch, though aesthetically different than a Switch.
</p>

<Preview src="./SwitchDefault.svelte">
	<SwitchDefault />
</Preview>

<h1>Switch Color</h1>
<p>Switch components (Switch and FormSwitch) can have color.</p>

<Preview src="./SwitchColor.svelte">
	<SwitchColor />
</Preview>

<h1>Switch Description</h1>
<p>Switch components (Switch and FormSwitch) can have description.</p>

<Preview src="./SwitchDescription.svelte">
	<SwitchDescription />
</Preview>
