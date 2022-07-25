<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Switch } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Description of checkbox
	 */
	export let description: string | undefined = undefined

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
	export let value: boolean | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-switch', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class={classes}>
		<Switch bind:value {forwardEvents} {...$$restProps} />
		{#if label}
			<span class={classname('form-switch-label')}>{label}</span>
		{/if}
		{#if description}
			<span class={classname('form-switch-description')}>
				{description}
			</span>
		{/if}
	</label>
{/if}
