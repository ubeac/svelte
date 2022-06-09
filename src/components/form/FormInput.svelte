<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Input, Label, Root, Spinner } from '@app/components'
	import { classname } from '@app/utils'

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
</script>

<Root element="div" component={get_current_component()} componentName="FormInput">
	{#if label}
		<Label for={id}>{label}</Label>
	{/if}
	<FormGroup>
		{#if icon}
			<div class={classname('input-icon')}>
				<Icon name={icon} />
			</div>
		{/if}
		<Input {id} {...$$restProps} />
		{#if loading}
			<div class={classname('input-icon')}>
				<Spinner />
			</div>
		{/if}
	</FormGroup>
</Root>
