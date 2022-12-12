<script>
	import { Doc, Preview } from '@ubeac/svelte'
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

<Doc title="Status colors">
	<!--  -->
</Doc>
<Preview src="./StatusDefault.svelte">
	<StatusDefault />
</Preview>

<Doc title="Status with dot">
	Set the <code>style</code> prop to dot to change status mode to circle shape.
</Doc>
<Preview src="./StatusDots.svelte">
	<StatusDots />
</Preview>

<Doc title="Lite status">
	<!--  -->
</Doc>
<Preview src="./StatusLite.svelte">
	<StatusLite />
</Preview>

<Doc title="Status with animated dots">
	Set the <code>animated</code> prop to change status mode to animated.
</Doc>
<Preview src="./StatusDotsAnimated.svelte">
	<StatusDotsAnimated />
</Preview>

<Doc title="Lite status with animated dots">
	<!--  -->
</Doc>
<Preview src="./StatusLiteAnimated.svelte">
	<StatusLiteAnimated />
</Preview>
