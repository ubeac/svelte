<script lang="ts">
	import type { DocProps } from './Doc.types'

	type $$Props = DocProps

	export let title: $$Props['title']

	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<div class="mt-3 mb-2">
	<a href="#{href}">#</a>
	<h2 class="d-inline" data-href={encodeURIComponent(href)} id={href}>{title}</h2>
</div>

<p>
	<slot />
</p>
