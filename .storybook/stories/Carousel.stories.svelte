<script>
	import { Carousel, CarouselItem, CAROUSEL_TRANSITIONS } from '$lib/components'
	import { Meta, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta
	title="Containers/Carousel"
	component={Carousel}
	argTypes={{
		transition: {
			controls: {
				type: 'radio',
				options: CAROUSEL_TRANSITIONS,
			},
		},
	}} />

<Story name="Default" let:args>
	<Carousel {...args}>
		<CarouselItem>Item 1</CarouselItem>
		<CarouselItem>Item 2</CarouselItem>
	</Carousel>
</Story>

<Story name="With Images" let:args>
	<Carousel {...args}>
		{#each [1, 2, 3, 4, 5, 6, 7] as index}
			<CarouselItem>
				<img src="/images/{index}.jpeg" alt="img {index}" />
			</CarouselItem>
		{/each}
	</Carousel>
</Story>

<Story name="Buttons" let:args>
	<Carousel buttons {...args}>
		{#each [1, 2, 3, 4, 5, 6, 7] as index}
			<CarouselItem>
				<img src="/images/{index}.jpeg" alt="img {index}" />
			</CarouselItem>
		{/each}
	</Carousel>
</Story>

<Story name="Indicators" let:args>
	<Carousel indicators {...args}>
		{#each [1, 2, 3, 4, 5, 6, 7] as index}
			<CarouselItem>
				<img src="/images/{index}.jpeg" alt="img {index}" />
			</CarouselItem>
		{/each}
	</Carousel>
</Story>

<Story name="Interval" let:args>
	<Carousel interval={1000} {...args}>
		{#each [1, 2, 3, 4, 5, 6, 7] as index}
			<CarouselItem>
				<img src="/images/{index}.jpeg" alt="img {index}" />
			</CarouselItem>
		{/each}
	</Carousel>
</Story>

<Story name="Transition" let:args>
	<Carousel transition="slide" {...args}>
		{#each [1, 2, 3, 4, 5, 6, 7] as index}
			<CarouselItem>
				<img src="/images/{index}.jpeg" alt="img {index}" />
			</CarouselItem>
		{/each}
	</Carousel>
</Story>
