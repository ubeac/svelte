<script>
	/** the Color of button
	 * @type {'red'|'green'|'blue'|'black'|'white'}
	 */
	export let color = 'green';

	/** the background Color of button
	 * @type {'red'|'green'|'blue'|'black'|'white'}
	 */
	export let backgroundColor = 'white';

	/** disabled state of button
	 * @type {boolean}
	 */
	export let disabled = false;

	/**
	 * Text of button
	 * @type {string}
	 */
	export let text = undefined;
</script>

<button {disabled} on:click style:background-color={backgroundColor} style:color>
	{#if text}
		{text}
	{:else}
		<slot />
	{/if}
</button>
