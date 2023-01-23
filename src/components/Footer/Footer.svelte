<script lang="ts">
	import type { FooterProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = FooterProps

	export let tag: $$Props['tag'] = 'footer'
	export let cssPrefix: $$Props['cssPrefix'] = 'footer'

	$: cssProps = {}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
