<script lang="ts">
	import { setContext } from 'svelte'

	import { El } from '$lib/components'
	import type { AccordionProps } from '$lib/components'

	type $$Props = AccordionProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion'
	export let open: $$Props['open'] = undefined
	export let tag: $$Props['tag'] = 'div'

	$: otherProps = {
		cssPrefix,
		tag,
	}

	setContext('ACCORDION', { open })
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
