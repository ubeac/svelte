<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * The Selected radio button's value
	 */
	export let group: any = undefined

	/**
	 * The value of radio button
	 */
	export let value: any = undefined

	$: classes = classname('radio', null, $$props.class)
</script>

{#if condition($$props)}
	<input bind:group {value} use:forwardEvents {...$$restProps} class={classes} type="radio" />
{/if}
