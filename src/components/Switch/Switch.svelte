<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import { El } from '../Base'
	import type { SwitchProps } from './Switch.types'

	type $$Props = SwitchProps

	export let cssPrefix: $$Props['cssPrefix'] = 'switch'
	export let tag: $$Props['tag'] = 'label'
	export let id: $$Props['id'] = 'switch-' + nanoid(10)
	export let forwardEvents: $$Props['forwardEvents'] = forwardEventsBuilder(get_current_component())

	export let color: $$Props['color'] = undefined
	export let description: $$Props['description'] = undefined
	export let descriptionColor: $$Props['descriptionColor'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let text: $$Props['text'] = undefined
	export let value: $$Props['value'] = undefined

	$: cssProps = {
		inline,
	}

	$: otherProps = {
		tag,
		cssPrefix,
		id,
		forwardEvents,
		text,
		description,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<input
		type="checkbox"
		{id}
		bind:checked={value}
		use:forwardEvents
		class={classname('switch-input', {color}, undefined, true)}
		cssProps={{ color }} />
	<El tag="span" for={id} cssPrefix="switch-label" cssProps={{ color }}>
		<slot>
			{text}
		</slot>
	</El>

	{#if description || $$slots['description']}
		<El tag="span" cssPrefix="switch-description" cssProps={{ color: descriptionColor }}>
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
