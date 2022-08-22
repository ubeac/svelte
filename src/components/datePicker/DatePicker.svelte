<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import moment from 'moment'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Changes display format of the date
	 */
	export let format: string = 'YYYY-MM-DD'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * The date value of Date picker
	 */
	export let value: Date | string | undefined = undefined

	const dispatch = createEventDispatcher()

	let element: HTMLElement | undefined = undefined

	let instance: any = undefined

	$: classes = classname('date-picker', $$props.class)

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
	<input bind:value bind:this={element} use:forwardEvents {...$$restProps} class={classes} />
{/if}
