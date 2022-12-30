<script lang="ts">
	import { El, type TabContentProps } from '$lib/components'

	type $$Props = TabContentProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-content'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
