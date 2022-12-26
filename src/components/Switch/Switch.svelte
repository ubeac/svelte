<script lang="ts">
	import { El, Label } from '$lib/components/index.js'

	import type { SwitchProps } from './Switch.types'

	type $$Props = SwitchProps

	export let cssPrefix: $$Props['cssPrefix'] = 'switch'
	export let tag: $$Props['tag'] = 'input'
	export let id: $$Props['id'] = undefined
	export let color: $$Props['color'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let text: $$Props['text'] = undefined
	export let value: $$Props['value'] = undefined
	export let role: $$Props['role'] = 'switch'
	export let type: $$Props['type'] = 'checkbox'

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
	<El bind:value bind:checked={value} bind:id {...$$restProps} {cssProps} {...otherProps} />

	{#if text}
		<Label for={_for} cssPrefix="{cssPrefix}-label">
			{text}
		</Label>
	{/if}

	<slot />
</El>
