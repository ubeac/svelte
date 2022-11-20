<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	export let state: 'valid' | 'invalid' | 'normal' = 'normal'

	const forwardEvents = forwardEventsBuilder(get_current_component())
	$: classes = classname('form-hint', { state }, $$props.class, true)
</script>

<small use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</small>
