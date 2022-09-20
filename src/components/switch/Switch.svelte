<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

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

	let id: string = nanoid()
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

<div class={classes}>
	<input
		type="checkbox"
		{id}
		bind:checked={value}
		use:forwardEvents
		{...$$restProps}
		class={classname('switch-input', { color }, undefined, true)} />
	<label for={id} class={classname('switch-label')}>
		<slot>
			{text}
		</slot>
	</label>
	{#if description || $$slots['description']}
		<div class={classname('switch-description')}>
			<slot name="description">
				{description}
			</slot>
		</div>
	{/if}
</div>
