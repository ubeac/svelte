<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { FormCheckbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'

	const forwardEvents = forwardEventsBuilder(get_current_component())
</script>

<FormCheckbox {forwardEvents} />
