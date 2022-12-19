<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '../Base'
	import type { TabBodyProps, TabsContext } from './Tabs.types'

	type $$Props = TabBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-body'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {tag} {cssPrefix}>
	<slot />
</El>
