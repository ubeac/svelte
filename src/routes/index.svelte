<script lang="ts">
	import { Button, Carousel, CarouselItem } from '$lib/components'
	import { Confirm } from '$lib/components'

	let confirm1: any
	let confirm2: any
	let confirm3: any
	let confirm4: any
	let confirm5: any

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

<br />
<button on:click={() => (confirm1.open = !confirm1.open)}> toggle </button>
<Confirm title="The Internet?" description="That thing is still around?" type="error" bind:this={confirm1}>
	<Button on:click={() => (confirm1.open = false)}>OK</Button>
	<Button on:click={() => (confirm1.open = false)}>CANCEL</Button>
</Confirm>

<br />
<button on:click={() => (confirm2.open = !confirm2.open)}> toggle </button>
<Confirm title="Title" type="info" bind:this={confirm2} />

<br />
<button on:click={() => (confirm3.open = !confirm3.open)}> toggle </button>
<Confirm title="Title" type="question" bind:this={confirm3} />

<br />
<button on:click={() => (confirm4.open = !confirm4.open)}> toggle </button>
<Confirm title="Title" type="success" bind:this={confirm4} />

<br />
<button on:click={() => (confirm5.open = !confirm5.open)}> toggle </button>
<Confirm title="Title" type="warning" bind:this={confirm5} />
