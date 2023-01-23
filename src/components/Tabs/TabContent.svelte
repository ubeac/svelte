<script lang="ts">
	import type { TabContentProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = TabContentProps

	//#region Props

	/**
	 * The prefix of the component CSS class
	 * @default tab-content
	 * @type string
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tab-content'

	//#endregion
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
