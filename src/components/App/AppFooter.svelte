<script lang="ts">
	import { Footer } from '$lib/index.js'

	import type { AppFooterProps } from './App.types'

	type $$Props = AppFooterProps

	/**
	 * Set Css Prefix for the App Footer
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'app-footer'

	/**
	 * Set application header's default theme
	 */
	export let theme: $$Props['theme'] = undefined

	$: cssProps = { theme }
	$: otherProps = { cssPrefix }
</script>

<Footer {...$$restProps} {cssProps} {...otherProps}><slot /></Footer>
