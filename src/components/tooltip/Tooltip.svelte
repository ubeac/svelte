<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { createPopper } from '@popperjs/core'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let placement: '' = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('tooltip', { placement }, $$props.class)
</script>

{#if condition($$props)}{/if}
<button
	type="button"
	class="btn"
	data-bs-toggle="tooltip"
	data-bs-html="true"
	title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
	Tooltip with HTML
</button>
