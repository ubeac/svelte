<script lang="ts">
	import { classname } from '$lib/utils'

	import { Col } from '../grid'

	/**
	 * Set Column width
	 */
	export let cols: string | number | boolean = false

	$: classes = classname('form-field', {}, $$props.class, true)
</script>

<Col {cols} class={classes} {...$$restProps}>
	<slot />
</Col>
