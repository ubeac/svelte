<script>
	import { Preview } from '@ubeac/svelte'
	import TableBorder from './TableBorder.svelte'
	import TableBorderless from './TableBorderless.svelte'
	import TableDefault from './TableDefault.svelte'
	import TableHover from './TableHover.svelte'
	import TableTruncate from './TableTruncate.svelte'
	import TableStriped from './TableStriped.svelte'
	import TableResponsive from './TableResponsive.svelte'
	import TableColors from './TableColors.svelte'
</script>

<h1>Tables</h1>
<p>
	Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that,
	users can browse a lot of information at once and a good table design will help you take care of its clarity.
</p>

<h2>Basic Table</h2>
<p>Table component has basic styles.</p>

<Preview src="./TableDefault.svelte">
	<TableDefault />
</Preview>

<h2>Bordered Tables</h2>
<p>You can add borders for table rows using <code>border</code> prop.</p>

<Preview src="./TableBorder.svelte">
	<TableBorder />
</Preview>

<p>You can disable borders by setting border to 0.</p>
<Preview src="./TableBorderless.svelte">
	<TableBorderless />
</Preview>

<h2>Hover effect</h2>
<p>Table rows can change it's color if yo hover on them.</p>

<Preview src="./TableHover.svelte">
	<TableHover />
</Preview>


<h2>Truncate cells</h2>
<p>TODO</p>

<Preview src="./TableTruncate.svelte">
	<TableTruncate />
</Preview>


<h2>Striped Tables</h2>
<p>You can change colors of Even/Odd rows by adding <code>striped</code> prop.</p>

<Preview src="./TableStriped.svelte">
	<TableStriped />
</Preview>

<h2>Responsive Tables</h2>
<p>TODO</p>

<Preview src="./TableResponsive.svelte">
	<TableResponsive />
</Preview>


<h2>Table Colors</h2>
<p>TODO</p>

<Preview src="./TableColors.svelte">
	<TableColors />
</Preview>