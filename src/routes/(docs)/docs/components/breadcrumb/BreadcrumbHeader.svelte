<script>
	import { Breadcrumb, BreadcrumbItem, Button, El, Icon, ButtonGroup } from '@ubeac/svelte'
</script>

<El class="page-header">
	<El row mw="100" class="align-items-center mw-100">
		<El col>
			<El mb="1">
				<Breadcrumb>
					<BreadcrumbItem href="/">Home</BreadcrumbItem>
					<BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
					<BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
				</Breadcrumb>
			</El>
			<El tag="h2" class="page-title">
				<El tag="span" textTruncate>
					Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods. Knights of Ni,
					we are but simple travelers who seek the enchanter who lives beyond these woods.
				</El>
			</El>
		</El>
		<El col="auto">
			<ButtonGroup>
				<Button d="none" dMd="inline-flex">
					<Icon name="edit" />
					Edit
				</Button>
				<Button color="primary">Publish</Button>
			</ButtonGroup>
		</El>
	</El>
</El>
