<script lang="ts">
	import { type DotProps, El } from '$lib/components'

	type $$Props = DotProps

	export let tag: $$Props['tag'] = 'span'
	export let cssPrefix: $$Props['cssPrefix'] = 'dot'
	export let animated: $$Props['animated'] = undefined
	export let color: $$Props['color'] = undefined
	export let indicator: $$Props['indicator'] = undefined
	export let cssIndicatorPrefix: $$Props['cssIndicatorPrefix'] = 'dot-indicator-circle'

	$: cssProps = {
		animated,
		color,
		indicator,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	{#if indicator}
		<El cssPrefix={cssIndicatorPrefix} />
		<El cssPrefix={cssIndicatorPrefix} />
		<El cssPrefix={cssIndicatorPrefix} />
	{/if}
</El>
