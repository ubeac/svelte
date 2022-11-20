<script lang="ts">
	import { classname } from '$lib/utils'

	$: classes = classname('toast-container', undefined, $$props.class, true)
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
