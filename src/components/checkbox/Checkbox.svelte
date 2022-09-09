<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Checked status of checkbox
	 */
	export let checked: boolean = false

	/**
	 * Set color of checkbox when it is checked
	 */
	export let color: Colors = 'primary'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Binding result of selected items
	 */
	export let group: any = []

	/**
	 * Set label value of checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * Set checkbox value
	 */
	export let value: any

	$: checkboxClasses = classname('checkbox', undefined, $$props.class, true)
	$: inputClasses = classname('checkbox-input', { color }, $$props.class, true)
	$: labelClasses = classname('checkbox-label', undefined, $$props.class, true)

	$: updateChekbox(group)
	$: updateGroup(checked)

	function updateChekbox(group: any) {
		checked = group.indexOf(value) >= 0
	}

	function updateGroup(checked: boolean) {
		const index = group.indexOf(value)
		if (checked) {
			if (index < 0) {
				group.push(value)
				group = group
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1)
				group = group
			}
		}
	}
</script>

<label class={checkboxClasses}>
	<input type="checkbox" bind:checked {value} class={inputClasses} use:forwardEvents {...$$restProps} />
	<span class={labelClasses}>
		{#if label}
			{label}
		{:else}
			<slot />
		{/if}
	</span>
</label>
