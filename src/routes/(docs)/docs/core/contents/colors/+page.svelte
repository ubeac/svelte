<script lang="ts">
	import { Doc, Preview } from '$lib/docs-components'

	import ColorsNamed from './ColorsNamed.svelte'
	import ColorsSocial from './ColorsSocial.svelte'
	import ColorsTheme from './ColorsTheme.svelte'
</script>

<h1>Colors</h1>
<p>
	Colors are used to add meaning to a user interface, help distinguish content, and establish hierarchy. They can also
	be used to create visual excitement and draw attention to parts of your layout.
</p>

<Doc title="Theme colors">
	Theme colors are used throughout the component library to provide a consistent design that can be adapted to your
	brand. Theme color has these variant names:
	<code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>,
	<code>info</code>, <code>light</code>, <code>dark</code>.
</Doc>
<Preview src="./ColorsTheme.svelte">
	<div class="custom-class text-light">
		<ColorsTheme />
	</div>
</Preview>

<Doc title="Named colors">
	Choose one of the available colors from the basic color palette and make your design attractive for users. You can use
	the colors to customize the design of components, indicate different states or suggest actions you want users to take.
	Available named colors are:
	<code>blue</code>, <code>azure</code>, <code>indigo</code>, <code>purple</code>, <code>pink</code>, <code>red</code>,
	<code>orange</code>, <code>yellow</code>, <code>lime</code>, <code>green</code>, <code>teal</code>, <code>cyan</code>.
</Doc>
<Preview src="./ColorsNamed.svelte">
	<div class="custom-class text-light">
		<ColorsNamed />
	</div>
</Preview>

<Doc title="Social colors">
	Choose one of the available colors from the social color palette. Available social colors are:
	<code>facebook</code>, <code>twitter</code>, <code>google</code>, <code>youtube</code>, <code>vimeo</code>,
	<code>linkedin</code>, <code>dribbble</code>, <code>github</code>, <code>instagram</code>, <code>pinterest</code>,
	<code>vk</code>, <code>rss</code>, <code>flickr</code>, <code>bitbucket</code>, and
	<code>tabler</code>.
</Doc>
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
