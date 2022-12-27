<script lang="ts">
	import { Doc, Preview } from '@ubeac/svelte'

	import SpacingMargin from './SpacingMargin.svelte'
	import SpacingPadding from './SpacingPadding.svelte'
</script>

<h1>Spacing</h1>

<Doc title="Margins">
	Margins are used to create space around elements, outside of any defined borders.
	<code>m</code> property is used to set <b>all margin size</b>. It accepts the following values:
	<ul>
		<li><code>0</code>: no margin</li>
		<li><code>1</code>: small margin</li>
		<li><code>2</code>: medium margin</li>
		<li><code>3</code>: large margin</li>
		<li><code>4</code>: x-large margin</li>
		<li><code>5</code>: xx-large margin</li>
	</ul>
	<code>mb</code> property is used to set the <b>margin-bottom</b> size. It accepts the same values as
	<code>m</code>.<br />
	<code>ms</code> property is used to set the <b>margin-start</b> size. It accepts the same values as
	<code>m</code>.<br />
	<code>me</code> property is used to set the <b>margin-end</b> size. It accepts the same values as
	<code>m</code>.<br />
	<code>mt</code> property is used to set the <b>margin-top</b> size. It accepts the same values as
	<code>m</code>.<br />
	<code>mx</code> property is used to set the <b>margin-left</b> and <b>margin-right</b> size. It accepts the same
	values as <code>m</code>.<br />
	<code>my</code> property is used to set the <b>margin-top</b> and <b>margin-bottom</b> size. It accepts the same
	values as <code>m</code>.<br />
</Doc>
<Preview src="./SpacingMargin.svelte">
	<div class="custom-class">
		<SpacingMargin />
	</div>
</Preview>

<Doc title="Paddings">
	Paddings are used to create space around the content of an element, inside of any defined borders.
	<code>p</code> property is used to set <b>all paddings</b> size. It accepts the following values:
	<ul>
		<li><code>0</code>: no padding</li>
		<li><code>1</code>: small padding</li>
		<li><code>2</code>: medium padding</li>
		<li><code>3</code>: large padding</li>
		<li><code>4</code>: x-large padding</li>
		<li><code>5</code>: xx-large padding</li>
	</ul>
	<code>pb</code> property is used to set the <b>padding-bottom</b> size. It accepts the same values as
	<code>p</code>.<br />
	<code>ps</code> property is used to set the <b>padding-start</b> size. It accepts the same values as
	<code>p</code>.<br />
	<code>pe</code> property is used to set the <b>padding-end</b> size. It accepts the same values as
	<code>p</code>.<br />
	<code>pt</code> property is used to set the <b>padding-top</b> size. It accepts the same values as
	<code>p</code>.<br />
	<code>px</code> property is used to set the <b>padding-left</b> and <b>padding-right</b> size. It accepts the same
	values as <code>p</code>.<br />
	<code>py</code> property is used to set the <b>padding-top</b> and <b>padding-bottom</b> size. It accepts the same
	values as <code>p</code>.<br />
</Doc>
<Preview src="./SpacingPadding.svelte">
	<div class="custom-class">
		<SpacingPadding />
	</div>
</Preview>

<style>
	.custom-class > :global(.u-el) {
		background-color: rgba(238, 130, 238, 0.1);
		border: 1px solid rgba(238, 130, 238, 0.5);
		margin-bottom: 0.5rem;
	}
	.custom-class > :global(.u-el > .u-el) {
		background-color: rgba(238, 130, 238, 0.1);
		border: 1px solid rgba(238, 130, 238, 0.5);
		text-align: center;
		min-height: 40px;
		line-height: 40px;
	}
</style>
