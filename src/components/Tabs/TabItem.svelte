<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'

	import { El, type TabItemProps } from '$lib/components'

	type $$Props = TabItemProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-item'
	export let tag: $$Props['tag'] = 'li'

	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined

	const { selected, register, unregister } = getContext<any>('TABS')

	let id: string | undefined = undefined

	onMount(() => {
		register(id, active)
	})

	onDestroy(() => {
		unregister(id)
	})

	function onClick() {
		if (disabled) return
		$selected = id
	}

	$: cssProps = {
		active: $selected === id,
		disabled,
	}

	$: linkProps = {
		'aria-current': cssProps.active ? 'page' : null,
		'tabindex': disabled ? '-1' : null,
		'aria-disabled': disabled ? 'true' : null,
	}
</script>

<El {...$$restProps} bind:id {cssPrefix} {tag} on:click={onClick}>
	<El tag="button" cssPrefix="{cssPrefix}-link" {...linkProps} {cssProps}>
		<slot />
	</El>
</El>
