<script lang="ts">
	import { get_current_component, getAllContexts, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const context = getContext<any>('ACCORDION')
	const acccordions = getContext<any>('ACCORDIONS')
	const forwardEvents = forwardEventsBuilder(get_current_component())
	function onClick() {
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
	$: classes = classname('accordion-header', undefined, $$props.class)
	$: buttonClass = classname('accordion-button', {
		collapsed: !$context.open,
	})
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<button on:click={onClick} use:forwardEvents {...$$restProps} class={buttonClass}>
		<slot />
	</button>
</div>
