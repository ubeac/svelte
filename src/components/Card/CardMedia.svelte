<script lang="ts">
	import { El } from '$lib/index.js'

	import type { CardMediaProps } from './Card.types'

	type $$Props = CardMediaProps

	export let cssPrefix: $$Props['cssPrefix'] = 'card-media'
	/**
	 * You can change border radius of Media using placement property
	 */
	export let elementPosition: $$Props['elementPosition'] = 'top'

	$: cssProps = { elementPosition }
</script>

<El {...$$restProps} {cssProps} {cssPrefix}>
	<slot />
</El>
