<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	export let header: 'grow' | 'start' | 'end' | 'center' | 'sticky' = 'grow'
	export let footer: 'grow' | 'start' | 'end' | 'center' | 'sticky' = 'grow'
	export let main: 'stretch' | 'center' = 'stretch'

	$: style = ((header, footer, main) => {
		header
		footer
		main
		return `grid-template-areas: ${[
			"'",
			area('header', 'start'),
			' header ',
			area('header', 'end'),
			"' '",
			slots('aside:start') ? 'aside-start' : 'main',
			' main ',
			slots('aside:end') ? 'aside-end' : 'main',
			"' '",
			area('footer', 'start'),
			' footer ',
			area('footer', 'end'),
			"'",
		].join('')}`
	})(header, footer, main)

	function area(key: string, position: string) {
		const hasSlot = slots(`${key}:${position}`)

		const hasAsideSlot = slots(`aside:${position}`)

		if (!hasSlot && !hasAsideSlot) return key

		if (hasSlot) return `${key}-${position}`

		const isStart = position === 'start'

		const value = key == 'header' ? header : footer

		const matcher = ['center', isStart ? 'end' : 'start']

		if (!matcher.includes(value)) return key

		const direction = isStart ? 'start' : 'end'

		return `aside-${direction}`
	}

	function slots(name: string) {
		return ($$slots as any)[name]
	}

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('layout', {}, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<div class="wrapper" {style}>
			{#if $$slots['header:start']}
				<div class="header-start">
					<slot name="header:start" />
				</div>
			{/if}
			{#if $$slots['header']}
				<div class="header">
					<slot name="header" />
				</div>
			{/if}
			{#if $$slots['header:end']}
				<div class="header-end">
					<slot name="header:end" />
				</div>
			{/if}
			{#if $$slots['aside:start']}
				<div class="aside-start">
					<slot name="aside:start" />
				</div>
			{/if}
			<div class={`main ${main}`}>
				<slot />
			</div>
			{#if $$slots['aside:end']}
				<div class="aside-end">
					<slot name="aside:end" />
				</div>
			{/if}
			{#if $$slots['footer:start']}
				<div class="footer-start">
					<slot name="footer:start" />
				</div>
			{/if}
			{#if $$slots['footer']}
				<div class="footer">
					<slot name="footer" />
				</div>
			{/if}
			{#if $$slots['footer:end']}
				<div class="footer-end">
					<slot name="footer:end" />
				</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss" global>
	.u-layout {
		display: block;
		min-height: 100vh;

		.wrapper {
			display: grid;
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto 1fr auto;
			min-height: inherit;
			gap: 2px;
		}

		.header-start {
			grid-area: header-start;
		}

		.header {
			grid-area: header;
		}

		.header-end {
			grid-area: header-end;
		}

		.aside-start {
			grid-area: aside-start;
		}

		.main {
			grid-area: main;
			&.center {
				align-self: center;
				justify-self: center;
			}
		}

		.aside-end {
			grid-area: aside-end;
		}

		.footer-start {
			grid-area: footer-start;
		}

		.footer {
			grid-area: footer;
		}

		.footer-end {
			grid-area: footer-end;
		}
	}
</style>
