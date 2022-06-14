<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import type { Colors } from '@app/types'
	import { classnameNew, condition } from '@app/utils'

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

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew(
		'card-status',
		{
			color,
			placement,
			size,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
