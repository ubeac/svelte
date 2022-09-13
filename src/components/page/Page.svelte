<script lang="ts">
	import { classname } from '$lib/utils'

	import { PageFooter, PageHeader } from '.'

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	/**
	 * Specify a title for page header.
	 */
	export let title: string | undefined = undefined

	$: classes = classname('page', {}, $$props.class, true)
</script>

<svelte:element this={tag} {...$$restProps} class={classes}>
	<slot name="header">
		<PageHeader {title}>
			<svelte:fragment slot="title">
				<slot name="headerTitle">{title}</slot>
			</svelte:fragment>
			<svelte:fragment slot="actions">
				<slot name="headerActions" />
			</svelte:fragment>
		</PageHeader>
	</slot>
	<slot />
	<slot name="footer">
		<PageFooter>
			<svelte:fragment slot="actions">
				<slot name="footerActions" />
			</svelte:fragment>
		</PageFooter>
	</slot>
</svelte:element>
