<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Input, Label, Spinner } from '@app/components'
	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

	/**
	 * TODO
	 */
	export let icon: string | undefined = undefined

	/**
	 * TODO
	 */
	export let id: string = nanoid(10)

	/**
	 * TODO
	 */
	export let label: string | undefined = undefined

	/**
	 * TODO
	 */
	export let loading: boolean = false

	/**
	 * TODO
	 */
	export let required: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew('form-input', null, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents class={classes}>
		{#if label}
			<Label for={id} {required}>{label}</Label>
		{/if}
		<FormGroup>
			{#if icon}
				<div class={classnameNew('input-icon')}>
					<Icon name={icon} />
				</div>
			{/if}
			<Input {id} {required} {...$$restProps} />
			{#if loading}
				<div class={classnameNew('input-icon')}>
					<Spinner />
				</div>
			{/if}
		</FormGroup>
	</div>
{/if}
