<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let group: any = undefined

	/**
	 * TODO
	 */
	export let value: any = undefined

	$: classes = classname('checkbox', undefined, $$props.class)

	$: checked = group?.some((item: any) => item === value)

	function onChange(event: any) {
		group = group?.filter((item: any) => item != value) ?? []
		if (!event.target.checked) return
		group = [...group, value]
	}
</script>

{#if condition($$props)}
	{#if group}
		<input {checked} {group} use:forwardEvents {...$$restProps} class={classes} type="checkbox" on:change={onChange} />
	{:else}
		<input bind:checked={value} use:forwardEvents {...$$restProps} class={classes} type="checkbox" />
	{/if}
{/if}
