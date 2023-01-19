<script lang="ts">
	import { getContext } from 'svelte'

	import { Button, El, type OffcanvasHeaderProps } from '$lib/index.js'

	type $$Props = OffcanvasHeaderProps

	/**
	 * Set Css Prefix for the OffcanvasHedaer
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'offcanvas-header'

	/**
	 * Set Css Prefix for the Offcanvas
	 */
	export let title: $$Props['title'] = 'offcanvas-header'

	const ctx = getContext('OFFCANVAS')

	const onClick = () => {
		if (ctx && ctx.close) ctx.close()
	}
</script>

<El {cssPrefix}>
	{#if title}
		<El cssPrefix="{cssPrefix}-title">{title}</El>
	{:else}
		<slot />
	{/if}
	<Button cssPrefix="{cssPrefix}-btn" aria-label="Close" on:click={onClick} />
</El>
