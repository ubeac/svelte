<script>
	import { forwardEventsBuilder } from '@ubeac/svelte/directives'
	import { classname } from '@ubeac/svelte/utils'
	import { getContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())
	const context = getContext('DIALOG')
</script>

<button
	use:forwardEvents
	type="button"
	on:click={() => context.hide(true)}
	class={classname('dialog-close')}
	aria-label="Close" />
