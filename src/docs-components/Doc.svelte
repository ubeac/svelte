<script lang="ts">
	import type { DocProps } from './Doc.types'

	type $$Props = DocProps

	export let title: $$Props['title']
	$: href = encodeURIComponent(title)
</script>

<div class="mt-3 mb-2">
	<a href="#{href}">#</a>
	<h2 class="d-inline" {href} id={href}>{title}</h2>
</div>

<p>
	<slot />
</p>
