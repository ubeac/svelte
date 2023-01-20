<script lang="ts">
	import { El, Radio, type RadioGroupProps } from '$lib/components'

	type $$Props = RadioGroupProps
	/**
	 * Set color for the selected Radio's background color
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set Css Prefix for the RadioGroup
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'radio-group'

	/**
	 * Set inline to sohw inline Radios
	 */
	export let inline: $$Props['inline'] = undefined

	/**
	 * Array of items to be bound to the Radios
	 */
	export let items: $$Props['items'] = undefined

	/**
	 * Set reverse to show reversed Radios
	 */
	export let reverse: $$Props['reverse'] = undefined

	/**
	 * The value of RadioGroup
	 */
	export let value: $$Props['value'] = undefined

	let element: any = null
	let radioProps: any = {}

	$: {
		radioProps = {
			inline,
			reverse,
			name: element?.id,
			color,
		}
	}

	const onChange = (event: any) => {
		const selectedIndex = event.target.value
		value = items && selectedIndex ? items[selectedIndex] : undefined
	}
</script>

<El {cssPrefix} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index (index)}
			<Radio {...radioProps} value={index} checked={value === item} on:change={onChange} on:change>
				<slot {index} {item}>{item}</slot>
			</Radio>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
