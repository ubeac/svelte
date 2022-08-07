<script lang="ts">
	import { nanoid } from 'nanoid'

	export let accordion = false
	export let navbar = false
	export let id: string = nanoid()
	export let collapsed = false
</script>

<button
	class:accordion-button={accordion}
	class:navbar-toggler={navbar}
	class:collapsed
	id="collapse-{id}-toggler"
	type="button"
	data-bs-toggle="collapse"
	data-bs-target="#collapse-{id}"
	aria-expanded={!collapsed}
	aria-controls="#collapse-{id}">
	<slot />
</button>
