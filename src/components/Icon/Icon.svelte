<script lang="ts">
	import Icon from '@iconify/svelte'

	import { classname } from '$lib/utils'

	import type { IconProps } from './Icon.types'

	type $$Props = IconProps

	export let cssPrefix: $$Props['cssPrefix'] = 'icon'

	/**
	 * Set color of the Icon
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set color of the Icon
	 */
	export let filled: $$Props['filled'] = false

	/**
	 * Name of the Icon, see https://icon-sets.iconify.design/ for list of icon names and packs
	 */
	export let name: $$Props['name'] = undefined

	/**
	 * Change Icons package, see https://icon-sets.iconify.design/ for list of icon packs
	 */
	export let pack: $$Props['pack'] = 'tabler'

	/**
	 * Set Size of the Icon
	 */
	export let size: $$Props['size'] = undefined

	$: classes = classname(
		cssPrefix,
		{
			color,
			filled,
			size,
		},
		$$props.class,
		true
	)
</script>

<Icon icon="{pack}:{name}" {...$$restProps} class={classes} />
