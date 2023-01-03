<script type="ts">
	import { afterUpdate } from 'svelte'

	import { Card, CardBody, type ContainerMaxWidths, El, Icon, PageBody, PageHeader } from '@ubeac/svelte'

	import { ToC } from '$lib/docs-components'

	import { navigations } from '.'

	let container: ContainerMaxWidths = 'lg'
	let title = ''
	let description = ''
	let siteTitle = 'uBeac Svelte'
	afterUpdate(() => {
		let h1 = Array.from(document.getElementsByTagName('h1'))
		title = h1.length > 0 ? siteTitle + ' | ' + h1[0].innerText : siteTitle
		let card = Array.from(document.getElementsByClassName('u-card-body'))[0]
		let p = Array.from(card.getElementsByTagName('p'))
		description = p.length > 0 ? p[0].innerText : siteTitle
	})
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tabler.css" />
	<title>{title}</title>
	<description>{description}</description>
</svelte:head>

<PageBody>
	<El {container}>
		<El row>
			<El colLg="2" colMd="3" display="none" displayMd="block">
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
			<El colLg="2" display="none" displayLg="block">
				<ToC />
			</El>
		</El>
	</El>
</PageBody>
