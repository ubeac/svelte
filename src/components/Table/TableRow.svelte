<script lang="ts">
	import { El } from '$lib/components'

	import type { TableRowProps } from './Table.types'

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
