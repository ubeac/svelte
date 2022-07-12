<script>
	import { Button, Carousel, CarouselItem } from '$lib/components'
	let items = [1, 2, 3, 4, 5, 6, 7]

	// TODO: sometimes add more doesn't work (breaks carousel because of duplicate active item)
	function addMore() {
		items = [...items, 5, 6, 7]
	}

	function removeFromStart() {
		items.shift()
		items = items
	}

	function removeFromEnd() {
		items.pop()
		items = items
	}

	function reset() {
		items = [1, 2, 3, 4]
	}
</script>

<Button on:click={addMore}>Add More</Button>
<Button on:click={removeFromStart}>Remove From Start</Button>
<Button on:click={removeFromEnd}>Remove From End</Button>
<Button on:click={reset}>Reset</Button>

<Carousel indicators buttons interval={1000}>
	{#each items as item (item)}
		<CarouselItem>
			<img src="/images/{item}.jpeg" alt={item} />
		</CarouselItem>
	{/each}
</Carousel>
