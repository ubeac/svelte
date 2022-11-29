<script>
	import { Preview } from '@ubeac/svelte'
	import CardBody from './CardBody.svelte'
	import CardTitle from './CardTitle.svelte'
	import CardImage from './CardImage.svelte'
	import CardBlog from './CardBlog.svelte'
	import CardRow from './CardRow.svelte'
	import CardAside from './CardAside.svelte'
	import CardColor from './CardColor.svelte'
	import CardStamp from './CardStamp.svelte'
	import CardStampSize from './CardStampSize.svelte'
	import CardMedia from './CardMedia.svelte'
</script>

<h1>Cards</h1>
<p>
	Cards are flexible user interface elements, which help organize content into meaningful sections and make it easier to
	display on different screen sizes. Cards contain various smaller components, such as images, text, links and buttons
	and may act as an entry to more detailed information, helping users scan the page quickly and find the most relevant
	content.
</p>

<h2>Default card</h2>
<p>
	Use the card and cardBody to create a card and use it as the basis for a more advanced card design. A card is a
	perfect way to organize content and make it look neat and tidy.
</p>

<Preview src="./CardBody.svelte">
	<CardBody />
</Preview>

<h2>Card with title</h2>
<p>
	Add a title to your card by adding title props. You can also place the title inside the cardHeader slot to customize
	your header.
</p>
<Preview src="./CardTitle.svelte">
	<CardTitle />
</Preview>

<h2>Card with title and image</h2>
<p>
	To create a more visually appealing card, add a title and an image. Thanks to that, the card will go well with your
	inteface design and draw users’ attention.
</p>
<Preview src="./CardImage.svelte">
	<CardImage />
</Preview>

<h2>Blog post card</h2>
<p>
	Add an image to your blog post card to make it eye-catching. You can do it by adding the image. Thanks to the grid
	within CardBody, the author details will be displayed at the bottom of the card.
</p>
<Preview src="./CardBlog.svelte">
	<CardBlog />
</Preview>

<h2>Row deck</h2>
<p>
	Add the .row-deck (it's tabler helper) class to .row, if you want to display several cards next to one another. Thanks
	to that, they will all have the same height.
</p>
<Preview src="./CardRow.svelte">
	<CardRow />
</Preview>

<h2>Post card with aside image</h2>
<p>
	You can also add an image on the left side of the card. To do it, add the .card-aside class to the element with the
	.card class. Then add the image in the .card-aside-column element and it will be automatically centered and scaled to
	the right size.
</p>
<Preview src="./CardAside.svelte">
	<CardAside />
</Preview>

<h2>Color variations</h2>
<p>
	Add a status color to your card, either at the top or on the side of the card, to customise it and make it more
	eye-catching.
</p>
<Preview src="./CardColor.svelte">
	<CardColor />
</Preview>

<h2>Stamp Color</h2>
<p>Add a CardStamp.</p>
<Preview src="./CardStamp.svelte">
	<CardStamp />
</Preview>

<h2>Stamp Size</h2>
<p>Add a CardStamp with different size.</p>
<Preview src="./CardStampSize.svelte">
	<CardStampSize />
</Preview>

<h2>Card Media</h2>
<p>Add a CardMedia to show image and other medias inside our card.</p>
<Preview src="./CardMedia.svelte">
	<CardMedia />
</Preview>
