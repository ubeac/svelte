<script>
	import { Doc, Preview } from '$lib/docs-components'
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

<Doc title="Status colors" />
<Preview src="./StatusDefault.svelte">
	<div class="custom-class">
		<StatusDefault />
	</div>
</Preview>

<Doc title="Status with dot">
	Set the <code>style</code> prop to dot to change status mode to circle shape.
</Doc>
<Preview src="./StatusDots.svelte">
	<div class="custom-class">
		<StatusDots />
	</div>
</Preview>

<Doc title="Lite status" />
<Preview src="./StatusLite.svelte">
	<div class="custom-class">
		<StatusLite />
	</div>
</Preview>

<Doc title="Status with animated dots">
	Set the <code>animated</code> prop to change status mode to animated.
</Doc>
<Preview src="./StatusDotsAnimated.svelte">
	<div class="custom-class">
		<StatusDotsAnimated />
	</div>
</Preview>

<Doc title="Lite status with animated dots" />
<Preview src="./StatusLiteAnimated.svelte">
	<div class="custom-class">
		<StatusLiteAnimated />
	</div>
</Preview>

<style>
	.custom-class > :global(.u-status) {
		margin-bottom: 0.5rem;
	}
</style>
