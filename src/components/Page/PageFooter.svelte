<script lang="ts">
	import { Col, El } from '$lib/components'
	import { classname } from '$lib/utils'

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	$: classes = classname('page-footer', {}, $$props.class, true)
</script>

<svelte:element this={tag} {...$$restProps} class={classes}>
	<slot>
		<El row justify="end">
			<Col>
				<div class={classname('page--footer-actions')}>
					<slot name="actions" />
				</div>
			</Col>
		</El>
	</slot>
</svelte:element>
