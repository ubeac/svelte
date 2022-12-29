<script type="ts">
	import { Card, CardBody, type ContainerMaxWidths, El, PageBody, PageHeader, ToC } from '@ubeac/svelte'

	import { navigations } from '.'

	let container: ContainerMaxWidths = 'lg'
</script>

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
