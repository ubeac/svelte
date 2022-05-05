<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import { condition } from '@app/utils'
</script>

{#if condition($$props)}
	<Root tag="div" component={get_current_component()} componentName="ButtonGroup" {...$$restProps}>
		<slot />
	</Root>
{/if}
