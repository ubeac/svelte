<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Set color of checkbox when it is checked
	 */
	export let color: Colors = 'primary'

	/**
	 * Description of checkbox
	 */
	export let description: string | undefined = undefined

	/**
	 * Description of checkbox
	 */
	export let descriptionColor: Colors = 'default'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Binding result of selected items
	 */
	export let group: any = []

	/**
	 * Set checkbox's key
	 */
	export let key: string | undefined = undefined

	/**
	 * Set text of checkbox
	 */
	export let text: string | undefined = undefined

	/**
	 * Checked status of checkbox
	 */
	export let value: boolean = false

	$: classes = classname('checkbox', undefined, $$props.class, true)

	$: updateGroup(value)
	$: updateChekbox(group)

	function updateChekbox(group: any) {
		value = group.indexOf(key) >= 0
	}

	function updateGroup(value: boolean) {
		const index = group.indexOf(key)
		if (value) {
			if (index < 0) {
				group = [...group, key]
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1)
				group = group
			}
		}
	}
</script>

<label class={classes}>
	<input
		type="checkbox"
		bind:checked={value}
		value={key}
		use:forwardEvents
		{...$$restProps}
		class={classname('checkbox-input', { color }, undefined, true)} />
	<slot>
		{#if text}
			<span class={classname('checkbox-text')}>
				{text}
			</span>
		{/if}
		{#if description}
			<span class={classname('checkbox-description', { color: descriptionColor }, undefined, true)}>
				{description}
			</span>
		{/if}
	</slot>
</label>
