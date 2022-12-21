<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import CardBody from './CardBody.svelte'
	import CardTitle from './CardTitle.svelte'
	import CardImage from './CardImage.svelte'
	import CardBlog from './CardBlog.svelte'
	import CardRow from './CardRow.svelte'
	import CardAside from './CardAside.svelte'
	import CardColor from './CardColor.svelte'
	import CardStamp from './CardStamp.svelte'
	import CardMedia from './CardMedia.svelte'
	import CardStacked from './CardStacked.svelte'
	import CardRibbon from './CardRibbon.svelte'
	import CardFooter from './CardFooter.svelte'
	import CardBackground from './CardBackground.svelte'
</script>

<h1>Cards</h1>
<p>
	Cards are flexible user interface elements, which help organize content into meaningful sections and make it easier to
	display on different screen sizes. Cards contain various smaller components, such as images, text, links and buttons
	and may act as an entry to more detailed information, helping users scan the page quickly and find the most relevant
	content.
</p>

<Doc title="Default card">
	Use the card and cardBody to create a card and use it as the basis for a more advanced card design. A card is a
	perfect way to organize content and make it look neat and tidy.
</Doc>

<Preview src="./CardBody.svelte">
	<CardBody />
</Preview>

<Doc title="Card with title">
	Add a title to your card by adding title props. You can also place the title inside the cardHeader slot to customize
	your header.
</Doc>
<p />
<Preview src="./CardTitle.svelte">
	<CardTitle />
</Preview>

<Doc title="Card with title and image">
	To create a more visually appealing card, add a title and an image. Thanks to that, the card will go well with your
	inteface design and draw user’s attention.
</Doc>
<p />
<Preview src="./CardImage.svelte">
	<CardImage />
</Preview>

<Doc title="Blog post card">
	Add an image to your blog post card to make it eye-catching. You can do it by adding the image. Thanks to the grid
	within CardBody, the author details will be displayed at the bottom of the card.
</Doc>
<p />
<Preview src="./CardBlog.svelte">
	<CardBlog />
</Preview>

<Doc title="Row deck">
	Add the .row-deck (it's tabler helper) class to .row, if you want to display several cards next to one another. Thanks
	to that, they will all have the same height.
</Doc>
<Preview src="./CardRow.svelte">
	<CardRow />
</Preview>

<Doc title="Post card with aside image">
	You can also add an image on the left side of the card. To do it, add the .card-aside class to the element with the
	.card class. Then add the image in the .card-aside-column element and it will be automatically centered and scaled to
	the right size.
</Doc>
<Preview src="./CardAside.svelte">
	<CardAside />
</Preview>

<Doc title="Card with background color">
	<!--  -->
</Doc>
<Preview src="./CardBackground.svelte">
	<CardBackground />
</Preview>

<Doc title="Color variations">
	Add a status color to your card, either at the top or on the side of the card, to customise it and make it more
	eye-catching.
</Doc>
<Preview src="./CardColor.svelte">
	<CardColor />
</Preview>

<Doc title="Card Stamp">Add a CardStamp.</Doc>
<Preview src="./CardStamp.svelte">
	<CardStamp />
</Preview>

<Doc title="Card Ribbon">Add a Ribbon to your card.</Doc>
<Preview src="./CardRibbon.svelte">
	<CardRibbon />
</Preview>

<Doc title="Stacked Card">
	Use the card-stacked class to stack up multiple cards, if you want to save screen space or create a visually appealing
	effect.
</Doc>
<Preview src="./CardStacked.svelte">
	<CardStacked />
</Preview>

<Doc title="Card Media">Add a CardMedia to show image and other medias inside our card.</Doc>
<Preview src="./CardMedia.svelte">
	<CardMedia />
</Preview>

<Doc title="Card Footer">
	<!--  -->
</Doc>
<Preview src="./CardFooter.svelte">
	<CardFooter />
</Preview>
