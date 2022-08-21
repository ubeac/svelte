<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import Icon from '@iconify/svelte'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import type { IconPacks, IconSizes } from './icon.types'

	/**
	 * Set color of the Icon
	 */
	export let color: Colors = 'default'

	/**
	 * Name of the Icon, see https://icon-sets.iconify.design/ for list of icon names and packs
	 */
	export let name: string | undefined = undefined

	/**
	 * Change Icons package, see https://icon-sets.iconify.design/ for list of icon packs
	 */
	export let pack: IconPacks = 'tabler'

	/**
	 * Set Size of the Icon
	 */
	export let size: IconSizes = 'auto'

	// TODO
	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'icon',
		{
			color,
			size,
		},
		$$props.class,
		true
	)
</script>

{#if condition($$props)}
	<Icon icon="{pack}:{name}" width="auto" height="auto" {...$$restProps} class={classes} />
{/if}
