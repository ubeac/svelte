<script lang="ts">
	import { setContext } from 'svelte'

	import { El } from '$lib/components'
	import type { AccordionHeaderProps } from '$lib/components'

	type $$Props = AccordionHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordions'
	export let tag: $$Props['tag'] = 'div'

	$: otherProps = {
		cssPrefix,
		tag,
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
