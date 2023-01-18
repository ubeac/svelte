<script lang="ts">
	import { El, type PopoverBodyProps } from '$lib/components/index.js'

	type $$Props = PopoverBodyProps

	/**
	 * Set Css Prefix for the PopoverBody
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'popover-body'

	/**
	 * Set tag for the PopoverBody
	 */
	export let tag: $$Props['tag'] = 'div'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps}>
	<slot />
</El>
