<script lang="ts">
	import { navigations } from '.'
</script>

<header>
	<h1>Introduction</h1>
</header>
<main>
	<div class="markdown">
		<p>
			Welcome to the uBeac documentation website! uBeac is a powerful and flexible Svelte UI component library, designed
			to help developers build enterprise-grade web applications quickly and easily. With a focus on rapid application
			development and framework independence, uBeac is the perfect complement to any CSS framework. It is inspired by
			<a href="https://tabler.io/" target="_blank" rel="noreferrer"> Tabler</a>, a UI Kit built on top of
			<a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"> Bootstrap</a> css.
		</p>
		<p>
			In this documentation, you will find everything you need to know to get started with uBeac, including installation
			instructions, usage examples, and detailed information about each component in the library. Whether you're a
			seasoned developer or just getting started with Svelte, you'll find the information you need to start building
			powerful and elegant web applications with uBeac.
		</p>
		<h2>Key Features:</h2>
		<ul>
			<li>
				<b>Rapid application development:</b> With uBeac, you can easily and quickly build enterprise-grade web applications,
				without worrying about the specifics of a CSS framework.
			</li>
			<li>
				<b>Framework independence</b>: uBeac's components are built with basic HTML and CSS, without any
				framework-specific classes or styles, so you can use them with any CSS framework of your choice.
			</li>
			<li>
				<b>Powerful and flexible</b>: uBeac's components are powerful and flexible, and you can easily customize them to
				fit the needs of your project.
			</li>
			<li>
				<b>Easy to use</b>: uBeac's components are easy to use and intuitive, so you don't have to be an expert in
				Svelte or CSS frameworks to get started.
			</li>
		</ul>

		<p>We hope you find this documentation helpful, and we're excited to see what you'll build with uBeac!</p>

		<div class="mt-4">
			<div class="row">
				{#each navigations as navigation}
					<div class="col-sm-6">
						<h2>{navigation.title}</h2>
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
</main>
