<script>
	import { Doc, Preview } from '$lib/docs-components'
	import BorderAdditive from './BorderAdditive.svelte'
	import BorderSubtractive from './BorderSubtractive.svelte'
	import BorderColor from './BorderColor.svelte'
	import BorderWidth from './BorderWidth.svelte'
	import BorderRadius from './BorderRadius.svelte'
	import BorderRadiusSize from './BorderRadiusSize.svelte'
</script>

<h1>Borders</h1>

<Doc title="Additive" />
<Preview src="./BorderAdditive.svelte">
	<div class="custom-class">
		<BorderAdditive />
	</div>
</Preview>

<Doc title="Subtractive" />
<Preview src="./BorderSubtractive.svelte">
	<div class="custom-class">
		<BorderSubtractive />
	</div>
</Preview>

<Doc title="Colors">
	To set the border color of an element, use the <code>borderColor</code> property. By default, this sets all border sides
	to the same color. You can also set the border color individually.
</Doc>
<Preview src="./BorderColor.svelte">
	<div class="custom-class">
		<BorderColor />
	</div>
</Preview>

<Doc title="Width">
	To set the border width of an element, use the <code>border</code> property. By default, this sets all border sides to
	the same width. You can also set the border width individually.
</Doc>
<Preview src="./BorderWidth.svelte">
	<div class="custom-class">
		<BorderWidth />
	</div>
</Preview>

<Doc title="Radius">
	To set the border radius of an element, use the <code>borderRadius</code> property. By default, this sets all border sides
	to the same radius. You can also set the border radius individually.
</Doc>
<Preview src="./BorderRadius.svelte">
	<div class="custom-class radius-sample">
		<BorderRadius />
	</div>
</Preview>

<Doc title="Radius Sizes">
	To set the border radius size of an element, use the <code>borderRadiusSize</code> property. By default, this sets all
	border sides to the same radius size.
</Doc>
<Preview src="./BorderRadiusSize.svelte">
	<div class="custom-class">
		<BorderRadiusSize />
	</div>
</Preview>

<style>
	.custom-class {
		align-items: center;
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 0.5rem;
		min-width: 100%;
	}
	.custom-class > :global(.u-el) {
		justify-content: center;
		align-items: center;
		text-align: center;
		display: inline-flex;
		width: 5rem;
		height: 5rem;
		margin: 0.25rem;
		background-color: #f8f9fa;
	}
	.radius-sample > :global(.u-el:last-child) {
		width: 7rem !important;
	}
</style>
