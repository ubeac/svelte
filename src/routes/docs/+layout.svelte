<script>
	import { Page, App, AppHeader, AppFooter, PageBody, Card, CardBody, El } from '@ubeac/svelte'
</script>

<App theme="light">
	<AppHeader theme="dark">
		<El container="md">
			<El row>
				<El col>this is header</El>
			</El>
		</El>
	</AppHeader>
	<Page>
		<PageBody>
			<El container="md">
				<El row>
					<El col><Card><CardBody><slot /></CardBody></Card></El>
				</El>
			</El>
		</PageBody>
	</Page>
	<AppFooter>
		<El container="md">
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
