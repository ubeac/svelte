<script lang="ts">
	// import Icon from '@iconify/svelte'
	import { classname } from '$lib/utils'

	import type { IconProps } from './Icon.types'

	type $$Props = IconProps

	//#region Props

	/**
	 * The prefix of the component CSS class
	 * @default icon
	 * @type string
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'icon'

	/**
	 * Set color of the Icon
	 * @default undefined
	 * @type string
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set color of the Icon
	 * @default false
	 * @type boolean
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
	 * @default undefined
	 * @type string
	 * @see https://icon-sets.iconify.design/ for list of icon sizes
	 */
	export let size: $$Props['size'] = undefined

	//#endregion

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

ICON
<!-- <Icon icon="{pack}:{name}" {...$$restProps} class={classes} /> -->
