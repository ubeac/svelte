<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	export let content: 'stretch' | 'center' = 'stretch'

	export let footer: 'grow' | 'start' | 'end' | 'center' = 'grow'

	export let header: 'grow' | 'start' | 'end' | 'center' = 'grow'

	export let sticky: Array<
		'header-start' | 'header' | 'header-end' | 'aside-start' | 'aside-end' | 'footer-start' | 'footer' | 'footer-end'
	> = []

	$: areas = (() => {
		;[content, footer, header]
		return [
			"'",
			area('header', 'start'),
			' header ',
			area('header', 'end'),
			"' '",
			$$slots['aside-start'] ? 'aside-start' : 'main',
			' main ',
			$$slots['aside-end'] ? 'aside-end' : 'main',
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
		sticky.map((x) => `sticky-${x}`),
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
			<div class={classname('app-main', { content })}>
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

<style lang="scss" global>
	.u-app {
		display: block;
		min-height: 100vh;
	}

	.u-app-wrapper {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
		min-height: inherit;
	}

	.u-app-main-center {
		align-self: center;
		justify-self: center;
	}

	@each $key in header-start, header, header-end, aside-start, main, aside-end, footer-start, footer, footer-end {
		.u-app-#{$key} {
			grid-area: #{$key};
		}
	}

	@each $key in header-start, header, header-end {
		.u-app-sticky-#{$key} .u-app-#{$key} {
			position: sticky;
			top: 0;
			z-index: 1002;
		}
	}

	@each $key in aside-start, aside-end {
		.u-app-sticky-#{$key} .u-app-#{$key} {
			position: sticky;
			top: 0;
			z-index: 1001;
		}
	}

	@each $key in footer-start, footer, footer-end {
		.u-app-sticky-#{$key} .u-app-#{$key} {
			position: sticky;
			bottom: 0;
			z-index: 1000;
		}
	}
</style>
