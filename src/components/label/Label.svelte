<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '../root'
</script>

<Root element="label" component={get_current_component()} componentName="Label" {...$$restProps}>
	<slot />
</Root>
