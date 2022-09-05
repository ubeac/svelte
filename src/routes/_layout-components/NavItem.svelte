<script>
	import { setContext } from 'svelte'
	import NavLink from './NavLink.svelte'

	export let href = '/'

	export let icon = ""

	setContext('NAVITEM', true)
</script>

<li class="nav-item">
	{#if href}
		<NavLink {icon} {href}>

			
			<slot />
		</NavLink>
	{:else}
		<slot />
	{/if}

	{#if $$slots['menu']}
		<slot name="menu" />
	{/if}
</li>

<style lang="scss" global>
</style>
