<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '../root'

	/**
	 * id of a signle form-related element in document
	 */
	let fore: string | undefined = undefined
	export { fore as for }
</script>

<Root element="label" componentName="Label" component={get_current_component()} for={fore}>
	<slot />
</Root>
