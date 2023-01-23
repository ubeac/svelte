<script lang="ts">
	import El from '../El/El.svelte'
	import type { CardHeaderProps } from './Card.types'

	type $$Props = CardHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'card-header'

	/**
	 * You can use light property to set the card header style
	 */
	export let light: $$Props['light'] = undefined

	let cssProps: any = {}
	$: cssProps = { light }
</script>

<El {...$$restProps} {cssProps} {cssPrefix}>
	<slot />
</El>
