<script lang="ts">
	import { navigations } from '.'
</script>

<div class="markdown">
	<div>
		<div class="d-flex mb-3">
			<h1 class="m-0">Introduction</h1>
		</div>
	</div>
	<p>
		@ubeac/svlete is a UI component library and kit that speeds up the development process and makes it easier than
		ever! Built on the latest version of <a href="https://tabler.io/">tabler</a>, it helps you create templates based on
		fully customizable and ready-to-use UI components, which can be used by both simple websites and sophisticated
		systems. With basic knowledge of Svelte, HTML and CSS, you’ll be able to create dashboards that are fully functional
		and beautifully designed!
	</p>
	<div class="mt-4">
		<div class="row">
			{#each navigations as navigation}
				<div class="col-sm-6">
					<h3>{navigation.title}</h3>
					{#if navigation.children}
						<ul class="list-unstyled">
							{#each navigation.children as menu}
								<li>
									- <a href={menu.route}>{menu.title}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
