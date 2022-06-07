<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	$: classes = {}
</script>

<Root element="input" {classes} component={get_current_component()} componentName="Input" {...$$restProps}>
	<slot />
</Root>
