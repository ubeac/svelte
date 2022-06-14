<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

	/**
	 * TODO
	 */
	export let required: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew('label', { required }, $$props.class)
</script>

{#if condition($$props)}
	<label use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</label>
{/if}
