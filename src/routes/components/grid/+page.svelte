<script>
	import { Preview } from '$lib/components'

	import GridAlign from './GridAlign.svelte'
	import GridAlignSelf from './GridAlignSelf.svelte'
	import GridBreakpoint from './GridBreakpoint.svelte'
	import GridJustify from './GridJustify.svelte'
	import GridGutter from './GridGutter.svelte'
	import GridOffset from './GridOffset.svelte'
	import GridOrder from './GridOrder.svelte'
	import GridWrapping from './GridWrapping.svelte'
	import GridGrow from './GridGrow.svelte'
	import GridNested from './GridNested.svelte'
	import GridColumnWidth from './GridColumnWidth.svelte'
	import GridRow from './GridRow.svelte'
	import GridContainer from './GridContainer.svelte'
</script>

<h2>Align</h2>
<p>Change the vertical alignment of flex items and their parents using the align</p>
<Preview src="./GridAlign.svelte">
	<GridAlign />
</Preview>

<h2>Align Self</h2>
<p>Change the vertical alignment of flex items and their parents using the align-self properties.</p>
<Preview src="./GridAlignSelf.svelte">
	<GridAlignSelf />
</Preview>

<h2>Breakpoint sizing</h2>
<p>
	Columns will automatically take up an equal amount of space within their parent container. This can be modified using
	the cols prop. You can also utilize the sm, md, lg, and xl props to further define how the column will be sized in
	different viewport sizes.
</p>
<Preview src="./GridBreakpoint.svelte">
	<GridBreakpoint />
</Preview>

<h2>Justify</h2>
<p>Change the horizontal alignment of flex items using the justify property.</p>
<Preview src="./GridJustify.svelte">
	<GridJustify />
</Preview>

<h2>No gutters</h2>
<p>
	You can remove the negative margins from row and the padding from its direct col children using the no-gutters
	property.
</p>
<Preview src="./GridGutter.svelte">
	<GridGutter />
</Preview>

<h2>Offset</h2>
<p>
	Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content.
	Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application
	layout precisely to your needs.
</p>
<Preview src="./GridOffset.svelte">
	<GridOffset />
</Preview>

<h2>Order</h2>
<p>
	You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design
	specialized screen layouts that accommodate to any application.
</p>
<Preview src="./GridOrder.svelte">
	<GridOrder />
</Preview>

<h2>Column wrapping</h2>
<p>
	When more than 12 columns are placed within a given row (that is not using the .flex-nowrap utility class), each group
	of extra columns will wrap onto a new line.
</p>
<Preview src="./GridWrapping.svelte">
	<GridWrapping />
</Preview>

<h2>Grow and Shrink</h2>
<p>
	By default, flex components will automatically fill the available space in a row or column. They will also shrink
	relative to the rest of the flex items in the flex container when a specific size is not designated. You can define
	the column width of the col by using the cols prop and providing a value from 1 to 12.
</p>
<Preview src="./GridGrow.svelte">
	<GridGrow />
</Preview>

<h2>Nested grid</h2>
<p>Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.</p>
<Preview src="./GridNested.svelte">
	<GridNested />
</Preview>

<h2>One column width</h2>
<p>One column width</p>
<Preview src="./GridColumnWidth.svelte">
	<GridColumnWidth />
</Preview>

<h2>Row and column breakpoints</h2>
<p>
	Dynamically change your layout based upon resolution. (resize your screen and watch the top row layout change on sm,
	md, and lg breakpoints)
</p>
<Preview src="./GridRow.svelte">
	<GridRow />
</Preview>
<h2>Container</h2>
<p>Container breakpoints</p>
<Preview src="./GridRow.svelte">
	<GridContainer />
</Preview>

<style global>
	h2 {
		margin-top: 3rem !important;
	}
	.u-preview-body {
		flex-direction: column;
	}
	.container-example {
		min-height: 150px;
		background: #fafafa;
		margin-bottom: 24px;
	}
	.row-example {
		min-height: 150px;
	}

	.card-example {
		padding: 8px;
	}
	.container-breackpoint {
		padding: 0.75rem;
		margin-bottom: 1.5rem;
		background-color: rgba(0, 123, 255, 0.15);
		border: 1px solid rgba(0, 123, 255, 0.2);
	}
</style>
