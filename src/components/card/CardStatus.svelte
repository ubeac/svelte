<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * You can use color property to change status's border color
	 */
	export let color: Colors = undefined

	/**
	 * You can set position of status using placement property
	 */
	export let placement: 'top' | 'bottom' | 'start' | undefined = undefined

	/**
	 * If you want to change size of Status, use size property
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	$: classes = {
		color,
		placement,
		size,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="CardStatus" />
