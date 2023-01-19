<script lang="ts">
	import { El, type PopoverBodyProps } from '$lib'

	type $$Props = PopoverBodyProps

	/**
	 * Set Css Prefix for the PopoverHeader
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'popover-header'

	/**
	 * Set tag for the PopoverHeader
	 */
	export let tag: $$Props['tag'] = 'h3'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps}>
	<slot />
</El>
