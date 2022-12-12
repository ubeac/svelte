<script lang="ts">
	import { El } from '$lib/components'

	import type { DocProps } from './Doc.types'

	type $$Props = DocProps

	export let title: $$Props['title']
	$: href = encodeURIComponent(title)
</script>

<El mt="4" tag="h2" {...$$restProps} {href} id={href}>
	{title}
	<El ml="2" tag="a" href="#{href}" cssPrefix="doc-anchor">#</El>
</El>
<p>
	<slot />
</p>
