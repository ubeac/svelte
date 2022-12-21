<script lang="ts">
	import { type AccordionTitleProps, El } from '$lib/components'

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
