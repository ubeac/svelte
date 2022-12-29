<script lang="ts">
	import Prism from 'prismjs'
	import 'prismjs/themes/prism.css'

	import 'prism-svelte'

	import { classname } from '$lib/utils'

	import { El } from '../Base'
	import { Card } from '../Card'
	import { Icon } from '../Icon'
	import { CardTabs, Tab } from '../Tabs'
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
	<CardTabs>
		<Tab title="Preview">
			<El cssPrefix="preview-body">
				<slot />
			</El>
		</Tab>
		<Tab title="Markup">
			<El cssPrefix="preview-code">
				<PreviewCopyButton on:success={setChecked} value={markup}>
					<Icon name={copyIcon} />
				</PreviewCopyButton>
				<El tag="pre" class="language-svelte"><code>{@html markupHighlighted}</code></El>
			</El>
		</Tab>
		{#if !!script}
			<Tab title="Script">
				<El cssPrefix="preview-code">
					<PreviewCopyButton on:success={setChecked} value={script}>
						<Icon name={copyIcon} />
					</PreviewCopyButton>
					<El tag="pre" class="language-svelte"><code>{@html scriptHighlighted}</code></El>
				</El>
			</Tab>
		{/if}
		{#if !!style}
			<Tab title="Style">
				<El class={classname('preview-code')}>
					<PreviewCopyButton on:success={setChecked} value={style}>
						<Icon name={copyIcon} />
					</PreviewCopyButton>

					<El tag="pre" class="language-svelte"><code>{@html styleHighlighted}</code></El>
				</El>
			</Tab>
		{/if}
	</CardTabs>
</Card>
