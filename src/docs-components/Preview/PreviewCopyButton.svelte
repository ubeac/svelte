<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal'

	import Button from '../../components/Button/Button.svelte'
	import Icon from '../../components/Icon/Icon.svelte'
	import { classname } from '../../components/utils'

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
