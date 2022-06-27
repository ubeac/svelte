<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let forwardEvents = forwardEventsBuilderNew(get_current_component())

	/**
	 * TODO
	 */
	export let value: any = undefined

	$: classes = classname('checkbox', null, $$props.class)
</script>

{#if condition($$props)}
	<input bind:checked={value} use:forwardEvents {...$$restProps} class={classes} type="checkbox" />
{/if}
