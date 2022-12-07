<script>
	import { Preview } from '@ubeac/svelte'
	import StatusDefault from './StatusDefault.svelte'
	import StatusDots from './StatusDots.svelte'
	import StatusDotsAnimated from './StatusDotsAnimated.svelte'
	import StatusLite from './StatusLite.svelte'
	import StatusLiteAnimated from './StatusLiteAnimated.svelte'
</script>

<h1>Status</h1>
<p>
	Status dots are particularly useful if you want to make an interface element more noticeable regardless of limited
	space.
</p>

<h2>Status colors</h2>
<Preview src="./StatusDefault.svelte">
	<StatusDefault />
</Preview>

<h2>Status with dot</h2>
<p>Set the <code>style</code> prop to dot to change status mode to circle shape.</p>
<Preview src="./StatusDots.svelte">
	<StatusDots />
</Preview>

<h2>Lite status</h2>
<Preview src="./StatusLite.svelte">
	<StatusLite />
</Preview>

<h2>Status with animated dots</h2>
<p>Set the <code>animated</code> prop to change status mode to animated.</p>
<Preview src="./StatusDotsAnimated.svelte">
	<StatusDotsAnimated />
</Preview>

<h2>Lite status with animated dots</h2>
<Preview src="./StatusLiteAnimated.svelte">
	<StatusLiteAnimated />
</Preview>
