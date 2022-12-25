<script lang="ts">
	import { Doc, Preview } from '@ubeac/svelte'

	import ColorsNamed from './ColorsNamed.svelte'
	import ColorsSocial from './ColorsSocial.svelte'
	import ColorsTheme from './ColorsTheme.svelte'
</script>

<h1>Colors</h1>

<Doc title="Theme colors" />
<Preview src="./ColorsTheme.svelte">
	<div class="custom-class text-light">
		<ColorsTheme />
	</div>
</Preview>

<Doc title="Named colors" />
<Preview src="./ColorsNamed.svelte">
	<div class="custom-class text-light">
		<ColorsNamed />
	</div>
</Preview>

<Doc title="Social colors" />
<Preview src="./ColorsSocial.svelte">
	<div class="custom-class text-light">
		<ColorsSocial />
	</div>
</Preview>

<style>
	.custom-class :global(*) {
		padding: 1rem;
		margin: 1rem;
	}
</style>
