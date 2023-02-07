<script lang="ts">
	import { Card, CardBody, type ContainerMaxWidths, El, Icon, PageBody } from '@ubeac/svelte'

	import { page } from '$app/stores'
	import { ToC } from '$lib/docs-components'

	import { navigations } from '.'

	let container: ContainerMaxWidths = 'lg'
</script>

<svelte:head>
	<meta name="author" content="Amir Pournasserian" />
	<title>{$page.data.metaData.title}</title>
	<meta name="description" content={$page.data.metaData.description} />
</svelte:head>

<PageBody>
	<El {container}>
		<El row>
			<El colLg="2" colMd="3" d="none" dMd="block">
				<ul class="nav nav-pills nav-vertical" id="docs">
					{#each navigations as navigation}
						<li class="nav-item">
							<a
								href={navigation.route ? navigation.route : `#${navigation.id}`}
								class="nav-link"
								data-bs-toggle="collapse"
								aria-expanded="false">
								{navigation.title}
								{#if navigation.children}
									<span class="nav-link-toggle" />
								{/if}
							</a>
							{#if navigation.children}
								<ul class="nav nav-pills collapse" data-bs-parent="#docs" id={navigation.id} style="">
									{#each navigation.children as menu}
										{@const [pack, icon] = (menu.icon ?? ':').split(':')}
										<li class="nav-item">
											<a href={menu.route} class="nav-link gap-2"><Icon {pack} name={icon} /> {menu.title}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</El>
			<El colLg="8" colMd="9" col="12">
				<Card size="lg">
					<CardBody><slot /></CardBody>
				</Card>
			</El>
			<El colLg="2" d="none" dLg="block">
				<ToC />
			</El>
		</El>
	</El>
</PageBody>
