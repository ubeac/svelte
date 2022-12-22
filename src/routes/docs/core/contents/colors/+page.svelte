<script lang="ts">
	import { Doc, Preview } from '@ubeac/svelte'

	import ColorsBrand from './ColorsBrand.svelte'
	import ColorsNamed from './ColorsNamed.svelte'
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

<Doc title="Brancd colors" />
<Preview src="./ColorsBrand.svelte">
	<div class="custom-class text-light">
		<ColorsBrand />
	</div>
</Preview>

<style>
	.custom-class :global(*) {
		padding: 1rem;
		margin: 1rem;
	}
</style>
