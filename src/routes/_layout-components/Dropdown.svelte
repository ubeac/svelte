<script>
	import { nanoid } from 'nanoid'

	import { getContext, setContext } from 'svelte'

	export let nav = getContext('nav') ?? false

	setContext('DROPDOWN:ID', 'dropdown-' + nanoid(5))
</script>

<div class="dropdown" class:nav-item={nav}>
	<slot />
</div>
