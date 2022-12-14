<script lang="ts">
	import { El, Radio } from '$lib/components'
	import type { RadioGroupProps } from '$lib/components'

	type $$Props = RadioGroupProps
	/**
	 * Set Color of RadioGroup
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'radio-group'

	/**
	 * Set inline to sohw inline radios
	 */
	export let inline: $$Props['inline'] = undefined

	/**
	 * Array of items to be bound to the radios
	 */
	export let items: $$Props['items'] = undefined

	/**
	 * Set reverse to show reversed radios
	 */
	export let reverse: $$Props['reverse'] = undefined

	/**
	 * the value of radio
	 */
	export let value: $$Props['value'] = undefined

	export let label: $$Props['label'] = (item: any, index: number) => (isPrimitive(item) ? item : index)

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
		value = event.target.value
	}

	const isPrimitive = (item: any) => {
		return item !== Object(item)
	}
</script>

<El {cssPrefix} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index}
			<Radio {...radioProps} checked={value === item} label={label(item, index)} value={item} on:change={onChange} />
		{/each}
	{:else}
		<slot />
	{/if}
</El>
