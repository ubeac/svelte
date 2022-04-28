<script lang="ts">
	/**
	 * TODO
	 */
	export let accordion: boolean = false;

	/**
	 * TODO
	 */
	export let navbar: boolean = false;

	/**
	 * TODO
	 */
	export let id: string;

	/**
	 * TODO
	 */
	export let collapsed: boolean = false;
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
	aria-controls="#collapse-{id}"
>
	<slot />
</button>
