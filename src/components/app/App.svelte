<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import type { AppBodies, AppFooters, AppHeaders, AppStickies } from './app.types'

	/**
	 * TODO
	 */
	export let body: AppBodies = 'stretch'

	/**
	 * TODO
	 */
	export let footer: AppFooters = 'grow'

	/**
	 * TODO
	 */
	export let header: AppHeaders = 'grow'

	/**
	 * TODO
	 */
	export let sticky: AppStickies = []

	$: areas = (() => {
		;[body, footer, header]
		return [
			"'",
			area('header', 'start'),
			' header ',
			area('header', 'end'),
			"' '",
			$$slots['aside-start'] ? 'aside-start' : 'body',
			' body ',
			$$slots['aside-end'] ? 'aside-end' : 'body',
			"' '",
			area('footer', 'start'),
			' footer ',
			area('footer', 'end'),
			"'",
		].join('')
	})()

	function area(key: string, position: string) {
		const hasSlot = ($$slots as any)[`${key}-${position}`]

		const hasAsideSlot = ($$slots as any)[`aside-${position}`]

		if (!hasSlot && !hasAsideSlot) return key

		if (hasSlot) return `${key}-${position}`

		const isStart = position === 'start'

		const value = key == 'header' ? header : footer

		const matcher = ['center', isStart ? 'end' : 'start']

		if (!matcher.includes(value)) return key

		const direction = isStart ? 'start' : 'end'

		return `aside-${direction}`
	}

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'app',
		sticky?.map((x) => `sticky-${x}`),
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<div class={classname('app-wrapper')} style={`grid-template-areas: ${areas}`}>
			{#if $$slots['header-start']}
				<div class={classname('app-header-start')}>
					<slot name="header-start" />
				</div>
			{/if}
			{#if $$slots['header']}
				<div class={classname('app-header')}>
					<slot name="header" />
				</div>
			{/if}
			{#if $$slots['header-end']}
				<div class={classname('app-header-end')}>
					<slot name="header-end" />
				</div>
			{/if}
			{#if $$slots['aside-start']}
				<div class={classname('app-aside-start')}>
					<slot name="aside-start" />
				</div>
			{/if}
			<div class={classname('app-body', { body })}>
				<slot />
			</div>
			{#if $$slots['aside-end']}
				<div class={classname('app-aside-end')}>
					<slot name="aside-end" />
				</div>
			{/if}
			{#if $$slots['footer-start']}
				<div class={classname('app-footer-start')}>
					<slot name="footer-start" />
				</div>
			{/if}
			{#if $$slots['footer']}
				<div class={classname('app-footer')}>
					<slot name="footer" />
				</div>
			{/if}
			{#if $$slots['footer-end']}
				<div class={classname('app-footer-end')}>
					<slot name="footer-end" />
				</div>
			{/if}
		</div>
	</div>
{/if}
