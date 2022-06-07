<script lang="ts">
	import type { SvelteComponent } from 'svelte'

	import { forwardEventsBuilder } from '@app/directives'
	import { classname, condition } from '@app/utils'

	/**
	 * TODO
	 */
	let klass: string | undefined = undefined
	export { klass as class }

	/**
	 * TODO
	 */
	export let classes: Object | undefined = undefined

	/**
	 * TODO
	 */
	export let component: SvelteComponent

	/**
	 * TODO
	 */
	export let componentName: string | undefined = undefined

	/**
	 * TODO
	 */
	export let element: any = undefined

	/**
	 * TODO
	 */
	export let ref: SvelteComponent | HTMLElement | undefined = undefined

	const forwardEvents = forwardEventsBuilder(component)

	$: classnames = classname([{ [`$${componentName}`]: !!componentName }, classes, klass], { root: componentName })
</script>

{#if condition($$props)}
	{#if element}
		{#if typeof element == 'string'}
			<svelte:element this={element} bind:this={ref} class={classnames} use:forwardEvents {...$$restProps}>
				<slot />
			</svelte:element>
		{:else}
			<svelte:component this={element} bind:this={ref} class={classnames} {...$$restProps}>
				<slot />
			</svelte:component>
		{/if}
	{:else}
		<!-- TODO: '<slot> cannot have directives' bind:this={el} -->
		<slot />
	{/if}
{/if}
