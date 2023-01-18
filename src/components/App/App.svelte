<script lang="ts">
	import { type AppProps, El } from '$lib/index.js'
	import { classname } from '$lib/utils/index.js'

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

	$: if (typeof window !== 'undefined') document.body.className = classname(cssPrefix, { theme }, [], true) ?? ''
</script>

<El {...$$restProps} {cssProps} {...otherProps}><slot /></El>
