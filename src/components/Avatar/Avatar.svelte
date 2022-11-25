<script lang="ts">
	// import { get_current_component } from 'svelte/internal'
	// import { forwardEventsBuilder } from '$lib/directives'
	import { El } from '../Base'
	//import type { SharedProps } from '../Base/El.type'
	import type { AvatarProps } from './Avatar.types'

	// type $$Props = AvatarProps & {
	// 	[k: string]: any
	// }

	type $$Props = AvatarProps

	export let cssPrefix: $$Props['cssPrefix'] = 'avatar'
	export let color: $$Props['color'] = 'primary'
	//export let image: $$Props['image'] = undefined
	export let pill: $$Props['pill'] = undefined
	export let rounded: $$Props['round'] = undefined
	export let tile: $$Props['tile'] = undefined
	export let size: $$Props['size'] = 'ep'

	//const forwardEvents = forwardEventsBuilder(get_current_component())
	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			size,
			pill,
			rounded,
			tile,
		}
		otherProps = {
			//style: image ? `background-image:url(${image})` : null,
			cssPrefix,
		}
	}
	// let props: SharedProps
	// $: props = {
	// 	...$$restProps,
	// 	tag: 'span',
	// 	cssPrefix: 'avatar',
	// 	cssProps: {
	// 		color,
	// 		shape,
	// 		size,
	// 	},
	// 	style: image ? `background-image:url(${image})` : null,
	// }
</script>

<El tag="span" {...$$restProps} {cssProps} {...otherProps}>
	<slot />
	<!-- {#if !image}
		<slot />
	{/if} -->
</El>
