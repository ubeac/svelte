<script lang="ts">
	import { classname, condition } from '$lib/utils'

	import Checkbox from './Checkbox.svelte'

	export let items: any[] = []
	export let value: any[] = []
	export let name: string | undefined = undefined
	export let column: boolean = false
	export let row: boolean = false

	$: checkboxGroupClasses = classname('checkbox-group', { column, row }, $$props.class)
	$: slugName = name || 'checkbox-group' + Math.random()
	function onClick(e) {
		let val = e.target.value
		let checked = e.target.checked
		if (checked) {
			if (!value.some((x) => x == val)) {
				value = [...value, val]
			}
		} else {
			value = value.filter((item) => item != val)
		}
	}
</script>

{#if condition($$props)}
	<div class={checkboxGroupClasses}>
		<slot>
			{#each items as item}
				<Checkbox
					checked={value.some((x) => x == item.value)}
					disabled={item.disabled}
					on:click={onClick}
					value={item.value}
					name={slugName}
					label={item.label}
					color={item.color}
					/>
			{/each}
		</slot>
	</div>
{/if}
