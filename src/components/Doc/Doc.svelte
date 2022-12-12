<script lang="ts">
	import { El } from '$lib/components'

	import type { DocProps } from './Doc.types'

	type $$Props = DocProps

	export let title: $$Props['title']
	$: href = encodeURIComponent(title)
</script>

<El mt="4" tag="h2" {...$$restProps} {href} id={href}>
	{title}
</El>
<p>
	<slot />
</p>
