<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../base'
	import type { SharedProps } from '../base/El.type'
	import type { AvatarProps } from './avatar.types'

	type $$Props = AvatarProps & {
		[k: string]: any
	}

	export let color: $$Props['color'] = 'default'

	export let image: $$Props['image'] = undefined
	export let shape: $$Props['shape'] = 'round'

	export let size: $$Props['size'] = 'ep'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let props: SharedProps
	$: props = {
		...$$restProps,
		tag: 'span',
		cssPrefix: 'avatar',
		cssProps: {
			color,
			shape,
			size,
		},
		style: image ? `background-image:url(${image})` : null,
	}
</script>

<El {forwardEvents} {...props}>
	<slot />
</El>
