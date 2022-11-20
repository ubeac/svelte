<script lang="ts">
	import { classname } from '$lib/utils'

	$: classes = classname('page-body', {}, $$props.class, true)
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
