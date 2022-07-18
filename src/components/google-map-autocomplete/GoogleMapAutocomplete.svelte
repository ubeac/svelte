<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { Loader } from '@googlemaps/js-api-loader'

	import { browser } from '$app/env'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * ApiKey for Google Maps api
	 */
	export let apiKey: string | undefined = undefined

	/**
	 * Title of the place that you want to search
	 */
	export let title: string | undefined = undefined

	/**
	 * Information about selected place
	 */

	export let value: google.maps.places.PlaceResult & { title: string | undefined; parsed?: object } = {
		title,
	}

	let autocomplete: google.maps.places.Autocomplete
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

	async function init() {
		if (!browser) return

		let google = window.google
		if (!google) {
			if (apiKey) {
				const loader = new Loader({ apiKey })
				google = await loader.load()
			}
		}
		if (!google) return

		autocomplete = new google.maps.places.Autocomplete(element)

		autocomplete.addListener('place_changed', change)
	}

	onMount(init)

	onDestroy(() => {
		autocomplete?.unbindAll()
	})

	$: if (apiKey) init()
	$: classes = classname('google-map-autocomplete', { hide: !autocomplete }, $$props.class)
</script>

{#if !autocomplete}
	<div {...$$restProps} class={classname('google-map-error')}>
		Cannot use GoogleAutoComplete without loading it's map script
		<br />
		You should add the script tag for google map in head section of your html
	</div>
{/if}
<input bind:this={element} use:forwardEvents bind:value={title} {...$$restProps} class={classes} />
