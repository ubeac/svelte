<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Color of Switch
	 */
	export let color: Colors = 'default'

	/**
	 * Description of Switch
	 */
	export let description: string | undefined = undefined

	/**
	 * The color of escription
	 */
	export let descriptionColor: string | undefined = undefined

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Sets text of Switch
	 */
	export let text: string | undefined = undefined

	/**
	 * Value of Switch
	 */
	export let value: boolean | undefined = undefined

	$: classes = classname('switch', undefined, $$props.class)
</script>

<label class={classes}>
	<input
		type="checkbox"
		bind:checked={value}
		use:forwardEvents
		{...$$restProps}
		class={classname('switch-input', { color }, undefined, true)} />
	<slot>
		{#if text}
			<span class={classname('switch-text')}>
				{text}
			</span>
		{/if}
		{#if description}
			<span class={classname('switch-description', { color: descriptionColor }, undefined, true)}>
				{description}
			</span>
		{/if}
	</slot>
</label>
