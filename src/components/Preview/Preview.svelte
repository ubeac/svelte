<script lang="ts">
	import Prism from 'prismjs'
	import 'prismjs/themes/prism.css'

	import 'prism-svelte'

	import { Card, CardHeader, Icon, TabContent, TabItem, TabList, TabPane, Tabs } from '$lib/components'
	import { classname } from '$lib/utils'

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

	/**
	 * Set it's direction to column
	 */
	export let vertical: boolean = false

	// TODO: add github link support
	// $: githubURL = github_prefix + path.substring(path.indexOf('src/routes'))

	let copyIcon = 'copy'

	function setChecked() {
		copyIcon = 'check'
		setTimeout(() => (copyIcon = 'copy'), 2000)
	}

	$: classes = classname('preview', { vertical }, $$props.class)

	$: script = isTypescript ? script?.replace(/^\<script\>/g, '<script lang="ts">') : script

	$: markupHighlighted = Prism.highlight(markup ?? '', Prism.languages.svelte, 'svelte')
	$: styleHighlighted = Prism.highlight(style ?? '', Prism.languages.svelte, 'svelte')
	$: scriptHighlighted = Prism.highlight(script ?? '', Prism.languages.svelte, 'svelte')
</script>

<Card class={classes}>
	<Tabs>
		<CardHeader>
			<TabList card>
				<TabItem>Preview</TabItem>
				<TabItem>Markup</TabItem>
				{#if !!script}
					<TabItem>Script</TabItem>
				{/if}
				{#if !!style}
					<TabItem>Style</TabItem>
				{/if}
			</TabList>
		</CardHeader>

		<TabContent>
			<TabPane>
				<div class={classname('preview-body')}>
					<slot />
				</div>
			</TabPane>
			<TabPane>
				<div class={classname('preview-code')}>
					<PreviewCopyButton on:success={setChecked} value={markup}>
						<Icon name={copyIcon} />
					</PreviewCopyButton>
					<pre class="language-svelte"><code>{@html markupHighlighted}</code></pre>
				</div>
			</TabPane>
			{#if script}
				<TabPane>
					<div class={classname('preview-code')}>
						<PreviewCopyButton on:success={setChecked} value={script}>
							<Icon name={copyIcon} />
						</PreviewCopyButton>
						<pre class="language-svelte"><code>{@html scriptHighlighted}</code></pre>
					</div>
				</TabPane>
			{/if}
			{#if script}
				<TabPane>
					<div class={classname('preview-code')}>
						<PreviewCopyButton on:success={setChecked} value={style}>
							<Icon name={copyIcon} />
						</PreviewCopyButton>

						<pre class="language-svelte"><code>{@html styleHighlighted}</code></pre>
					</div>
				</TabPane>
			{/if}
		</TabContent>
	</Tabs>
</Card>
