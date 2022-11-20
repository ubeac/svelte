<script lang="ts">
	import { El } from '$lib/components'

	import type { ButtonProps } from './Button.types'

	interface $$Props extends ButtonProps {
		[x: string]: any
	}
	export let outline: $$Props['outline'] = undefined
	export let link: $$Props['link'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'button'
	export let tag: $$Props['tag'] = 'button'
	export let type: $$Props['type'] = 'button'
	export let value: $$Props['value'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let toggle: $$Props['toggle'] = undefined
	export let color: $$Props['color'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			outline,
			size,
			toggle,
			state,
			link,
		}
		otherProps = {
			tag,
			cssPrefix,
			role: tag === 'a' ? 'button' : undefined,
			type: type ?? 'button',
			disabled: state === 'disable',
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps} on:click>
	<slot>{value}</slot>
</El>
