<script lang="ts">
	import { getContext } from 'svelte'

	import { type AccordionBodyProps, type AccordionContext, El } from '$lib/components/index.js'

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
