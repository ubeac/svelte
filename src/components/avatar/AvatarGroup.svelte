<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let stacked: boolean = false

	$: classes = { stacked }
</script>

<Root element="div" {classes} component={get_current_component()} componentName="AvatarGroup" {...$$restProps}>
	<slot />
</Root>
