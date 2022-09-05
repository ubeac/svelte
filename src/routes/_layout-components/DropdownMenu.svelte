<script>
	import { getContext } from 'svelte'

	export let id = getContext('DROPDOWN:ID') ?? ''
</script>

<div class="dropdown-menu" {id}>
	<slot />
</div>
