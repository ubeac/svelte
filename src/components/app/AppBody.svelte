<script lang="ts">
	import { getContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@ubeac/svelte/directives'
	import { classname } from '@ubeac/svelte/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())
	const { headerSize, footerSize, leftSize, rightSize } = getContext<any>('APP')

	$: classes = classname('app-body', {}, $$props.class)
	$: styles = `inset: ${$headerSize}px ${$rightSize}px  ${$footerSize}px ${$leftSize}px;`
</script>

<div use:forwardEvents {...$$restProps} style={styles} class={classes}>
	<slot />
</div>
