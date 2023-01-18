<script lang="ts">
	import { type BreadcrumbProps, El } from '$lib/index.js'

	type $$Props = BreadcrumbProps

	export let cssPrefix: $$Props['cssPrefix'] = 'breadcrumb'
	export let tag: $$Props['tag'] = 'ol'

	export let separator: $$Props['separator'] = undefined

	$: cssProps = {
		separator,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El tag="nav" aria-label="breadcrumb">
	<El {...$$restProps} {cssProps} {...otherProps}>
		<slot />
	</El>
</El>
