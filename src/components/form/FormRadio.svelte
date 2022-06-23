<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Label, Radio, Spinner } from '$lib/components'
	import { classname, condition } from '$lib/utils'

	/**
	 * Set id of radio element
	 */
	export let id: string = nanoid(10)

	/**
	 * Aligns multiple elements in same line
	 */
	export let inline: boolean = false

	/**
	 * Set label for radio element
	 */
	export let label: string | undefined = undefined

	/**
	 * TODO
	 */
	export let required: boolean = false

	/**
	 * Set checked state of radio element
	 */
	export let value: any = undefined

	$: classes = classname('form-radio', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<FormGroup col={inline ? 'auto' : '12'}>
		<label for={id} {required} class={classes}>
			<Radio {id} {required} bind:value {...$$restProps} />
			{#if label}
				<span>{label}</span>
			{/if}
		</label>
	</FormGroup>
{/if}
