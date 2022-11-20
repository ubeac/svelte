<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { Icon } from '$lib/components'
	import { classname } from '$lib/utils'

	import { El } from '../Base'
	import type { SharedProps } from '../Base/El.type'
	import type { AlertProps } from './alert.types'

	type $$Props = AlertProps

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
	export let color: $$Props['color'] = 'default'

	/**
	 * Set Alert's variant
	 */
	export let variant: $$Props['variant'] = 'outlined'

	/**
	 * Set Alert's variant
	 */
	export let value: $$Props['value'] = true

	const dispatch = createEventDispatcher()

	function close() {
		value = false
		dispatch('close')
	}

	let props: SharedProps
	$: props = {
		tag: 'div',
		cssPrefix: 'alert',
		cssProps: {
			color,
			icon: Boolean(icon),
			dismissible,
			variant,
		},
		class: ['fade', 'show', $$props.class].join(' '),
	}
</script>

{#if value}
	<El {...props}>
		<div class={classname('alert-icon')}>
			<slot name="icon">
				<Icon name={icon} />
			</slot>
		</div>
		<div class={classname('alert-title')}>
			<slot name="title">{title}</slot>
		</div>
		<slot />
		{#if dismissible}
			<div class={classname('alert-close')} on:click={close}>
				<slot name="close" />
			</div>
		{/if}
	</El>
{/if}
