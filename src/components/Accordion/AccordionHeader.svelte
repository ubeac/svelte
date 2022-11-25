<script lang="ts">
	import { createEventDispatcher, getContext, setContext } from 'svelte'

	import { El } from '$lib/components'
	import type { AccordionHeaderProps } from '$lib/components'

	const dispatch = createEventDispatcher()

	type $$Props = AccordionHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordion-header'
	export let buttonCssPrefix: $$Props['cssPrefix'] = 'accordion-button'
	export let tag: $$Props['tag'] = 'h2'

	$: otherProps = {
		cssPrefix,
		tag,
	}

	const context = getContext('ACCORDION')

	const onClick = () => {
		console.log('dispatching')
		// dispatch('click')
		console.log($context.open)
		// setContext('ACCORDION', !getContext('ACCORDION')?.open)
		// console.log(getContext('ACCORDION'))
	}
</script>

<El {...$$restProps} {...otherProps}>
	<El tag="button" cssPrefix={buttonCssPrefix} on:click={onClick}>
		<slot />
	</El>
</El>
