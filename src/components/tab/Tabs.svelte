<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { classname } from '$lib/utils'

	import type { TabShapes, TabType } from './tab.types'

	/**
	 * Index of active Tab pane
	 */
	export let activeIndex: number = 0

	/**
	 * list of Tab panes
	 */
	export let tabs: Array<TabType> = []

	/**
	 * Shape of Tab Headers
	 */
	export let shape: TabShapes = 'default'

	/**
	 * Render Tabs Header vertically
	 */
	export let vertical: boolean = false

	function register(id: string, { name, icon, disabled }: { name: string; icon: string; disabled: boolean }) {
		let newTab = {
			id,
			name,
			icon,
			disabled,
			active: tabs.length === activeIndex,
		}
		tabs = [...tabs, newTab]
		return newTab
	}

	function unregister(id: string) {
		tabs = tabs.filter((item) => item.id !== id)
	}

	const active = writable<string>()

	setContext('TABS', {
		register,
		unregister,
		active,
	})

	$: $active = tabs[activeIndex]?.id ?? ''

	$: classes = classname('tabs', { shape, vertical }, $$props.class, true)
</script>

<div class={classes}>
	<slot {tabs} />
</div>
