<script lang="ts">
	import type { PopupArrowProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = PopupArrowProps

	export let tag: $$Props['tag'] = 'div'
	export let cssPrefix: $$Props['cssPrefix'] = 'popover-arrow'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps} data-popper-arrow />
