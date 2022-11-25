<script lang="ts">
	import { Col, Row } from '$lib/components/Grid'
	import { classname } from '$lib/utils'

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	/**
	 * Specify a title for page header.
	 */
	export let title: string | undefined = undefined

	$: classes = classname('page-header', {}, $$props.class, true)
</script>

<svelte:element this={tag} {...$$restProps} class={classes}>
	<slot>
		<Row justify="between">
			<Col>
				<div class={classname('page--header-title')}>
					<slot name="title">
						{title}
					</slot>
				</div>
			</Col>
			<Col auto>
				<div class={classname('page--header-actions')}>
					<slot name="actions" />
				</div>
			</Col>
		</Row>
	</slot>
</svelte:element>
