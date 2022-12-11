<script type="ts">
	import { Card, CardBody, El, PageBody, PageHeader, ToC } from '@ubeac/svelte'

	import { navigations } from '.'

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
			<El colLg="2" display="none" displayLg="block">
				<ul class="nav nav-pills nav-vertical">
					{#each navigations as navigation}
						<li class="nav-item">
							<a
								href={navigation.route ? navigation.route : '#menu-base'}
								class="nav-link"
								data-bs-toggle="collapse"
								aria-expanded="true">
								{navigation.title}
								{#if navigation.children}
									<span class="nav-link-toggle" />
								{/if}
							</a>
							{#if navigation.children}
								<ul class="nav nav-pills collapse show" id="menu-base" style="">
									{#each navigation.children as menu}
										<li class="nav-item">
											<a href={menu.route} class="nav-link">{menu.title}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</El>
			<El colLg="8" col="12">
				<Card size="lg">
					<CardBody><slot /></CardBody>
				</Card>
			</El>
			<El colLg="2" display="none" displayLg="block">
				<ToC />
			</El>
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
