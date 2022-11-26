<script lang="ts">
	import { El } from '$lib/components'

	//import { classname } from '$lib/utils'
	import { CardHeader, CardTitle } from '.'
	import type { CardProps } from './Card.types'

	type $$Props = CardProps

	export let title: $$Props['title'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'card'

	//$: classes = classname('card', {}, $$props.class, true)
	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	{#if title}
		<CardHeader><CardTitle>{title}</CardTitle></CardHeader>
	{/if}
	<slot />
</El>
