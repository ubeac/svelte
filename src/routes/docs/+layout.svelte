<script type="ts">
	import { Card, CardBody, El, PageBody, PageHeader } from '@ubeac/svelte'

	let container: ContainerMaxWidths = 'md'

	let cssPrefixPreTitle = `page-header-pretitle`
	let cssPrefixTitle = `page-header-title`
</script>

<PageHeader>
	<El {container}>
		<El row>
			<El col>
				<El cssPrefix={cssPrefixPreTitle}><slot name="preTitle" /></El>
				<El tag="h1" cssPrefix={cssPrefixTitle}><slot name="title">Documentation</slot></El>
			</El>
		</El>
	</El>
</PageHeader>
<PageBody>
	<El {container}>
		<El row>
			<El colLg="3" display="none" displayLg="block">Test</El>
			<El colLg="9"><Card size="lg"><CardBody><slot /></CardBody></Card></El>
		</El>
	</El>
</PageBody>

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
