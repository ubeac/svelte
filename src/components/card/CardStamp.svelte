<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'
	import { classname } from '@app/utils'

	/**
	 * if you want to change color of Stamp, use the color property
	 */
	export let color: Colors = undefined

	/**
	 * you can change position of Stamp by changing placement property
	 */
	export let placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' = 'top-end'

	/**
	 * You can chnage size of Stamp by changing size property
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	$: classes = {
		color,
		placement,
		size,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="CardStamp">
	<div class={classname('card-stamp-icon')}>
		<slot />
	</div>
</Root>
