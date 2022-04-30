<script lang="ts">
	import clsx from 'clsx'

	import { El } from '../el'

	/**
	 * TODO
	 */
	let klass: string | undefined = undefined
	export { klass as class }

	$: classes = clsx('u-button-group', klass)
</script>

<El tag="div" class={classes} {...$$restProps}>
	<slot />
</El>
