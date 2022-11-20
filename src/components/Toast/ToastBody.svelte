<script>
	import { classname } from '$lib/utils'

	$: classes = classname('toast-body', undefined, $$props.class, true)
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
