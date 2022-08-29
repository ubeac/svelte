<script lang="ts">
	import { tweened } from 'svelte/motion'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname,condition } from '$lib/utils'

	/**
	 * The Color of loading bar
	 */
	export let color: Colors = 'primary'

	/**
	 * The amount of time that loading will take
	 */
	export let duration: number = 1000

	/**
	 * Always show loading bar in top of page
	 */
	export let fixed: boolean = false

	/**
	 * Use Indeterminate prop when you don't know how long the loading will take
	 */
	export let indeterminate: boolean = false

	/**
	 * Show and start the loading when component mounted
	 */
	export let show: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let MAX: number = 100

	let interval: NodeJS.Timer

	let total: number = 0

	let value = tweened<number>(0, { duration })

	$: if ($value > (max * 95) / 100) clearInterval(interval)

	$: if (show) start()

	$: max = MAX + total

	$: width = ($value * 100) / max

	$: classes = classname(
		'app-loading-bar',
		{
			color,
			fixed,
			indeterminate,
			show,
		},
		$$props.class
	)

	/**
	 * Show component and start the loading animation
	 */
	export function start() {
		show = true
		value.set(0, { duration: 0 })
		interval = setInterval(increment, duration)
	}

	/**
	 * Add a task that Loading Bar should wait until it's done
	 * @param number
	 */
	export function push(number = MAX / 4) {
		show = true
		total += number
	}

	/**
	 * TODO
	 * @param number
	 */
	export function pop(number = MAX / 4) {
		total -= number
		if (total > 0) return
		total = 0
		done()
	}

	/**
	 * Finish loading animation and remove LoadingBar from page
	 */
	export function done() {
		clearInterval(interval)
		value.set(max, { duration: duration / 2 })
		setTimeout(() => (show = false), duration)
	}

	function increment() {
		$value += (MAX - $value) / 4
	}
</script>

{#if condition($$props)}
	<div class={classes} use:forwardEvents>
		<div style="width: {width}%;" class={classname('app-loading-bar-body')} />
	</div>
{/if}
