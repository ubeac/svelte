<script lang="ts">
	import type { AccordionTitleProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = AccordionTitleProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion-title'
	export let tag: $$Props['tag'] = 'div'

	$: otherProps = {
		cssPrefix,
		tag,
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
