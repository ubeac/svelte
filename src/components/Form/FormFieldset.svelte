<script lang="ts">
	import { Fieldset, FormField, type FormFieldsetProps } from '$lib'

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
