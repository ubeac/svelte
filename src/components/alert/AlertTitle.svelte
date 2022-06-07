<script>
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
</script>

<Root element="h4" component={get_current_component()} componentName="AlertTitle" {...$$restProps}>
	<slot />
</Root>
