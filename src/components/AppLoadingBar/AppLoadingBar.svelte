<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { tweened } from 'svelte/motion'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import { El } from '../Base'
	import type { AppLoadingBarProps } from './AppLoadingBar.types'

	type $$Props = AppLoadingBarProps

	export let cssPrefix: $$Props['cssPrefix'] = 'app-loading-bar'
	export let tag: $$Props['tag'] = 'div'

	/**
	 * The Color of loading bar
	 */
	export let color: $$Props['color'] = 'primary'
	/**
	 * The amount of time that loading will take
	 */
	export let duration: $$Props['duration'] = 1000
	/**
	 * Always show loading bar in top of page
	 */
	export let fixedPosition: $$Props['fixedPosition'] = false
	/**
	 * Use Indeterminate prop when you don't know how long the loading will take
	 */
	export let indeterminate: $$Props['indeterminate'] = false
	/**
	 * Show and start the loading when component mounted
	 */
	export let show: $$Props['show'] = false

	let MAX: number = 100
	let interval: NodeJS.Timer
	let total: number = 0
	let value = tweened<number>(0, { duration })

	$: if ($value > (max * 95) / 100) clearInterval(interval)
	$: if (show) start()
	$: max = MAX + total
	$: width = ($value * 100) / max

	$: cssProps = {
		color,
		fixedPosition,
		indeterminate,
		show,
	}

	/**
	 * Show component and start the loading animation
	 */
	export function start() {
		show = true
		value.set(0, { duration: 0 })
		if (interval) clearInterval(interval)
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
	 * finish previously added task.
	 * @param number
	 */
	export function pop(number = MAX / 4) {
		total -= number
		if (total > 0) return
		total = 0
		done()
	}
	/**
	 * Finish loading animation and remove LoadingBar from page.
	 */
	export function done() {
		clearInterval(interval)
		value.set(max, { duration: duration! / 2 })
		setTimeout(() => (show = false), duration! / 2)
	}
	function increment() {
		$value += (MAX - $value) / 4
	}
</script>

<El {...$$restProps} {cssProps} {tag} {cssPrefix}>
	<El tag="div" cssPrefix="{cssPrefix}-body" style="width: {width}%;" cssProps={{ color }} />
</El>
