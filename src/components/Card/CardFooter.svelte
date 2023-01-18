<script lang="ts">
	import { El } from '$lib/index.js'

	import type { CardFooterProps } from './Card.types'

	type $$Props = CardFooterProps

	export let cssPrefix: $$Props['cssPrefix'] = 'card-footer'
	/**
	 * If you want to set Card footer's color same as card's body, use the transparent property
	 */
	export let transparent: $$Props['transparent'] = undefined

	$: cssProps = { transparent }
</script>

<El {...$$restProps} {cssProps} {cssPrefix}>
	<slot />
</El>
