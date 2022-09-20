<script>
	import { Preview } from '@ubeac/svelte'
	import StatusDefault from './StatusDefault.svelte'
	import StatusDots from './StatusDots.svelte'
	import StatusDotsAnimated from './StatusDotsAnimated.svelte'
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
<p>Set the <code>dot</code> prop to change status mode to circle shape.</p>
<Preview src="./StatusWithDot.svelte">
	<StatusWithDot />
</Preview>
<h3>Animated dots</h3>
<p>Set the <code>animated</code> prop to change status mode to animated. ( only use for <u>dot</u> status )</p>
<Preview src="./StatusWithAnimatedDot.svelte">
	<StatusWithAnimatedDot />
</Preview>

<h2>Status dots</h2>
<p>Set the <code>dot</code> prop to change status mode to circle shape.</p>
<Preview src="./StatusDots.svelte">
	<StatusDots />
</Preview>

<h3>Animated dots</h3>
<p>Set the <code>animated</code> prop to change status mode to animated. ( only use for <u>dot</u> status )</p>
<Preview src="./StatusDotsAnimated.svelte">
	<StatusDotsAnimated />
</Preview>
