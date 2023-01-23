<script lang="ts">
	import type { FieldsetProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = FieldsetProps

	/**
	 * Set Css Prefix for the Fieldset
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'fieldset'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
