<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El, type ElProps } from '../Base'
	import type { CheckboxProps } from './Checkbox.types'

	type $$Props = CheckboxProps

	export let tag: $$Props['tag'] = 'input'
	export let cssPrefix: $$Props['cssPrefix'] = 'checkbox'
	
	/**
	 * Set color of checkbox when it is checked
	 */
	export let color: $$Props['color'] = 'primary'

	/**
	 * Description of checkbox
	 */
	export let description: $$Props['description'] = ''

	/**
	 * Forward all native Events
	 */
	export let forwardEvents: $$Props['forwardEvents'] = forwardEventsBuilder(get_current_component())

	/**
	 * Binding result of selected items
	 */
	export let group: $$Props['group'] = []

	/**
	 * Set id for Checkbox element
	 */
	export let id: $$Props['id'] = 'checkbox-' + nanoid(10)

	/**
	 * Show multiple items in same line
	 */
	export let inline: $$Props['inline'] = false

	/**
	 * Set checkbox's key
	 */
	export let key: $$Props['key'] = undefined

	/**
	 * Set text of checkbox
	 */
	export let text: $$Props['text'] = undefined

	/**
	 * Checked status of checkbox
	 */
	export let value: $$Props['value'] = false

	$: group ??= []
	$: updateGroup(value)
	$: updateChekbox(group)

	function updateChekbox(group: any) {
		value = group.indexOf(key) >= 0
	}

	function updateGroup(value?: boolean) {
		const index = group.indexOf(key)
		if (value) {
			if (index < 0) {
				group = [...group, key]
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1)
				group = group
			}
		}
	}

	$: wrapperProps = {
		cssPrefix: cssPrefix + '-wrapper',
		cssProps: {
			inline
		}
	}
	
	$: checkboxProps = {
		...$$restProps,
		tag,
		cssPrefix,
		type: 'checkbox',
		value: key,
		id,
		forwardEvents,
		cssProps: {
			color,
		},
	}

	let labelProps: Partial<ElProps>;
	$: labelProps = {
		cssPrefix: cssPrefix + '-label',
		tag: 'label',
		for: id
	}

	$: descriptionProps = {
		cssPrefix: cssPrefix + '-description'
	}

</script>

<El {...wrapperProps}>
	<El {...checkboxProps} bind:checked={value} />

	{#if text || $$slots['default']}
		<El {...labelProps}>
			<slot>
				{text}
			</slot>
		</El>
	{/if}

	{#if description || $$slots['description']}
		<El {...descriptionProps}>
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
