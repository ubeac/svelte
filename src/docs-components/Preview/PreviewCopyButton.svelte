<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal'

	import { Button } from '$lib/components'
	import { Icon } from '$lib/components'
	import { classname } from '$lib/utils'

	/**
	 * Value to copy if button clicked
	 */
	export let value: string | undefined = ''

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

<Button ghost on:click={onClick} class={classname('preview-code-copy-button')}>
	<slot>
		<Icon name="copy" />
	</slot>
</Button>
