<script lang="ts">
	import { El, Label } from '$lib/components'

	import type { SwitchProps } from './Switch.types'

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
	export let checked: $$Props['checked'] = false
	export let role: $$Props['role'] = 'switch'
	export let type: $$Props['type'] = 'checkbox'

	function onChange(event: any) {
		checked = event.target.checked
		value = event.target.checked
	}

	$: _for = id
	$: cssProps = {
		inline,
		color,
	}

	$: otherProps = {
		tag,
		cssPrefix,
		text,
		role,
		type,
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper">
	<El {checked} bind:id {...$$restProps} {cssProps} {...otherProps} on:change={onChange} />
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
				{text}
			</slot>
		</El>
	{/if}
</El>
