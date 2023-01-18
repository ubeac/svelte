<script lang="ts">
	import { El, type TableRowProps } from '$lib/components'

	type $$Props = TableRowProps

	export let tag: $$Props['tag'] = 'tr'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-row'

	export let color: $$Props['color'] = undefined
	export let active: $$Props['active'] = undefined

	$: cssProps = {
		color,
		active,
	}
</script>

<El {...$$restProps} {cssProps} {cssPrefix} {tag}>
	<slot />
</El>
