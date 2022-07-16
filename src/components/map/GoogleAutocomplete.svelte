<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * TODO
	 */
	export let title = ''

	/**
	 * TODO
	 */
	export let value = {
		title,
	}

	let autocomplete: any
	let element: HTMLInputElement

	const forwardEvents = forwardEventsBuilder(get_current_component())
	const dispatch = createEventDispatcher()

	$: element && (element.value = value.title || '')

	const change = () => {
		const place = autocomplete.getPlace()
		try {
			let address = '',
				postcode = '',
				locality,
				state,
				country
			for (const component of place.address_components) {
				switch (component.types[0]) {
					case 'street_number':
						address = `${component.long_name} ${address}`
						break
					case 'route':
						address += component.short_name
						break
					case 'postal_code':
						postcode = `${component.long_name}${postcode}`
						break
					case 'postal_code_suffix':
						postcode = `${postcode}-${component.long_name}`
						break
					case 'locality':
						locality = component.long_name
						break
					case 'administrative_area_level_1':
						state = component.short_name
						break
					case 'country':
						country = component.long_name
						break
				}
			}
			value = {
				title: element.value,
				parsed: {
					address,
					postcode,
					locality,
					state,
					country,
				},
				...place,
			}
		} catch {
			value = {
				title: place.name,
			}
		}
		dispatch('changed', value)
	}

	onMount(() => {
		if (!window['google']?.maps) {
			console.log('window.google not found!, please add script of Google map in head section of your html file')
			return
		}
		autocomplete = new window['google'].maps.places.Autocomplete(element)

		autocomplete?.addListener('place_changed', change)
	})

	onDestroy(() => {
		autocomplete?.unbindAll()
	})

	$: classes = classname('google-autocomplete', { hide: !autocomplete }, $$props.class)
</script>

{#if !autocomplete}
	<div {...$$restProps} class={classname('google-map-error')}>
		Cannot use GoogleAutoComplete without loading it's map script
		<br />
		You should add the script tag for google map in head section of your html
	</div>
{/if}
<input bind:this={element} use:forwardEvents bind:value={title} {...$$restProps} class={classes} />
