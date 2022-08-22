<script lang="ts">
	import { classname, condition } from '$lib/utils'

	import Radio from './Radio.svelte'

	interface Item {
		label: string
		value: string
		disabled?: boolean
	}

	export let items: Item[] = []
	export let value: string | number | undefined = undefined
	export let name: string | undefined = undefined
	export let column: boolean = false
	export let row: boolean = false
	$: radioGroupClasses = classname('radio-group', { column, row }, $$props.class)
	$: slugName = name || 'radio-group' + Math.random()
	function onClick(e: any) {
		value = e.target.value
	}
</script>

{#if condition($$props)}
	<div class={radioGroupClasses}>
		<slot>
			{#each items as item}
				<Radio
					disabled={item.disabled}
					checked={value == item.value}
					on:click={onClick}
					value={item.value}
					name={slugName}
					label={item.label} />
			{/each}
		</slot>
	</div>
{/if}
