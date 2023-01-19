<script lang="ts">
	import { El, type FooterProps } from '$lib/index.js'

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
