<script type="ts">
	import { App, AppBody, AppFooter, AppHeader, Card, CardBody, El, Page, PageBody, PageHeader } from '@ubeac/svelte'

	let container: ContainerMaxWidths = 'md'

	let cssPrefixPreTitle = `page-header-pretitle`
	let cssPrefixTitle = `page-header-title`
</script>

<App theme="light">
	<AppHeader theme="dark">
		<El {container}>
			<El row>
				<El col>this is header</El>
			</El>
		</El>
	</AppHeader>
	<AppBody>
		<Page {container}>
			{#if $$slots.preTitle || $$slots.preTitle}
				<PageHeader>
					<El {container}>
						<El row>
							<El col>
								{#if $$slots.preTitle}
									<slot name="preTitle">
										<El cssPrefix={cssPrefixPreTitle}><slot /></El>
									</slot>
								{/if}
								{#if $$slots.title}
									<slot name="title">
										<El tag="h2" cssPrefix={cssPrefixTitle}><slot /></El>
									</slot>
								{/if}
							</El>
						</El>
					</El>
				</PageHeader>
			{/if}
			<PageBody>
				<El {container}>
					<El row>
						<El col><Card><CardBody><slot /></CardBody></Card></El>
					</El>
				</El>
			</PageBody>
		</Page>
	</AppBody>
	<AppFooter>
		<El {container}>
			<El row>
				<El col>this is footer</El>
			</El>
		</El>
	</AppFooter>
</App>

<style global>
	.u-preview-body > * {
		margin: 0 0.2rem 0.8rem 0.2rem;
		vertical-align: top;
	}
	.u-preview-body > :last-child {
		margin: 0 0.2rem 0 0.2rem !important;
		vertical-align: top !important;
	}
</style>
