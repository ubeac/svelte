<script lang="ts">
	import { createEventDispatcher, get_current_component, setContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	export let schema: Record<string, any> = {}

	function register(name: string, element: any) {
		context[name] = element
	}

	function unregister(name: string) {
		context[name] = null
		delete context[name]
	}

	let context: Record<string, any> = {}
	const component = get_current_component()
	const dispatch = createEventDispatcher()

	setContext('FORM', {
		register,
		unregister,
	})

	export async function validate() {
		const values: any = {}
		let isValid = true
		for (let key in context) {
			const input = context[key]

			values[key] = await input.validate(schema[key])
			if (typeof values[key] === 'undefined') {
				isValid = false
			}
		}
		return { values, isValid }
	}

	function onSubmit() {
		dispatch('submitted', component)
	}

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form', undefined, $$props.class)
</script>

{#if condition($$props)}
	<form use:forwardEvents on:submit|preventDefault={onSubmit} {...$$restProps} class={classes}>
		<slot />
	</form>
{/if}
