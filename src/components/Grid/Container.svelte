<script lang="ts">
	import { El } from '$lib/components'

	export let fluid: undefined | boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' = undefined

	let cssProps = { fluid: fluid ?? 'none' }
</script>

<El {...$$restProps} {cssProps} cssPrefix="container">
	<slot />
</El>
