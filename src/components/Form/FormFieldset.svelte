<script lang="ts">
	import type { FormFieldsetProps } from '$lib/components'

	import Fieldset from '../Fieldset/Fieldset.svelte'
	import FormField from './FormField.svelte'

	type $$Props = FormFieldsetProps
	export let cssPrefix: $$Props['cssPrefix'] = 'form-fieldset'
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<Fieldset>
		<slot />
	</Fieldset>
	<slot name="hint" />
</FormField>
