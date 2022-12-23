<script>
	import { Doc, Preview } from '$lib/components'
	import RangeSliderDefault from './RangeSliderDefault.svelte'
	import RangeSliderColors from './RangeSliderColors.svelte'
</script>

<h1>Range Slider</h1>
<p>
	The base component that is used for Range Slider is <a
		href="https://refreshless.com/nouislider/"
		target="_blank"
		rel="noreferrer">noUiSlider</a> you can read about options and details in the documentaion website.
</p>

<Doc title="Defaults" />
<Preview src="./RangeSliderDefault.svelte">
	<RangeSliderDefault />
</Preview>

<Doc title="Colors">You can set <code>color</code> property to set the range slider color.</Doc>
<Preview src="./RangeSliderColors.svelte">
	<RangeSliderColors />
</Preview>
