<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Checkbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Set color of checkbox
	 */
	export let color: Colors = 'default'

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
	 *  Binding result of selected items
	 */
	export let group: any = []

	/**
	 * Show multiple Checkboxes in same horozontal line
	 */
	export let inline: boolean = false

	/**
	 * Value of checkbox in group
	 */
	export let key: string | undefined = false

	/**
	 * label for checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * Show checked state of checkbox
	 */
	export let value: boolean = false

	$: classes = classname('form-checkbox', { inline }, $$props.class, true)
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classes}>
	<Checkbox bind:group bind:value {forwardEvents} {label} {key} {color} />
	{#if label}
		<span class={classname('form-checkbox-label')}>
			{label}
		</span>
	{/if}
	{#if description}
		<span class={classname('form-checkbox-description', { color: descriptionColor })}>
			{description}
		</span>
	{/if}
</label>
