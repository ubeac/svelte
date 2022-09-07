<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Checkbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	/**
	 *  Checked status of checkbox
	 */
	export let checked: boolean = false

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
	 * label for checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * Show checked state of checkbox
	 */
	export let value: boolean = false

	$: classes = classname('form-checkbox', { inline }, $$props.class, true)
</script>

{#if condition($$props)}
	<div class={classes}>
		<Checkbox bind:group bind:checked {forwardEvents} {label} {value} {color} />
		{#if description}
			<span class={classname('form-checkbox-description', { descriptionColor })}>
				{description}
			</span>
		{/if}
	</div>
{/if}
