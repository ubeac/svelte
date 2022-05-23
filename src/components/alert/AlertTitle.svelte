<script>
	import { get_current_component } from 'svelte/internal'

	import Root from '../root/Root.svelte'
</script>

<Root element="h4" component={get_current_component()} componentName="AlertTitle">
	<slot />
</Root>
