<script lang="ts">
	import { getContext, setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { El } from '$lib/components'
	import type { AccordionContext, AccordionProps, AccordionsContext } from '$lib/components'

	import AccordionHeader from './AccordionHeader.svelte'

	type $$Props = AccordionProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion'
	export let open: $$Props['open'] = false
	export let title: $$Props['title'] = undefined

	const ctx: AccordionContext = writable({ open })
	setContext('ACCORDION', ctx)

	const parentCtx = getContext<AccordionsContext>('ACCORDIONS')

	parentCtx.update((item: any) => {
		item.children.push(ctx)
		return item
	})
</script>

<El {...$$restProps} {cssPrefix}>
	{#if title}
		<AccordionHeader>
			{title}
		</AccordionHeader>
	{/if}
	<slot />
</El>
