<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let required: boolean = false

	$: classes = {
		required,
	}
</script>

<Root element="label" {classes} component={get_current_component()} componentName="Label" {...$$restProps}>
	<slot />
</Root>
