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
	 * Checked status of checkbox
	 */
	export let value: boolean = false

	$: classes = classname('checkbox', { color }, $$props.class, true)

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

<input type="checkbox" bind:checked={value} value={key} use:forwardEvents {...$$restProps} class={classes} />
