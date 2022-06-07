<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'
	import { classname } from '@app/utils'

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' = 'top-end'

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	$: classes = {
		color,
		placement,
		size,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="CardStamp" {...$$restProps}>
	<div class={classname('card-stamp-icon')}>
		<slot />
	</div>
</Root>
