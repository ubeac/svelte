<script lang="ts">
	import { getContext } from 'svelte'
	import { onMount } from 'svelte'

	import { El, type TabPaneProps } from '$lib/components'

	type $$Props = TabPaneProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-pane'
	export let tag: $$Props['tag'] = 'div'

	let id: string | undefined = undefined
	let tabItemId: string | undefined = undefined

	const { selected, registerPane } = getContext<any>('TABS')

	onMount(() => {
		tabItemId = registerPane(id)
	})

	$: cssProps = {
		active: $selected === tabItemId,
	}

	$: console.log($selected, tabItemId, cssProps)

	$: props = {
		cssPrefix,
		tag,
		role: 'tabpanel',
	}
</script>

<El bind:id {...$$restProps} {...props} {cssProps}>
	<slot />
</El>
