<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'

	import { nanoid } from 'nanoid'

	import { classname } from '$lib/utils'

	/**
	 * Id of Tab Pane
	 */
	export let id = 'tab-' + nanoid()

	/**
	 * Name or title of Tab
	 */
	export let name: string | undefined = undefined

	/**
	 * Sets Icon of Tab
	 */
	export let icon: string | undefined = undefined

	/**
	 * Disable this tab
	 */
	export let disabled: boolean = false

	let active = false

	const { register, unregister, fade } = getContext('TABS')

	onMount(() => {
		;({ active } = register(id, name, icon, disabled))
	})

	onDestroy(() => {
		unregister(id)
	})

	$: classes = classname('tab', { class: $$props.class, fade })
</script>

<div {id} {...$$restProps} class={classes}>
	<slot />
</div>
