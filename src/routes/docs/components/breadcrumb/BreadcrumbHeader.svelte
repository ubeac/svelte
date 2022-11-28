<script>
	import { Breadcrumb, BreadcrumbItem, Button, Col, El, Icon, Row } from '@ubeac/svelte'
	import { ButtonGroup } from '@ubeac/svelte/components'
</script>

<El class="page-header">
	<Row alignItems="center" mw="100">
		<Col>
			<El mb="1">
				<Breadcrumb>
					<BreadcrumbItem>Home</BreadcrumbItem>
					<BreadcrumbItem>Library</BreadcrumbItem>
					<BreadcrumbItem active>Articles</BreadcrumbItem>
				</Breadcrumb>
			</El>
			<h2 class="page-title">
				<span class="text-truncate">
					Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.
				</span>
			</h2>
		</Col>
		<Col cols="auto">
			<ButtonGroup>
				<Button display="none" displayMd="inline-flex">
					<Icon name="edit" />
					Edit
				</Button>
				<Button color="primary">Publish</Button>
			</ButtonGroup>
		</Col>
	</Row>
</El>
