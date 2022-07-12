<script lang="ts">
	import { onDestroy, onMount, setContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import type { Carousel } from 'bootstrap'

	import { CarouselButton, CarouselIndicator, CarouselIndicators } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Shows next and previous buttons
	 */
	export let buttons: boolean = false

	/**
	 * Shows carousel indicators at the bottom of the carousel
	 */

	export let indicators: boolean = false

	/**
	 * Sets the interval for automatic sliding
	 */
	export let interval: number | false = 5000

	/**
	 * Set transition type
	 */
	export let transition: 'slide' | 'fade' | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let activeItem = writable<string>()
	let activeIndex = 0
	let component: Carousel | undefined = undefined
	let element: HTMLDivElement
	let items: string[] = []

	function next() {
		activeIndex = (activeIndex + 1) % items.length
		component?.next()
	}
	function prev() {
		activeIndex = (items.length + activeIndex - 1) % items.length
		component?.prev()
	}

	function bind() {
		import('bootstrap').then(({ Carousel }) => {
			if (!element) return
			component = new Carousel(element, {
				interval,
				ride: 'carousel',
			})
			element.addEventListener('slide.bs.carousel', onSlide)
			element.addEventListener('slid.bs.carousel', onSlid)

			component.cycle()
			$activeItem = items[activeIndex]
		})
	}

	function unbind() {
		element?.removeEventListener('slide.bs.carousel', onSlide)
		element?.removeEventListener('slid.bs.carousel', onSlid)

		if (component) {
			component.dispose()
		}
	}

	function rebind(dependencies?: any) {
		if (element && component) {
			unbind()
			bind()
		}
	}
	function register(id: string) {
		items = [...items, id]
	}

	function to(id: string) {
		const index = items.findIndex((item) => item === id)
		activeIndex = index
		component?.to(index)
	}
	function unregister(id: string) {
		const itemIndex = items.findIndex((item) => item === id)
		items.splice(itemIndex, 1)

		items = items
		if (itemIndex < activeIndex) {
			activeIndex = Math.max(0, activeIndex - 1)
		}
		if (activeIndex >= items.length) {
			activeIndex = items.length - 1
		}
	}

	function onSlide(event: any) {
		activeIndex = event.to
	}
	function onSlid() {
		$activeItem = items[activeIndex]
	}

	setContext('CAROUSEL', { register, unregister, activeItem, next, prev, to })

	onMount(bind)
	onDestroy(unbind)

	$: classes = classname(
		'carousel',
		{
			fade: transition === 'fade',
		},
		($$props.class || '') + transition ? ' slide' : ''
	)

	$: rebind({ interval, transition, items, indicators, buttons })
</script>

{#if condition($$props)}
	<div bind:this={element} use:forwardEvents {...$$restProps} class={classes}>
		{#if buttons}
			<CarouselButton direction="prev" />
			<CarouselButton direction="next" />
		{/if}
		{#if indicators}
			<CarouselIndicators>
				{#each items as item (item)}
					<CarouselIndicator {item} />
				{/each}
			</CarouselIndicators>
		{/if}
		<div class={classname('carousel-body')}>
			<slot />
		</div>
	</div>
{/if}
