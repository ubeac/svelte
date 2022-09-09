<script>
	import { getContext } from 'svelte'

	import NavLink from './NavLink.svelte'

	export let href = '/'
	export let icon = ''

	export let nav = getContext('NAV') ?? false
</script>

{#if nav}
	<NavLink class="dropdown-item" {icon} {href}>
		<slot />
	</NavLink>
{:else}
	<a {href} class="dropdown-item">
		<slot />
	</a>
{/if}
