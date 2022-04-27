<script lang="ts">
	type Color = 'red' | 'green' | 'blue' | 'black' | 'white';

	/** the Color of button
	 * @type {'red'|'green'|'blue'|'black'|'white'}
	 */
	export let color = 'green';

	/** the border Color of button
	 * @type {Color}
	 */
	export let borderColor = 'green';

	/** backgroundColor Color of button */
	export let backgroundColor: 'red' | 'green' | 'blue' | 'black' | 'white' = 'green';

	/** disabled state of button*/
	export let disabled = false;

	/** enabled state of button
	 *
	 * @type {boolean}
	 */
	export let enabled;
</script>

<button
	{disabled}
	on:click
	style:background-color={backgroundColor}
	style:border="1px solid {borderColor}"
	style:color
>
{enabled}
	<slot />
</button>
