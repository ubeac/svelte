<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import { Button } from '../button'
	import { Icon } from '../icon'

	/**
	 * Value to copy if button clicked
	 */
	export let value: string | undefined = ''

	// const forwardEvents = forwardEventsBuilder(get_current_component())

	const dispatch = createEventDispatcher()

	async function onClick() {
		try {
			navigator.clipboard.writeText(value ?? '')
			dispatch('success', value)
		} catch (err) {
			dispatch('error')
		}
	}
</script>

<!-- TODO: forwardEvents -->
<Button ghost on:click={onClick} class={classname('preview-copy-button')}>
	<slot>
		<Icon name="copy" />
	</slot>
</Button>
