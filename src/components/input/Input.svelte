<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let preview: boolean = false

	$: classes = {
		preview,
	}
</script>

{#if preview}
	<Root element="div" {classes} component={get_current_component()} componentName="Input" {...$$restProps}>
		{$$props.value}
	</Root>
{:else}
	<Root element="input" {classes} component={get_current_component()} componentName="Input" {...$$restProps} />
{/if}
