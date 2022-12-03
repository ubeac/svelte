<script lang="ts">
	import { El } from '../Base'
	import { Label } from '../Label'
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

	$: cssProps = {
		inline,
		color,
	}

	$: otherProps = {
		tag,
		cssPrefix,
		id,
		text,
		role,
		type,
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper">
	<El bind:value bind:checked={value} {...$$restProps} {cssProps} {...otherProps} />

	{#if text}
		<Label for={id} cssPrefix="{cssPrefix}-label">
			{text}
		</Label>
	{/if}

	<slot />
</El>
