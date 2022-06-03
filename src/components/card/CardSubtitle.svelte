<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
</script>

<Root element="p" component={get_current_component()} componentName="CardSubtitle">
	<slot />
</Root>
