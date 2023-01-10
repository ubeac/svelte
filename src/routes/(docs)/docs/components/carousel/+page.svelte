<script>
	import { Preview } from '$lib/docs-components'
	import CarouselAutoplay from './CarouselAutoplay.svelte'
	import CarouselDefault from './CarouselDefault.svelte'
	import CarouselNavigation from './CarouselNavigation.svelte'
</script>

<h1>Carousel</h1>
<p>
	A carousel is used to display multiple pieces of visual content without taking up too much space. Carousels eliminate
	the need to scroll down the page to see all content and are a popular method of displaying marketing information.We
	use Swiper for implement Carousel component you can see the documentation <a
		href="https://swiperjs.com/svelte"
		target="_blanck">Swiper Svelte</a
	>.
</p>

<h2>Default</h2>
<p>
	Use a carousel to make your website design more visually appealing for users. In the default carousel design,
	respective elements slide automatically and users can go to the next slide by clicking an arrow.
</p>
<Preview src="./CarouselDefault.svelte">
	<CarouselDefault />
</Preview>

<h2>Autoplay</h2>
<p>
	Set the <code>autoplay</code> prop to auto play slide change.
</p>
<Preview src="./CarouselAutoplay.svelte">
	<CarouselAutoplay />
</Preview>

<h2>Navigation</h2>
<p>
	Set the <code>navigation</code> prop to change slide by Next or Previous button.
</p>
<Preview src="./CarouselNavigation.svelte">
	<CarouselNavigation />
</Preview>

<h2>Modules</h2>
<p>Here is the list of additional modules imports:</p>
<ul>
	<li><code>Virtual</code> - Virtual Slides module</li>
	<br />
	<li><code>Keyboard</code> - Keyboard Control module</li>
	<br />
	<li><code>Mousewheel</code> - Mousewheel Control module</li>
	<br />
	<li><code>Navigation </code> - Navigation module</li>
	<br />
	<li><code>Pagination </code> - Pagination module</li>
	<br />
	<li><code>Scrollbar </code> - Scrollbar module</li>
	<br />
	<li><code>Parallax </code> - Parallax module</li>
	<br />
	<li><code>FreeMode </code> - Free Mode module</li>
	<br />
	<li><code>Grid </code> - Grid module</li>
	<br />
	<li><code>Zoom </code> - Zoom module</li>
	<br />
	<li><code>Lazy </code> - Lazy module</li>
	<br />
	<li><code>Controller </code> - Controller module</li>
	<br />
	<li><code>A11y </code> - Accessibility module</li>
	<br />
	<li><code>History </code> - History Navigation module</li>
	<br />
	<li><code>HashNavigation </code> - Hash Navigation module</li>
	<br />
	<li><code>Autoplay </code> - Autoplay module</li>
	<br />
	<li><code>EffectFade </code> - Fade Effect module</li>
	<br />
	<li><code>EffectCube </code> - Cube Effect module</li>
	<br />
	<li><code>EffectFlip </code> - Flip Effect module</li>
	<br />
	<li><code>EffectCoverflow </code> - Coverflow Effect module</li>
	<br />
	<li><code>EffectCards </code> - Cards Effect module</li>
	<br />
	<li><code>EffectCreative </code> - Creative Effect module</li>
	<br />
	<li><code>Thumbs </code> - Thumbs module</li>
	<br />
</ul>
