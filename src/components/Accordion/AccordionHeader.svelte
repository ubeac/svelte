<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { SharedProps } from '../Base/El.type'

	const context = getContext<any>('ACCORDION')
	const acccordions = getContext<any>('ACCORDIONS')

	function onClick() {
		console.log('onClick')
		acccordions.update((item: any) => {
			if ($acccordions.persistent) {
				for (const children of item.children) {
					children.update((x: any) => {
						if (x.id == $context.id) {
							x.open = x.open
						} else {
							x.open = false
						}
						return x
					})
				}
			}
			return item
		})
		context.set({ id: $context.id, open: !$context.open })
	}

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let props: SharedProps = {}
	$: props = {
		...$$restProps,
		forwardEvents,
		tag: 'div',
		cssPrefix: 'accordion-header',
		cssProps: {},
	}

	let buttonProps: SharedProps = {}

	$: buttonProps = {
		...$$restProps,
		forwardEvents,
		tag: 'button',
		cssPrefix: 'accordion-button',
		cssProps: {
			collapsed: !$context.open,
		},
	}
</script>

<El on:click={console.log} {...props} {forwardEvents}>
	<El {...buttonProps} on:click={onClick} {forwardEvents}>
		<slot />
	</El>
</El>
