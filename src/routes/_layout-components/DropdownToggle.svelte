<script>
	import { getContext } from 'svelte'

	export let nav = getContext('NAV') ?? false

	export let autoClose = false
	export let id = getContext('DROPDOWN:ID') ?? '/'
</script>

<a href="#{id}" data-bs-toggle="dropdown" data-bs-auto-close={autoClose} class="dropdown-toggle" class:nav-link={nav}>
	<slot />
</a>
