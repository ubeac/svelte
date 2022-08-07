<script lang="ts">
	import { setContext } from 'svelte'

	import { classname } from '$lib/utils'

	/**
	 * Index of active Tab pane
	 */
	export let activeIndex = 0

	/**
	 * list of Tab panes
	 */
	export let tabs = []

	/**
	 * Shape of Tab Headers
	 */
	export let shape: 'default' | 'pills' = 'defualt'

	/**
	 * Render Tabs Header vertically
	 */
	export let vertical: boolean = false

	function register(id: string, name: string, icon: string, disabled: boolean) {
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

	setContext('TABS', {
		register,
		unregister,
	})

	$: classes = classname('tabs', { shape, vertical }, $$props.class, true)
</script>

<div class={classes}>
	<slot {tabs} />
</div>
