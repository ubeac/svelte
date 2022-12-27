<script>
	import { Preview } from '@ubeac/svelte'
	import BackgroundColor from './BackgroundColor.svelte'
	import BackgroundGradient from './BackgroundGradient.svelte'
	import BackgroundOpacity from './BackgroundOpacity.svelte'
	import BorderAdditive from './BorderAdditive.svelte'
	import BorderSubtractive from './BorderSubtractive.svelte'
	import BorderColor from './BorderColor.svelte'
	import BorderWidth from './BorderWidth.svelte'
	import BorderRadius from './BorderRadius.svelte'
	import BorderRadiusSize from './BorderRadiusSize.svelte'
</script>

<h1>Backgrounds</h1>
<h2>Background color</h2>
<p>Background color</p>

<Preview src="./BackgroundColor.svelte">
	<div class="example">
		<BackgroundColor />
	</div>
</Preview>

<h2>Background gradient</h2>
<p>Background gradient</p>
<Preview src="./BackgroundGradient.svelte">
	<div class="example">
		<BackgroundGradient />
	</div>
</Preview>

<h2>Background opacity</h2>
<p>Background opacity</p>
<Preview src="./BackgroundOpacity.svelte">
	<div class="example">
		<BackgroundOpacity />
	</div>
</Preview>

<h1>Borders</h1>
<h2>Border Additive</h2>
<p>Border Additive</p>
<Preview src="./BorderAdditive.svelte">
	<div class="example">
		<BorderAdditive />
	</div>
</Preview>

<h2>Border Subtractive</h2>
<p>Border Subtractive</p>
<Preview src="./BorderSubtractive.svelte">
	<div class="example">
		<BorderSubtractive />
	</div>
</Preview>

<h2>Border Colors</h2>
<p>Border Colors</p>
<Preview src="./BorderColor.svelte">
	<div class="example">
		<BorderColor />
	</div>
</Preview>

<h2>Border Width</h2>
<p>Border Width</p>
<Preview src="./BorderWidth.svelte">
	<div class="example">
		<BorderWidth />
	</div>
</Preview>

<h2>Border Radius</h2>
<p>Border Radius</p>
<Preview src="./BorderRadius.svelte">
	<div class="example-radius">
		<BorderRadius />
	</div>
</Preview>

<h2>Border Radius Sizes</h2>
<p>Border Radius Sizes</p>
<Preview src="./BorderRadiusSize.svelte">
	<div class="example-radius">
		<BorderRadiusSize />
	</div>
</Preview>

<style lang="scss" global>
	.example {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 0.5rem;
		min-width: 100%;
	}
	.example > .u-el {
		padding: 1rem;
		margin-right: 0;
		margin-left: 0;
		// max-width: 20%;
		text-align: center;
		// min-width: 20%;
		width: 5rem;
		height: 5rem;
	}

	.example-radius {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 0.5rem;
		min-width: 100%;
	}

	.example-radius > .u-el {
		text-align: center;
		position: relative;
		top: -50%;
		min-width: 75px !important;
		min-height: 75px !important;
		color: white;
		background-color: rgb(134, 142, 150);
	}
	.example-radius > .u-el-border-radius-pill {
		min-width: 150px !important;
	}
</style>
