<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { El, type TabsProps } from '$lib/components'

	type $$Props = TabsProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tabs'
	export let tag: $$Props['tag'] = 'div'
	export let vertical: $$Props['vertical'] = false

	let active: string | undefined = undefined

	const selected = writable(active ?? '')
	let tabs: any[] = []
	let panes: any[] = []

	function register(id: string, active: boolean) {
		if (active || tabs.length === 0) {
			$selected = id
		}
		tabs = [...tabs, id]
	}

	function unregister(id: string) {
		tabs = tabs.filter((tab) => tab !== id)
	}

	function registerPane(id: string) {
		const index = panes.length
		panes = [...panes, id]

		return tabs[index]
	}

	setContext('TABS', { selected, registerPane, register, unregister })
</script>

<El {...$$restProps} cssPrefix="tabs" cssProps={{ vertical }}>
	<slot />
</El>
