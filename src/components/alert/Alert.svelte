<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { Icon } from '$lib/components'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import type { AlertVariants } from './Alert.types'

	/**
	 * Show close button at the end of alert
	 */
	export let dismissible: boolean = false

	/**
	 * Set an Icon at the start side of alert
	 */
	export let icon: string | undefined = undefined

	/**
	 * Set Alert's title
	 */
	export let title: string | undefined = ''

	/**
	 * Set Alert's color
	 */
	export let color: Colors = 'default'

	/**
	 * Set Alert's variant
	 */
	export let variant: AlertVariants = 'outlined'

	/**
	 * Set Alert's variant
	 */
	export let value: boolean = true

	const dispatch = createEventDispatcher()

	$: classes = classname(
		'alert',
		{
			color,
			icon: Boolean(icon),
			dismissible,
			variant,
		},
		['fade', 'show', $$props.class],
		true
	)

	function close() {
		value = false
		dispatch('close')
	}
</script>

{#if value}
	<div {...$$restProps} class={classes}>
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
	</div>
{/if}
