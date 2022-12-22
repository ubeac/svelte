<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'

	import type Litepicker from 'litepicker'
	import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
	import moment from 'moment'

	import { type DatePickerProps, El } from '$lib/components'

	type $$Props = DatePickerProps

	//#region Props

	/**
	 * The tag of Date picker input
	 */
	export let tag: $$Props['tag'] = 'input'

	/**
	 * The css prefix of Date picker
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'input'

	/**
	 * Changes display format of the date
	 */
	export let format: $$Props['format'] = 'YYYY-MM-DD'

	/**
	 * Set border of input rounded
	 */
	export let borderRounded: $$Props['borderRounded'] = undefined

	/**
	 * Set order of date input flush (without border)
	 */
	export let borderFlush: $$Props['borderFlush'] = undefined

	/**
	 * Set the input disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Litepicker options
	 */
	export let options: $$Props['options'] = undefined

	/**
	 * Set placeholder for the input
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the input read-only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * The size of Date picker input
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the validation state of input
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * The date value of Date picker
	 */
	export let value: $$Props['value'] = undefined

	//#endregion

	const dispatch = createEventDispatcher()

	let element: HTMLElement
	let instance: Litepicker | undefined = undefined

	$: instance?.setDate(value)

	let settings: ILPConfiguration
	$: settings = {
		...options,
		element,
		buttonText: {
			...(options?.buttonText ?? {}),
			apply: '',
			cancel: '',
			previousMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
			nextMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
			reset: '',
		},
		// format,
		format: {
			parse(date: any) {
				if (date instanceof Date) return date
				if (typeof date === 'string') return moment(date, format).toDate()
				if (typeof date === 'number') return moment(date).toDate()
				return moment().toDate()
			},
			output(date: any) {
				return moment(date).format(format)
			},
		},
		setup(picker: any) {
			picker.on('selected', (date: any) => {
				const newValue = date?.dateInstance ? moment(date.dateInstance).format(format) : value
				if (value === newValue) return
				dispatch('changed', (value = newValue))
			})
		},
	}

	$: cssProps = {
		size,
		state,
		borderRounded,
		borderFlush,
	}

	$: otherProps = {
		cssPrefix,
		placeholder,
		disabled,
		readonly,
	}

	onMount(() => {
		if (!element) return
		if (typeof window == 'undefined') return
		import('litepicker').then(({ Litepicker }) => {
			instance = new Litepicker(settings)
		})
	})

	onDestroy(() => {
		instance?.destroy()
	})
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<slot />
	<El {tag} bind:value bind:element {...$$restProps} {cssProps} {...otherProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
