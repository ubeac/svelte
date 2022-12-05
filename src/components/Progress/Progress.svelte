<script lang="ts">
	import { El } from '$lib/components'
	import type { ProgressProps } from '$lib/components'

	type $$Props = ProgressProps

	/**
	 * Set Css Prefix for the Progress
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'progress'

	/**
	 * Set color of Progress
	 */
	export let color: $$Props['color'] = 'primary'

	/**
	 * Set the minimum value for progress.
	 */
	export let minValue: $$Props['minValue'] = undefined

	/**
	 * Set the max value for progress.
	 */
	export let maxValue: $$Props['maxValue'] = undefined

	/**
	 * Set the currect value for progress.
	 */
	export let currentValue: $$Props['currentValue'] = undefined

	/**
	 * Set the size of progress component.
	 */
	export let progressSize: $$Props['progressSize'] = undefined

	/**
	 * You can create a progress bar which shows indeterminate progress.
	 */
	export let indeterminate: $$Props['indeterminate'] = undefined

	/**
	 * You can remove the displayed value.
	 */
	export let visuallyHidden: $$Props['visuallyHidden'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			progressSize,
			color,
			indeterminate,
			visuallyHidden,
		}
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
			<El tag="span">{currentValue}% completed</El>
		{/if}
	</El>
</El>
