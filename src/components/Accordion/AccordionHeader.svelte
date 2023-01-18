<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte'

	import { type AccordionContext, type AccordionHeaderProps, type AccordionsContext, El } from '$lib/index.js'

	const dispatch = createEventDispatcher()

	type $$Props = AccordionHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion-header'
	export let buttonCssPrefix: $$Props['cssPrefix'] = 'accordion-button'
	export let tag: $$Props['tag'] = 'h2'

	const parentCtx = getContext<AccordionsContext>('ACCORDIONS')
	const ctx = getContext<AccordionContext>('ACCORDION')

	$: otherProps = {
		cssPrefix,
		tag,
	}

	$: cssProps = {
		collapsed: !$ctx.open,
	}

	const onClick = () => {
		dispatch('click')
		if ($parentCtx.persistent) {
			$parentCtx.children.forEach((childCtx) => {
				childCtx.set({ open: false })
			})
		}
		$ctx.open = !$ctx.open
	}
</script>

<El {...$$restProps} {...otherProps}>
	<El tag="button" cssPrefix={buttonCssPrefix} on:click={onClick} {cssProps}>
		<slot />
	</El>
</El>
