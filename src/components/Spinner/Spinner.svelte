<script lang="ts">
	import type { SpinnerProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = SpinnerProps
	export let tag: $$Props['tag'] = 'span'
	export let cssPrefix: $$Props['cssPrefix'] = 'spinner'
	export let color: $$Props['color'] = undefined
	export let size: $$Props['size'] = undefined
	export let role: $$Props['role'] = 'status'
	export let animate: $$Props['animate'] = undefined

	/**
	 * You can choose a style for spinner using style property
	 */
	// export let style: SpinnerStyles = 'border'

	$: cssProps = {
		size,
		color,
		animate,
	}

	$: otherProps = {
		tag,
		cssPrefix,
		role,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
