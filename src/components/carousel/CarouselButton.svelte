<script lang="ts">
	import { getContext } from 'svelte'

	import { classname, condition } from '$lib/utils'

	/**
	 * Set button's direction
	 */
	export let direction: 'prev' | 'next' | undefined = undefined

	const { prev, next } = getContext<any>('CAROUSEL')

	$: action = direction === 'prev' ? prev : next
	$: text = direction === 'prev' ? 'Previous' : 'Next'
	$: classes = classname('carousel-button', { direction }, $$props.class)
</script>

{#if condition($$props) && direction}
	<button on:click={action} {...$$restProps} class={classes}>
		<span class={classname(`carousel-button-icon`, { direction })} aria-hidden="true" />
		<span class={classname('carousel-button-text')}>{text}</span>
	</button>
{/if}
