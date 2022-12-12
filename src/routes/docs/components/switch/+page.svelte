<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import SwitchColor from './SwitchColor.svelte'
	import SwitchDefault from './SwitchDefault.svelte'
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
