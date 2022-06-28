<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Checkbox } from '$lib/components'
	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let description: string | undefined = undefined

	/**
	 * TODO
	 */
	export let inline: boolean = false

	/**
	 * TODO
	 */
	export let label: string | undefined = undefined

	const forwardEvents = forwardEventsBuilderNew(get_current_component())

	$: classes = classname('form-checkbox', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class={classes}>
		<Checkbox {forwardEvents} />
		{#if label}
			<span class="form-checkbox-label">{label}</span>
		{/if}
		{#if description}
			<span class="form-checkbox-description">
				{description}
			</span>
		{/if}
	</label>
{/if}
