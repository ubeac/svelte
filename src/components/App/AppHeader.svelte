<script lang="ts">
	import { El } from '$lib/index.js'

	import type { AppHeaderProps } from './App.types'

	type $$Props = AppHeaderProps
	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: $$Props['tag'] = 'header'

	/**
	 * Set Css Prefix for the App Footer
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'app-header'

	/**
	 * Set application header's default theme
	 */
	export let theme: $$Props['theme'] = undefined

	$: cssProps = { theme }
	$: otherProps = { cssPrefix, tag }
</script>

<El {...$$restProps} {cssProps} {...otherProps}><slot /></El>
