<script lang="ts">
	import { BaseHtmlElement } from '$lib/components'

	export let fluid: undefined | boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' = undefined

	let cssProps = { fluid: fluid ?? 'none' }
</script>

<BaseHtmlElement {...$$restProps} {cssProps} cssPrefix="container">
	<slot />
</BaseHtmlElement>
