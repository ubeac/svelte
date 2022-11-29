<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '$lib/components'
	import type { AccordionBodyProps, AccordionContext } from '$lib/components'
	import {fly} from 'svelte/transition'

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
	<El transition={fly} transitionProps={{y: -20}} {...$$restProps} {...otherProps}>
		<slot />
	</El>
{/if}
