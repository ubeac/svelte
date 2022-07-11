<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Radio } from '$lib/components'
	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Description for Radio button
	 */
	export let description: string | undefined = undefined

	/**
	 * value of Selected radio button
	 */
	export let group: any = undefined

	/**
	 * Align multiple Radio buttons in a single horizontal line
	 */
	export let inline: boolean = false

	/**
	 * Label of Radio button
	 */
	export let label: string | undefined = undefined

	const forwardEvents = forwardEventsBuilderNew(get_current_component())

	$: classes = classname('form-radio', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class={classes}>
		<Radio bind:group {forwardEvents} {...$$restProps} />
		{#if label}
			<span class={classname('form-radio-label')}>{label}</span>
		{/if}
		{#if description}
			<span class={classname('form-radio-description')}>
				{description}
			</span>
		{/if}
	</label>
{/if}
