<script lang="ts">
	import { Radio } from '$lib/components'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	interface Item {
		label: string
		value: boolean
		disabled?: boolean
		checked?: boolean
	}

	/**
	 * Set Color of RadioGroup
	 */
	export let color: Colors = 'default'
	/**
	 * Set View of RadioGroup
	 */
	export let inline: boolean = false
	/**
	 * Set List of Items
	 */
	export let items: Item[] = []
	/**
	 * Set name of RadioGroup
	 */
	export let name: string | undefined = undefined

	$: radioGroupClasses = classname('radio-group', { inline }, $$props.class)
	$: slugName = name ?? 'radio-group' + Math.random()
</script>

{#if condition($$props)}
	<div class={radioGroupClasses}>
		<slot>
			{#each items as item}
				<Radio
					disabled={item.disabled}
					checked={item.checked}
					value={item.value}
					name={slugName}
					label={item.label}
					{color} />
			{/each}
		</slot>
	</div>
{/if}
