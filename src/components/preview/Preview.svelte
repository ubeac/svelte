<script lang="ts">
	import Prism from 'prismjs'
	import 'prismjs/themes/prism.css'

	import 'prism-svelte'

	import { nanoid } from 'nanoid'

	import { classname } from '$lib/utils'

	import { Card, CardBody } from '../card'
	import { Icon } from '../icon'
	import PreviewCopyButton from './PreviewCopyButton.svelte'

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

	$: markupHighlighted = Prism.highlight(markup ?? '', Prism.languages.svelte, 'svelte')
	$: styleHighlighted = Prism.highlight(style ?? '', Prism.languages.svelte, 'svelte')
	$: scriptHighlighted = Prism.highlight(script ?? '', Prism.languages.svelte, 'svelte')
</script>

<Card>
	<ul class="nav nav-tabs" data-bs-toggle="tabs">
		<li class="nav-item">
			<a href="#tabs-{id}-preview" class="nav-link active" data-bs-toggle="tab">Preview</a>
		</li>
		<li class="nav-item">
			<a href="#tabs-{id}-markup" class="nav-link" data-bs-toggle="tab">Markup</a>
		</li>
		{#if script}
			<li class="nav-item">
				<a href="#tabs-{id}-script" class="nav-link" data-bs-toggle="tab">Script</a>
			</li>
		{/if}
		{#if style}
			<li class="nav-item">
				<a href="#tabs-{id}-style" class="nav-link" data-bs-toggle="tab">Style</a>
			</li>
		{/if}
	</ul>
	<CardBody>
		<div class="tab-content">
			<div class="tab-pane active show" id="tabs-{id}-preview">
				<div class={classname('preview-body')}>
					<slot />
				</div>
			</div>
			<div class="tab-pane" id="tabs-{id}-markup">
				<div class={classname('preview-code')}>
					<PreviewCopyButton on:success={setChecked} value={markup}>
						<Icon name={copyIcon} />
					</PreviewCopyButton>
					<pre><code class="language-svelte">{@html markupHighlighted}</code></pre>
				</div>
			</div>
			{#if script}
				<div class="tab-pane" id="tabs-{id}-script">
					<div class={classname('preview-code')}>
						<PreviewCopyButton on:success={setChecked} value={script}>
							<Icon name={copyIcon} />
						</PreviewCopyButton>
						<pre><code class="language-svelte">{@html scriptHighlighted}</code></pre>
					</div>
				</div>
			{/if}
			{#if script}
				<div class="tab-pane" id="tabs-{id}-style">
					<div class={classname('preview-code')}>
						<PreviewCopyButton on:success={setChecked} value={style}>
							<Icon name={copyIcon} />
						</PreviewCopyButton>

						<pre><code class="language-svelte">{@html styleHighlighted}</code></pre>
					</div>
				</div>
			{/if}
		</div>
	</CardBody>
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
		margin: -1rem -1.25rem;
	}

	.u-preview-copy-button {
		position: absolute;
		right: 0;
		top: 0;
	}
	.u-preview-code pre {
		margin: 0;
		border: transparent;
	}
</style>
