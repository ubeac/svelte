<script lang="ts">
    import {get_current_component} from 'svelte/internal'
	import { onDestroy, onMount } from 'svelte'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'
    import type { Coordinate } from '$lib/types'


    // TODO: Events (click, change_center, change_zoom, ...) 

	/**
	 * TODO
	 */
	export let center: Coordinate = {
		latitude: 0,
		longitude: 0,
	}

	/**
	 * TODO
	 */
	export let connect: boolean = false

	/**
	 * TODO
	 */
	export let draggable: boolean = false

	/**
	 * Height of map box
	 * TODO: support string and number
	 */
	export let height: 'sm' | 'md' | 'lg' = 'md'

	/**
	 * TODO
	 */
	// export let multiple = false

	/**
	 * TODO
	 */
	export let readonly: boolean = false
	/**
	 * TODO
	 */
	export let value: Coordinate | Coordinate[] = {
		latitude: 0,
		longitude: 0,
	}

	/**
	 * TODO
	 */
	export let zoom: number = 8

    const forwardEvents = forwardEventsBuilder(get_current_component())

	let element: HTMLDivElement
    let map : any = null;
	let values: Coordinate[] = []
    let polygon: any;

	$: update('center', center)
	$: update('value', value)
	$: update('zoom', zoom)

	function fromModel(input) {
		return {
			lat: input.latitude,
			lng: input.longitude,
		}
	}

	function toModel(input) {
		return {
			latitude: input.lat,
			longitude: input.lng,
		}
	}

	function init() {
		map = new window['google'].maps.Map(element, {
			center: fromModel(center),
			zoom,
		})

		polygon = new window['google'].maps.Polygon({
			map,
			fillOpacity: 0,
			strokeColor: 'rgb(10, 123, 189)',
			strokeWeight: 3,
		})
		map.addListener('click', onClick)
		map.addListener('center_changed', onCenterChanged)
		map.addListener('zoom_changed', onZoomChanged)
	}

	function destroy() {
		map?.unbindAll()
	}

	function addMarker(position) {
		const marker = new window['google'].maps.Marker({
			map,
			draggable,
			position,
			icon: !connect
				? undefined
				: {
						url: 'https://cdn.tourradar.com/images/responsive/tour/destination-map-new.svg',
						anchor: new window['google'].maps.Point(10.34 / 2, 10.34 / 2),
				  },
		})
		if (connect) polygon.getPath().push(marker.position)
		return marker
	}

	function removeMarker(marker) {
		marker?.setMap(null)
	}

	function update(key, input) {
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
				values.forEach(removeMarker)
				values = [input].flat().map(fromModel).map(addMarker)
				break
			}
			case 'zoom': {
				if (input === map.getZoom()) break
				map.setZoom(input)
				break
			}
		}
	}

	function onClick(event) {
		if (readonly) return
		const marker = addMarker(event.latLng)
		const model = toModel(marker.position.toJSON())
		// TODO: enable multiple values
		// if (multiple) {
		// 	// value = value || []
		// 	// value.push(model)
		// } else {
		value = model
		values.forEach(removeMarker)
		// }
		values.push(marker)
	}

	function onCenterChanged() {
		center = toModel(map.getCenter().toJSON())
	}

	function onZoomChanged() {
		zoom = map.getZoom()
	}

	onMount(init)

	onDestroy(destroy)

    $: classes = classname('google-map', {height}, $$props.class)
</script>

<div bind:this={element} use:forwardEvents {...$$restProps} {...$$restProps} class={classes}>
    <slot>
        <div class={classname('google-map-error')}>
            Cannot show GoogleMap Component without loading it's script
            <br />
            You should add the script tag for google map in head section of your html
        </div>
    </slot>
</div>
