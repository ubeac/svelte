<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { Label } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Set id for HTML element
	 */
	export let id: string = nanoid(10)

	/**
	 * Set label for filedset
	 */
	export let label: string | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-fieldset', undefined, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		{#if label}
			<Label for={id}>{label}</Label>
		{/if}
		<fieldset>
			<slot />
		</fieldset>
	</div>
{/if}
