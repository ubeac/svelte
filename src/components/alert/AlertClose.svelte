<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	function click() {
		dispatch('close')
	}
</script>

<!-- TODO: bootstrap error: Uncaught TypeError: Cannot read properties of null (reading 'defaultPrevented') -->
<button type="button" on:click={click} class="btn-close" data-bs-dismiss="alert" aria-label="close" />
