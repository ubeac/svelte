<script lang="ts">
	import { El, type ProgressProps } from '$lib/components'

	type $$Props = ProgressProps

	/**
	 * Set Css Prefix for the Progress
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'progress'

	/**
	 * Set color of Progress
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set the currect value for progress.
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the size of progress component.
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * You can create a progress bar which shows indeterminate progress.
	 */
	export let indeterminate: $$Props['indeterminate'] = undefined

	/**
	 * Enable striped progress bar with/without animation.
	 */
	export let striped: $$Props['striped'] = undefined

	/**
	 * aris-label for the progress bar
	 */
	export let label: $$Props['label'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	let _label: string = ''
	$: {
		cssProps = {
			size,
		}
		otherProps = {
			cssPrefix,
		}
		_label = label ?? value + '% completed'
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<El
		cssProps={{ color, indeterminate, striped }}
		cssPrefix="{cssPrefix}-bar"
		role="progressbar"
		style="width: {value}%"
		aria-valuenow={value}
		aria-valuemin="0"
		aria-valuemax="100"
		aria-label={_label}>
		{#if label}
			<El tag="span">{_label}</El>
		{:else}
			<El tag="span" cssPrefix="{cssPrefix}-bar-visually-hidden">{value}% Complete</El>
		{/if}
	</El>
</El>
