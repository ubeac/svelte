<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	function click() {
		dispatch('close')
	}
</script>

<button type="button" on:click={click} class="btn-close" aria-label="close" />
