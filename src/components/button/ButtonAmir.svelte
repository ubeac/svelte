<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { createEventForwarder } from './eventForwarder'

	const forwardEvents = createEventForwarder(get_current_component())
</script>

<button use:forwardEvents>
	<slot />
</button>
