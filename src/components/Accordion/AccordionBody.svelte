<script lang="ts">
	import { getContext } from 'svelte/internal'

	import { classname } from '$lib/utils'

	const accordion = getContext<any>('ACCORDION')

	$: classes = classname('accordion-body', { open: $accordion.open }, $$props.class)
</script>

{#if $accordion}
	<div {...$$restProps} class={classes}>
		<slot />
	</div>
{:else}
	<div>Cannot use AccordionBody outside of Accordion</div>
{/if}
