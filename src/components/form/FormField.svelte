<script lang="ts">
	import { classname } from '$lib/utils'

	import { Col } from '../grid'

	/**
	 * Set Column width
	 */
	export let cols: string | number | boolean = false

	let klass = ''
	export { klass as class }

	$: classes = classname('form-field', {}, klass, true)
</script>

<Col {cols} class={classes} {...$$restProps}>
	<slot />
</Col>
