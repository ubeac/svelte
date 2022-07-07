<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import * as luxon from 'luxon'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let format: string = 'yyyy-MM-dd'

	/**
	 * TODO
	 */
	export let forwardEvents = forwardEventsBuilderNew(get_current_component())

	/**
	 * TODO
	 */
	export let preview: boolean = false

	/**
	 * TODO
	 */
	export let value: Date | string | undefined = undefined

	const dispatch = createEventDispatcher()

	let element: HTMLElement | undefined = undefined

	let instance: any = undefined

	$: classes = classname('date-picker', { preview }, $$props.class)

	$: instance?.setDate(value)

	$: settings = {
		element,
		buttonText: {
			apply: '',
			cancel: '',
			previousMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
			nextMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
			reset: '',
		},
		format: {
			parse(date: any) {
				if (date instanceof Date) return date
				if (typeof date === 'string') return luxon.DateTime.fromFormat(date, format).toJSDate()
				if (typeof date === 'number') return new Date(date)
				return new Date()
			},
			output(date: any) {
				return luxon.DateTime.fromJSDate(date).toFormat(format)
			},
		},
		setup(picker: any) {
			picker.on('selected', (date: any) => {
				const newValue = date?.dateInstance ? luxon.DateTime.fromJSDate(date.dateInstance).toFormat(format) : value
				if (value === newValue) return
				dispatch('changed', (value = newValue))
			})
		},
	}

	onMount(() => {
		if (!element) return
		if (typeof window == 'undefined') return
		import('litepicker').then((Litepicker) => {
			instance = new Litepicker.Litepicker(settings as any)
		})
	})

	onDestroy(() => {
		instance?.destroy()
	})
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<input bind:this={element} use:forwardEvents {...$$restProps} class={classes} />
	{/if}
{/if}
