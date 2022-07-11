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

	let initialMax: number = 100
	let value = tweened<number>(0, { duration })
	let tasksLength: number = 0
	let intervalId: any

	function increment(val: number) {
		$value += val
	}

	export function start() {
		show = true
		dispatch('start')
		value.set(0, { duration: 0 })
		intervalId = setInterval(() => increment((initialMax - $value) / 4), duration)
	}

	export function push(number = initialMax / 4) {
		show = true
		dispatch('push', number)
		tasksLength += number
	}

	export function pop(number = initialMax / 4) {
		dispatch('pop', number)
		tasksLength -= number
		if (tasksLength <= 0) {
			tasksLength = 0
			done()
		}
	}

	export function done() {
		dispatch('done')
		clearInterval(intervalId)
		value.set(max, { duration: duration / 2 })
		setTimeout(() => (show = false), duration)
	}

	$: if ($value > (max * 95) / 100) {
		clearInterval(intervalId)
	}

	$: if (show) start()

	$: max = initialMax + tasksLength

	$: classes = classname(
		'app-loading',
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
	<div style="width: {($value * 100) / max}%;" class={classname('app-loading-bar')} />
</div>
