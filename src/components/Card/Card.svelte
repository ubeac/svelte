<script lang="ts">
	import { El } from '$lib/components'

	import { CardHeader, CardTitle } from '.'
	import type { CardProps } from './Card.types'

	type $$Props = CardProps
	export let cssPrefix: $$Props['cssPrefix'] = 'card'

	export let statusCssPrefix: $$Props['statusCssPrefix'] = 'card-status'

	/**
	 * You can use title property to set the card title
	 */
	export let title: $$Props['title'] = undefined

	/**
	 * You can use stacked property to stack up multiple cards, if you want to save screen space or create a visually appealing effect.
	 */
	export let stacked: $$Props['stacked'] = undefined

	/**
	 * You can use status color property to change status's color
	 */
	export let statusColor: $$Props['statusColor'] = 'primary'

	/**
	 * You can set position of status using position property
	 */
	export let statusPosition: $$Props['statusPosition'] = 'top'

	/**
	 * You can change the size of card status, using statusSize property
	 */
	export let statusSize: $$Props['statusSize'] = 'md'

	/**
	 * You can set the card to show status and make it more eye-catching
	 */
	export let status: $$Props['status'] = undefined

	/**
	 * You can set the card to show status and make it more eye-catching
	 */
	export let bgColor: $$Props['bgColor'] = undefined

	/**
	 * You can set the card to be shown borderless
	 */
	export let borderless: $$Props['borderless'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	let statusCssProps: any = {}
	$: {
		cssProps = {
			stacked,
			bgColor,
			borderless,
		}
		otherProps = {
			cssPrefix,
			statusCssPrefix,
		}
		statusCssProps = {
			size: statusSize,
			position: statusPosition,
			color: statusColor,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	{#if status}
		<El cssPrefix={statusCssPrefix} cssProps={statusCssProps} />
	{/if}
	{#if title}
		<CardHeader><CardTitle>{title}</CardTitle></CardHeader>
	{/if}
	<slot />
</El>
