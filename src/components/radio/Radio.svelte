<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { Label } from '../label'

	/**
	 * Forward all native Events
	 */
	let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Checked state of Checkbox
	 */
	export let value: string | undefined = undefined
	export let label: string | undefined = undefined
	export let name: string | undefined = undefined
	export let checked: boolean | undefined = undefined
	$: radioClasses = classname('radio', { checked }, $$props.class)
	$: inputClasses = classname('radio-input', undefined, $$props.class)
	$: labelClasses = classname('radio-label', undefined, $$props.class)
</script>

{#if condition($$props)}
	<label class={radioClasses}>
		<input {checked} type="radio" {name} {value} use:forwardEvents {...$$restProps} class={inputClasses} />
		<span class={labelClasses}>
			{#if label}
				{label}
			{:else}
				<slot />
			{/if}
		</span>
	</label>
{/if}
