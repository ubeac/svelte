<script lang="ts">
	import { type DropdownColumnProps, El } from '$lib/components'

	type $$Props = DropdownColumnProps

	/**
	 * Set Css Prefix for the Dropdown items
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-column'

	let otherProps: any = {}
	$: {
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
