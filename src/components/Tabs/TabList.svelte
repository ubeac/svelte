<script lang="ts">
	import { El, type TabListProps } from '$lib/components'

	type $$Props = TabListProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-list'
	export let tag: $$Props['tag'] = 'ul'
	export let pills: $$Props['pills'] = undefined
	export let grow: $$Props['grow'] = undefined

	$: cssProps = {
		pills,
		tabs: !pills,
		grow,
	}
	$: props = {
		cssPrefix,
		tag,
		role: 'tablist',
	}
</script>

<El {...$$restProps} {...props} {cssPrefix} {cssProps}>
	<slot />
</El>
