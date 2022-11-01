<script lang="ts">
	import { classname } from '$lib/utils'

	/**
	 * Specify a title for page header.
	 */
	export let title: string | undefined = undefined

	$: classes = classname('page', {}, $$props.class, true)
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
