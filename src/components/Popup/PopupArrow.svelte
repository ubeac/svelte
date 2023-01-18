<script lang="ts">
	import { El, type PopupArrowProps } from '$lib/index.js'

	type $$Props = PopupArrowProps

	export let tag: $$Props['tag'] = 'div'
	export let cssPrefix: $$Props['cssPrefix'] = 'popover-arrow'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps} data-popper-arrow />
