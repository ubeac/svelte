<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { El } from '$lib/components'
	import type { AccordionsProps } from '$lib/components'

	type $$Props = AccordionsProps

	export let cssPrefix: $$Props['cssPrefix'] = 'accordions'
	export let tag: $$Props['tag'] = 'div'
	/**
	 * Let more than one Accordion be open in same time
	 */
	export let persistent: $$Props['persistent'] = false

	setContext('ACCORDIONS', writable({ persistent, children: [] }))

	$: otherProps = {
		cssPrefix,
		tag,
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
