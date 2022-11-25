<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '$lib/components'
	import type { AccordionBodyProps } from '$lib/components'

	type $$Props = AccordionBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion-body'
	export let tag: $$Props['tag'] = 'div'

	$: otherProps = {
		cssPrefix,
		tag,
	}

	$: open = true //= getContext('ACCORDION')?.open
</script>

{#if open}
	<El {...$$restProps} {...otherProps}>
		<slot />
	</El>
{/if}
