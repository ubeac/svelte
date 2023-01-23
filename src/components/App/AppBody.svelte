<script lang="ts">
	import El from '../El/El.svelte'
	import type { AppBodyProps } from './App.types'

	type $$Props = AppBodyProps

	/**
	 * Set Css Prefix for the application body
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'app-body'

	/**
	 * Set application body's default theme
	 */
	export let theme: $$Props['theme'] = undefined

	$: cssProps = { theme }
	$: otherProps = { cssPrefix }
</script>

<El {...$$restProps} {cssProps} {...otherProps}><slot /></El>
