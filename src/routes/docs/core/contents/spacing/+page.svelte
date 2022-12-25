<script lang="ts">
	import { Doc, Preview } from '@ubeac/svelte'

	import SpacingMargin from './SpacingMargin.svelte'
	import SpacingPadding from './SpacingPadding.svelte'
</script>

<h1>Spacing</h1>

<Doc title="Margins">
	Margins are used to create space around elements, outside of any defined borders.
	<code>m</code> property is used to set the margin size. It accepts the following values:
	<ul>
		<li><code>0</code>: no margin</li>
		<li><code>1</code>: small margin</li>
		<li><code>2</code>: medium margin</li>
		<li><code>3</code>: large margin</li>
		<li><code>4</code>: x-large margin</li>
		<li><code>5</code>: xx-large margin</li>
	</ul>
	<code>mb</code> property is used to set the margin-bottom size. It accepts the same values as <code>m</code>.<br />
	<code>ms</code> property is used to set the margin-start size. It accepts the same values as <code>m</code>.<br />
	<code>me</code> property is used to set the margin-end size. It accepts the same values as <code>m</code>.<br />
	<code>mt</code> property is used to set the margin-top size. It accepts the same values as <code>m</code>.<br />
</Doc>
<Preview src="./SpacingMargin.svelte">
	<SpacingMargin />
</Preview>

<Doc title="Paddings">
	Paddings are used to create space around the content of an element, inside of any defined borders.
	<code>p</code> property is used to set the padding size. It accepts the following values:
	<ul>
		<li><code>0</code>: no padding</li>
		<li><code>1</code>: small padding</li>
		<li><code>2</code>: medium padding</li>
		<li><code>3</code>: large padding</li>
		<li><code>4</code>: x-large padding</li>
		<li><code>5</code>: xx-large padding</li>
	</ul>
	<code>pb</code> property is used to set the padding-bottom size. It accepts the same values as <code>p</code>.<br />
	<code>ps</code> property is used to set the padding-start size. It accepts the same values as <code>p</code>.<br />
	<code>pe</code> property is used to set the padding-end size. It accepts the same values as <code>p</code>.<br />
	<code>pt</code> property is used to set the padding-top size. It accepts the same values as <code>p</code>.<br />
</Doc>
<Preview src="./SpacingPadding.svelte">
	<SpacingPadding />
</Preview>
