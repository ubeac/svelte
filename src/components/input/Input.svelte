<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
</script>

<Root element="input" component={get_current_component()} componentName="Input" {...$$restProps} />
