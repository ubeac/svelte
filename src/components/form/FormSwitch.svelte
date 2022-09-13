<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Switch } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Description of Switch
	 */
	export let description: string | undefined = undefined

	/**
	 * The color of escription
	 */
	export let descriptionColor: string | undefined = undefined

	/**
	 * Show multiple Switches in same horozontal line
	 */
	export let inline: boolean = false

	/**
	 * label for switch
	 */
	export let label: string | undefined = undefined

	/**
	 * Set checked state of Switch
	 */
	export let value: boolean | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-switch', { inline }, $$props.class)
</script>

<Switch bind:value {forwardEvents} {...$$restProps} class={classes}>
	{#if label}
		<span class={classname('form-switch-label')}>{label}</span>
	{/if}
	{#if description}
		<span class={classname('form-switch-description', { color: descriptionColor })}>
			{description}
		</span>
	{/if}
</Switch>
