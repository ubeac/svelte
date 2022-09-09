<script lang="ts">
	import Prism from 'prismjs'
	import 'prismjs/themes/prism.css'

	import 'prism-svelte'

	import { nanoid } from 'nanoid'

	import { classname } from '$lib/utils'

	import { Card, CardBody } from '../card'
	import { Icon } from '../icon'
	import { Tabs, TabsItem, TabsItems, TabsPanel, TabsPanels } from '../tabs'
	import PreviewCopyButton from './PreviewCopyButton.svelte'

	/**
	 * is script written in typescript language?
	 */
	export let isTypescript: boolean = false

	/**
	 * content of Example's markup section
	 */
	export let markup: string | undefined = undefined

	/**
	 * content of Example's script section including  script tags
	 */

	export let script: string | undefined = undefined

	/**
	 * content of Example's style section including style tags
	 */
	export let style: string | undefined = undefined

	/**
	 * (Required) relative address of example file
	 * @example
	 *	src="./exampleFile.svelte"
	 *	src="../lib/testFile.svelte"
	 */
	export let src: string

	// TODO: add github link support
	// $: githubURL = github_prefix + path.substring(path.indexOf('src/routes'))
	let id: string = nanoid(5)

	let copyIcon = 'copy'

	function setChecked() {
		copyIcon = 'check'
		setTimeout(() => (copyIcon = 'copy'), 2000)
	}

	$: console.log({ script })
	$: script = isTypescript ? script?.replace(/^\<script\>/g, '<script lang="ts">') : script

	$: markupHighlighted = Prism.highlight(markup ?? '', Prism.languages.svelte, 'svelte')
	$: styleHighlighted = Prism.highlight(style ?? '', Prism.languages.svelte, 'svelte')
	$: scriptHighlighted = Prism.highlight(script ?? '', Prism.languages.svelte, 'svelte')
</script>

<Card>
	<Tabs value="1">
		<TabsItems>
			<TabsItem value="1">Preview</TabsItem>
			<TabsItem value="2">Markup</TabsItem>
			<TabsItem value="3" if={!!script}>Script</TabsItem>
			<TabsItem value="4" if={!!style}>Style</TabsItem>
		</TabsItems>
		<TabsPanels>
			<TabsPanel value="1">
				<div class={classname('preview-body')}>
					<slot />
				</div>
			</TabsPanel>
			<TabsPanel value="2">
				<div class={classname('preview-code')}>
					<PreviewCopyButton on:success={setChecked} value={markup}>
						<Icon name={copyIcon} />
					</PreviewCopyButton>
					<pre><code class="language-svelte">{@html markupHighlighted}</code></pre>
				</div>
			</TabsPanel>
			{#if script}
				<TabsPanel value="3">
					<div class={classname('preview-code')}>
						<PreviewCopyButton on:success={setChecked} value={script}>
							<Icon name={copyIcon} />
						</PreviewCopyButton>
						<pre><code class="language-svelte">{@html scriptHighlighted}</code></pre>
					</div>
				</TabsPanel>
			{/if}
			{#if script}
				<TabsPanel value="4">
					<div class={classname('preview-code')}>
						<PreviewCopyButton on:success={setChecked} value={style}>
							<Icon name={copyIcon} />
						</PreviewCopyButton>

						<pre><code class="language-svelte">{@html styleHighlighted}</code></pre>
					</div>
				</TabsPanel>
			{/if}
		</TabsPanels>
	</Tabs>
</Card>

<style global>
	.u-preview-body {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		gap: 8px;
	}

	.u-preview-code {
		position: relative;
	}

	.u-preview-copy-button {
		position: absolute;
		right: 0;
		top: 0;
		border: none !important;
	}
	.u-preview-code pre {
		margin: 0;
		border: transparent;
	}
</style>
