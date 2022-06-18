<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let required: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('label', { required }, $$props.class)
</script>

{#if condition($$props)}
	<label use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</label>
{/if}
