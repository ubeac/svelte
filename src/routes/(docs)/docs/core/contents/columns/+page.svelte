<script lang="ts">
	import { Doc, Preview } from '@ubeac/svelte'

	import ColumnsAlignItems from './ColumnsAlignItems.svelte'
	import ColumnsAlignSelf from './ColumnsAlignSelf.svelte'
	import ColumnsBreaks from './ColumnsBreaks.svelte'
	import ColumnsHorizontalAlignment from './ColumnsHorizontalAlignment.svelte'
	import ColumnsMargins from './ColumnsMargins.svelte'
	import ColumnsOffsets from './ColumnsOffsets.svelte'
	import ColumnsOrders from './ColumnsOrders.svelte'
	import ColumnsStandalone from './ColumnsStandalone.svelte'
	import ColumnsWrapping from './ColumnsWrapping.svelte'
</script>

<h1>Columns</h1>

<Doc title="Align items">
	<code>alignItems</code> prop is used to align columns vertically. It can be set to <code>start</code>,
	<code>center</code>
	or <code>end</code>.
</Doc>
<Preview src="./ColumnsAlignItems.svelte">
	<div class="custom-class custom-class-expanded-row">
		<ColumnsAlignItems />
	</div>
</Preview>

<Doc title="Align self">
	<code>alignSelf</code> prop is used to align columns vertically. It can be set to <code>start</code>,
	<code>center</code>
	or <code>end</code>.
</Doc>
<Preview src="./ColumnsAlignSelf.svelte">
	<div class="custom-class custom-class-expanded-row">
		<ColumnsAlignSelf />
	</div>
</Preview>

<Doc title="Horizontal alignment" />
<Preview src="./ColumnsHorizontalAlignment.svelte">
	<div class="custom-class">
		<ColumnsHorizontalAlignment />
	</div>
</Preview>

<Doc title="Column wrapping">
	If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new
	line.
</Doc>
<Preview src="./ColumnsWrapping.svelte">
	<div class="custom-class">
		<ColumnsWrapping />
	</div>
</Preview>

<Doc title="Column breaks">
	Breaking columns to a new line in flexbox requires a small hack: add an element with <code>w-100</code> property
	wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <code>rows</code>,
	but not every implementation method can account for this. <br />
	You may also apply this break at specific breakpoints.
</Doc>
<Preview src="./ColumnsBreaks.svelte">
	<div class="custom-class">
		<ColumnsBreaks />
	</div>
</Preview>

<Doc title="Reordering">
	Use <code>order</code> prop to change the order of your content. Values are
	<code>'1' | '2' | '3' | '4' | '5' | 'first' | 'last'</code>.
</Doc>
<Preview src="./ColumnsOrders.svelte">
	<div class="custom-class">
		<ColumnsOrders />
	</div>
</Preview>

<Doc title="Offsetting columns" />
<Preview src="./ColumnsOffsets.svelte">
	<div class="custom-class">
		<ColumnsOffsets />
	</div>
</Preview>

<Doc title="Margins" />
<Preview src="./ColumnsMargins.svelte">
	<div class="custom-class">
		<ColumnsMargins />
	</div>
</Preview>

<Doc title="Standalone column classes" />
<Preview src="./ColumnsStandalone.svelte">
	<div class="custom-class">
		<ColumnsStandalone />
	</div>
</Preview>

<style>
	.custom-class :global([class*='u-el-col']) {
		background-color: rgba(238, 130, 238, 0.1);
		border: 1px solid rgba(238, 130, 238, 0.5);
		text-align: center;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	.custom-class :global([class*='u-el-row']) {
		margin-bottom: 0.75rem;
	}
	.custom-class-expanded-row :global([class*='u-el-row']) {
		min-height: 5rem;
		background-color: rgba(238, 130, 238, 0.05);
		border: 1px solid rgba(238, 130, 238, 0.2);
	}
</style>
