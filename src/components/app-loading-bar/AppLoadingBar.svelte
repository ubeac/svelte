<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { tweened } from 'svelte/motion'

	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	const dispatch = createEventDispatcher()

	/**
	 * The Color of loading bar
	 */
	export let color: Colors = 'primary'

	/**
	 * Always show loading bar in top of page
	 */
	export let fixed: boolean = false

	/**
	 * Use Indeterminate prop when you don't know how long the loading will take
	 */
	export let indeterminate: boolean = false

	/**
	 * The amount of time that loading will take
	 */
	export let duration: number = 1000

	/**
	 * Show and start the loading when component mounted
	 */
	export let show: boolean = false

	let MAX: number = 100

	let interval: any
	let total: number = 0
	let value = tweened<number>(0, { duration })

	function increment() {
		$value += (MAX - $value) / 4
	}

	/**
	 * Show component and start the loading animation
	 */
	export function start() {
		show = true
		dispatch('start')
		value.set(0, { duration: 0 })
		interval = setInterval(increment, duration)
	}

	/**
	 * Add a task that Loading Bar should wait until it's done
	 * @param number
	 */
	export function push(number = MAX / 4) {
		show = true
		dispatch('push', number)
		total += number
	}

	/**
	 * TODO
	 * @param number
	 */
	export function pop(number = MAX / 4) {
		dispatch('pop', number)
		total -= number
		if (total > 0) return
		total = 0
		done()
	}

	/**
	 * Finish loading animation and remove LoadingBar from page
	 */
	export function done() {
		dispatch('done')
		clearInterval(interval)
		value.set(max, { duration: duration / 2 })
		setTimeout(() => (show = false), duration)
	}

	$: if ($value > (max * 95) / 100) {
		clearInterval(interval)
	}

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
</script>

<div class={classes}>
	<div style="width: {width}%;" class={classname('app-loading-bar-body')} />
</div>
