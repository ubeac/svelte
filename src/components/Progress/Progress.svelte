<script lang="ts">
	import { El } from '$lib/components'
	import type { ProgressProps } from '$lib/components'

	type $$Props = ProgressProps

	/**
	 * Set Css Prefix for the Progress
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'progress'

	/**
	 * Set color of Badge
	 */
	export let color: $$Props['color'] = 'primary'

	/**
	 * Show badge as small dot. If true, default slot will be ignored.
	 */
	export let minValue: $$Props['minValue'] = undefined

	/**
	 * reduce background color's opacity
	 */
	export let maxValue: $$Props['maxValue'] = undefined

	/**
	 * Set a redirect url for badge
	 */
	export let currentValue: $$Props['currentValue'] = undefined

	/**
	 *
	 */
	export let progressSize: $$Props['progressSize'] = undefined

	/**
	 *
	 */
	export let indeterminate: $$Props['indeterminate'] = undefined

	let cssProps: any = {}
	//let barCssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			progressSize,
			color,
			indeterminate,
		}
		// barCssProps = {
		// 	color,
		// 	indeterminate,
		// }
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<El
		cssPrefix="{cssPrefix}-bar"
		role="progressbar"
		style="width: {currentValue}%"
		aria-valuenow={currentValue}
		aria-valuemin={minValue}
		aria-valuemax={maxValue}
		aria-label="{currentValue}% completed">
		{#if !indeterminate}
			<El tag="span" class="visually-hidden">{currentValue}% completed</El>
		{/if}
	</El>
</El>
