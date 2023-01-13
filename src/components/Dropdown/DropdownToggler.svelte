<script lang="ts">
	import { getContext, onMount } from 'svelte'

	import { type DropdownContext, type DropdownTogglerProps, El } from '$lib/components'

	type $$Props = DropdownTogglerProps

	/**
	 * Set Css Prefix for the Dropdown button
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-toggler'

	let element: HTMLElement

	const ctx = getContext<DropdownContext>('DROPDOWN')

	const toggle = () => {
		$ctx.show = !$ctx.show
	}

	let otherProps: any = {}
	$: {
		otherProps = {
			cssPrefix,
		}
	}

	onMount(() => {
		if (element) {
			let margin = element?.offsetHeight
			$ctx.margin = margin
			console.log($$slots.default)
		}
	})
</script>

<El {...$$restProps} {...otherProps} aria-expanded={$ctx.show} on:click={toggle} bind:element>
	<slot />
</El>
