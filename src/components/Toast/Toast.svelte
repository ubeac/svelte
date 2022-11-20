<script lang="ts">
	import { classname } from '$lib/utils'

	export let show: boolean = false

	$: classes = classname('toast', { show }, $$props.class, true)
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
