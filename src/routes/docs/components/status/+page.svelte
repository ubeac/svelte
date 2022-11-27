<script>
	import { Preview } from '@ubeac/svelte'
	import StatusDefault from './StatusDefault.svelte'
	import StatusDots from './StatusDots.svelte'
	import StatusDotsAnimated from './StatusDotsAnimated.svelte'
  import StatusIndicators from './StatusIndicators.svelte'
  import StatusLite from './StatusLite.svelte'
	import StatusWithAnimatedDot from './StatusWithAnimatedDot.svelte'
	import StatusWithDot from './StatusWithDot.svelte'
</script>

<h1>Status</h1>
<p>
	Status dots are particularly useful if you want to make an interface element more noticeable regardless of limited
	space.
</p>

<h2>Default</h2>
<Preview src="./StatusDefault.svelte">
	<StatusDefault />
</Preview>

<h2>Status with dot</h2>
<p>Set the <code>style</code> prop to dot to change status mode to circle shape.</p>
<Preview src="./StatusWithDot.svelte">
	<StatusWithDot />
</Preview>
<h3>Animated dots</h3>
<p>Set the <code>animated</code> prop to change status mode to animated.</p>
<Preview src="./StatusWithAnimatedDot.svelte">
	<StatusWithAnimatedDot />
</Preview>

<h3>Lite status</h3>
<p>TODO</p>
<Preview src="./StatusLite.svelte">
	<StatusLite />
</Preview>


<h2>Status dots</h2>
<p>Set the <code>style</code> prop to dot to change status mode to circle shape.</p>
<Preview src="./StatusDots.svelte">
	<StatusDots />
</Preview>

<h3>Animated dots</h3>
<p>Set the <code>animated</code> prop to change status mode to animated.</p>
<Preview src="./StatusDotsAnimated.svelte">
	<StatusDotsAnimated />
</Preview>

<h2>Status Indicators</h2>
<p>Set the <code>style</code> prop to indicator to change status mode.</p>
<Preview src="./StatusIndicators.svelte">
	<StatusIndicators />
</Preview>
