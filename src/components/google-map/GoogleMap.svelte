<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { Loader } from '@googlemaps/js-api-loader'

	import { browser } from '$app/env'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { GoogleMapCoordinate } from '$lib/types'
	import { classname } from '$lib/utils'

	export let apiKey: string | undefined = undefined

	/**
	 * Focused Coordinate in map
	 */
	export let center: GoogleMapCoordinate = {
		latitude: 0,
		longitude: 0,
	}

	/**
	 * Connects selected positions with a line
	 */
	export let connect: boolean = false

	/**
	 * Enable Moving Marker's Position
	 */
	export let draggable: boolean = false

	/**
	 * Height of map container
	 */
	export let height: 'sm' | 'md' | 'lg' = 'md'

	/**
	 * Set multiple Markers in map
	 */
	export let multiple: boolean = false

	/**
	 * Disables location updates
	 */
	export let readonly: boolean = false

	/**
	 * Position of Marker(s) in map
	 */
	export let value: GoogleMapCoordinate | GoogleMapCoordinate[] | undefined = undefined

	/**
	 * Set zoom level of map 
	 */
	export let zoom: number = 8

	const dispatch = createEventDispatcher()

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let element: HTMLDivElement
	let map: any = null
	let markers: any[] = []
	let polygon: any

	$: classes = classname('google-map', { height }, $$props.class)

	$: update('center', center)
	$: update('value', value)
	$: update('zoom', zoom)

	$: if (apiKey) init()

	function addMarker(position: any) {
		const icon = {
			url: 'https://cdn.tourradar.com/images/responsive/tour/destination-map-new.svg',
			anchor: new google.maps.Point(10.34 / 2, 10.34 / 2),
		}

		const marker = new google.maps.Marker({
			map,
			draggable,
			position,
			icon: !connect ? undefined : icon,
		})

		if (connect) polygon.getPath().push(marker.position)

		if (draggable) marker.addListener('dragend', onDragEnd)

		return marker
	}

	function destroy() {
		map?.unbindAll()
	}

	function fromModel(input: GoogleMapCoordinate) {
		return {
			lat: input.latitude,
			lng: input.longitude,
		}
	}

	async function init() {
		if (!browser) return

		let google = window.google
		if (!google && apiKey) {
			const loader = new Loader({
				apiKey,
			})

			google = await loader.load()
		}
		if (!google) return

		map = new google.maps.Map(element, {
			center: fromModel(center),
			zoom,
		})

		polygon = new google.maps.Polygon({
			map,
			fillOpacity: 0,
			strokeColor: 'rgb(10, 123, 189)',
			strokeWeight: 3,
		})

		map.addListener('click', onClick)
		map.addListener('center_changed', onCenterChanged)
		map.addListener('zoom_changed', onZoomChanged)
	}

	function removeMarker(marker: any) {
		marker.setMap(null)
	}

	function toModel(input: any) {
		return {
			latitude: input.lat,
			longitude: input.lng,
		}
	}

	function update(key: any, input: any) {
		if (!map) return
		switch (key) {
			case 'center': {
				if (!input || !input.latitude || !input.longitude) break
				const before = map.getCenter().toJSON()
				if (input.latitude === before.lat && input.longitude === before.lng) break
				const next = fromModel(input)
				map.setCenter(next)
				break
			}
			case 'value': {
				if (!input) break
				markers.forEach(removeMarker)
				polygon.getPath().clear()
				markers = [input].flat().map(fromModel).map(addMarker)
				break
			}
			case 'zoom': {
				if (input === map.getZoom()) break
				map.setZoom(input)
				break
			}
		}
		dispatch('changed', { center, zoom, value })
	}

	function onClick(event: any) {
		if (readonly) return
		const model = toModel(event.latLng.toJSON())
		if (multiple) {
			if (!Array.isArray(value)) value = []
			value = [...value, model]
		} else {
			value = model
		}
	}

	function onCenterChanged() {
		center = toModel(map.getCenter().toJSON())
	}

	function onDragEnd(event: any) {
		const model = toModel(event.latLng.toJSON())
		if (multiple) {
			const index = markers.findIndex((value) => value == this)
			;(value as any).splice(index, 1, model)
			value = value
		} else {
			value = model
		}
	}

	function onZoomChanged() {
		zoom = map.getZoom()
	}

	onMount(init)

	onDestroy(destroy)
</script>

<div bind:this={element} use:forwardEvents {...$$restProps} class={classes}>
	<div class={classname('google-map-error')}>
		<p>Cannot show GoogleMap Component without loading its script</p>
		<small> You should add the script tag for google map in head section of your html </small>
		<br />
		<small>or you can pass an apiKey prop for This component</small>
	</div>
</div>
