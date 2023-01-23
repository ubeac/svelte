<script lang="ts">
	import { getContext } from 'svelte'

	import type { AccordionBodyProps, AccordionContext } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = AccordionBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion-body'
	export let tag: $$Props['tag'] = 'div'

	let ctx = getContext<AccordionContext>('ACCORDION')

	$: otherProps = {
		cssPrefix,
		tag,
	}
</script>

{#if $ctx.open}
	<El {...$$restProps} {...otherProps}>
		<slot />
	</El>
{/if}
