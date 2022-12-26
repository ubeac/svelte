<script lang="ts">
	import { browser } from '$app/environment'
	import { El } from '$lib/components/index.js'
	import { classname } from '$lib/utils'

	import type { AppProps } from './App.types'

	type $$Props = AppProps

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: $$Props['tag'] = 'div'

	/**
	 * Set Css Prefix for the App Footer
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'app'

	/**
	 * Set root app's default theme
	 */
	export let theme: $$Props['theme'] = undefined

	$: cssProps = { theme }
	$: otherProps = { cssPrefix, tag }

	$: if (browser) document.body.className = classname(cssPrefix, { theme }, [], true) ?? ''
</script>

<El {...$$restProps} {cssProps} {...otherProps}><slot /></El>
