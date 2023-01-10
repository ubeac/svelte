<script lang="ts">
	import { El, type TabContentProps } from '$lib/components'

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
