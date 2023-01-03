<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import BackgroundColor from './BackgroundColor.svelte'
	import BackgroundGradient from './BackgroundGradient.svelte'
	import BackgroundOpacity from './BackgroundOpacity.svelte'
</script>

<h1>Backgrounds</h1>
<p>You can set background color, gradient, and opacity for any component.</p>

<Doc title="Color" />
<Preview src="./BackgroundColor.svelte">
	<div class="custom-class text-light">
		<BackgroundColor />
	</div>
</Preview>

<Doc title="Gradient" />
<Preview src="./BackgroundGradient.svelte">
	<div class="custom-class text-light">
		<BackgroundGradient />
	</div>
</Preview>

<Doc title="Opacity" />
<Preview src="./BackgroundOpacity.svelte">
	<div class="custom-class text-light">
		<BackgroundOpacity />
	</div>
</Preview>

<style>
	.custom-class :global(*) {
		padding: 1rem;
		margin: 1rem;
	}
</style>
