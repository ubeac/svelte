<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { El, Icon } from '$lib/components/index.js'
	import { classname } from '$lib/utils'

	import type { AlertProps } from './Alert.types'

	type $$Props = AlertProps

	/**
	 * Set Css Prefix for the Badge
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'alert'

	/**
	 * Show close button at the end of alert
	 */
	export let dismissible: $$Props['boolean'] = false

	/**
	 * Set an Icon at the start side of alert
	 */
	export let icon: $$Props['icon'] = undefined

	/**
	 * Set Alert's title
	 */
	export let title: $$Props['title'] = ''

	/**
	 * Set Alert's color
	 */
	export let color: $$Props['color'] = 'primary'

	/**
	 * Set Alert filled
	 */
	export let filled: $$Props['filled'] = undefined

	/**
	 * Set Alert's variant
	 */
	export let value: $$Props['value'] = true

	const dispatch = createEventDispatcher()

	let close = () => {
		value = false
		dispatch('close')
	}

	$: cssProps = {
		color,
		icon,
		dismissible,
		filled,
	}
	$: otherProps = { cssPrefix }
</script>

{#if value}
	<El {...$$restProps} {cssProps} {...otherProps} role="alert">
		{#if icon || $$slots.start}
			<div class={classname(cssPrefix + '-start')}>
				<slot name="start">
					<Icon size="xl" name={icon} />
				</slot>
			</div>
		{/if}
		<div class={classname('alert-body')}>
			<div class={classname('alert-title')}>
				<slot name="title">{title}</slot>
			</div>
			<div>
				<slot />
			</div>
		</div>
		{#if dismissible}
			<El class={classname(cssPrefix + '-end')} on:click={close}>
				<slot name="end" />
			</El>
		{/if}
	</El>
{/if}
