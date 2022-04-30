<script lang="ts">
	import type { Color } from '../../types'

	/** the Color of button
	 */
	export let color: Color = 'green'

	/** the background Color of button
	 */
	export let backgroundColor: Color = 'white'

	/**
	 * Disabled state of button
	 */
	export let disabled: boolean = false

	/**
	 * Text of button
	 */
	export let text: string = undefined
</script>

<button {disabled} on:click style:background-color={backgroundColor} style:color>
	{#if text}
		{text}
	{:else}
		<slot />
	{/if}
</button>
