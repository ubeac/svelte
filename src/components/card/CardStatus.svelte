<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let placement: 'top' | 'bottom' | 'start' | undefined = undefined

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

<Root element="div" {classes} component={get_current_component()} componentName="CardStatus" {...$$restProps} />
