<script lang="ts">
	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Label, Spinner, Textarea } from '$lib/components'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let icon: string | undefined = undefined

	/**
	 * TODO
	 */
	export let id: string | undefined = nanoid(10)

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

	/**
	 * TODO
	 */
	export let value: any = undefined

	$: classes = classname('form-textarea', null, $$props.class)
</script>

{#if condition($$props)}
	<FormGroup class={classes}>
		<svelte:fragment slot="label">
			{#if label}
				<Label for={id} {required}>{label}</Label>
			{/if}
		</svelte:fragment>
		<svelte:fragment slot="inner:start">
			{#if icon}
				<Icon name={icon} />
			{/if}
			<slot name="inner:start" />
		</svelte:fragment>
		<Textarea bind:value {id} {...$$restProps} />
		<svelte:fragment slot="inner:end">
			{#if loading}
				<Spinner />
			{/if}
			<slot name="inner:end" />
		</svelte:fragment>
	</FormGroup>
{/if}
