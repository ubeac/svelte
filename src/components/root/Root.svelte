<script lang="ts">
	import { forwardEventsBuilder } from '@app/directives'
	import { classname } from '@app/utils'

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
	export let classesName: Array<string> = []

	/**
	 * TODO
	 */
	export let component: any = undefined

	/**
	 * TODO
	 */
	export let componentName: string | undefined = undefined

	/**
	 * TODO
	 */
	export let tag: string | undefined = undefined

	const forwardEvents = forwardEventsBuilder(component)

	$: classnames = classname(
		componentName,
		classesName.reduce((result, current) => ({ ...result, [current]: $$props[current] }), {}),
		classes,
		klass
	)
</script>

{#if tag}
	<!-- prettier-ignore -->
	<svelte:element  class={classnames} this={tag} use:forwardEvents {...$$restProps}>
		<slot />
	</svelte:element>
{:else}
	<slot />
{/if}
