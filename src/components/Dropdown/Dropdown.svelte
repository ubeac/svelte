<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { type DropdownProps, El } from '$lib/components'

	type $$Props = DropdownProps

	/**
	 * Set Css Prefix for the Dropdown button
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown'

	export let show: $$Props['show'] = false
	export let margin: $$Props['margin'] = 0

	setContext('DROPDOWN', writable({ show, margin }))

	let otherProps: any = {}
	$: {
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
