<script lang="ts">
	import { classname, condition } from '$lib/utils'

	import Radio from './Radio.svelte'

	export let items: any[] = []
	export let value: string | number | undefined = undefined
	export let name: string | undefined = undefined
	export let column: boolean = false
	export let row: boolean = false
	$: radioGroupClasses = classname('radio-group', { column, row }, $$props.class)
	$: slugName = name || 'radio-group' + Math.random()
	function onClick(e) {
		value = e.currentTarget.value
	}
</script>

{#if condition($$props)}
	<div class={radioGroupClasses}>
		<slot>
			{#each items as item}
				<Radio checked={value == item.value} on:click={onClick} value={item.value} name={slugName} label={item.label} />
			{/each}
		</slot>
	</div>
{/if}
