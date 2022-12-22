<script>
	import { RangeSlider, El } from '@ubeac/svelte'
</script>

<RangeSlider range={{ min: 0, max: 100 }} step="10" startValue="40" tooltips />

<RangeSlider range={{ min: 0, max: 100 }} step="10" startValue={[20, 60]} tooltips />
