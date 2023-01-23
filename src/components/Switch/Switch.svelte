<script lang="ts">
	import type { SwitchProps } from '$lib/components'

	import El from '../El/El.svelte'
	import Label from '../Label/Label.svelte'

	type $$Props = SwitchProps

	export let cssPrefix: $$Props['cssPrefix'] = 'switch'
	export let tag: $$Props['tag'] = 'input'
	export let id: $$Props['id'] = undefined
	export let color: $$Props['color'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let description: $$Props['description'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let text: $$Props['text'] = undefined
	export let value: $$Props['value'] = false
	export let reverse: $$Props['reverse'] = false
	export let checked: $$Props['checked'] = false
	export let role: $$Props['role'] = 'switch'
	export let type: $$Props['type'] = 'checkbox'

	function onChange(event: any) {
		checked = event.target.checked
		value = event.target.checked
	}

	$: _for = id
	$: cssProps = {
		color,
	}

	$: otherProps = {
		tag,
		checked,
		cssPrefix,
		text,
		role,
		disabled,
		type,
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ inline, reverse }}>
	<El bind:id {...$$restProps} {cssProps} {...otherProps} on:change={onChange} on:change />
	{#if text || $$slots['default']}
		<Label for={_for} cssPrefix="{cssPrefix}-label">
			<slot>
				{text}
			</slot>
		</Label>
	{/if}
	{#if description || $$slots['description']}
		<El cssPrefix="{cssPrefix}-description">
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
