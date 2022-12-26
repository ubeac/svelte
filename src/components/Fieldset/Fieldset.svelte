<script lang="ts">
	import { El, type FieldsetProps } from '$lib/components/index.js'

	type $$Props = FieldsetProps

	/**
	 * Set Css Prefix for the Fieldset
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'fieldset'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
