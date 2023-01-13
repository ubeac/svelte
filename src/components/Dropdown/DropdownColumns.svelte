<script lang="ts">
	import { type DropdownColumnsProps, El } from '$lib/components'

	type $$Props = DropdownColumnsProps

	/**
	 * Set Css Prefix for the Dropdown items
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-columns'

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
