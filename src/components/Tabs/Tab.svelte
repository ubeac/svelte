<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'

	import { El } from '../Base'
	import type { TabProps, TabsContext } from './Tabs.types'

	type $$Props = TabProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab'
	export let tag: $$Props['tag'] = 'div'

	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let id: $$Props['id'] = undefined
	export let title: $$Props['title'] = undefined
	export let icon: $$Props['icon'] = undefined
	export let iconEnd: $$Props['iconEnd'] = undefined

	let element: HTMLElement
	let index: number

	const { register, unregister, selected }: TabsContext = getContext('TABS')

	onMount(() => {
		index = register(element.id, { disabled, title, icon, iconEnd })
	})

	onDestroy(() => {
		unregister(element.id)
	})

	$: cssProps = {
		active: $selected === index,
		disabled,
	}
</script>

<El {...$$restProps} bind:element {cssPrefix} {cssProps} {tag}>
	<slot />
</El>
