<script lang="ts">
	import { onMount } from 'svelte'

	import {
		App,
		AppBody,
		AppFooter,
		type ContainerMaxWidths,
		El,
		Icon,
		Input,
		Offcanvas,
		OffcanvasBody,
		OffcanvasHeader,
		Page,
		Progress,
	} from '@ubeac/svelte'
	import type { Themes } from '@ubeac/svelte'

	import { afterNavigate, beforeNavigate } from '$app/navigation'

	import { navigations } from './docs'

	let container: ContainerMaxWidths = 'md'
	let theme: Themes = 'light'
	let progressValue = 0
	let updater: any
	let showDocs = false
	let showTopNav = false

	$: url = typeof window !== 'undefined' ? window.location.origin : ''

	export let maximum = 0.999
	export let intervalTime = 700
	export let stepSizes = [0, 0.005, 0.01, 0.02]

	const getIncrement = (number: number) => {
		if (number >= 0 && number < 0.2) return 0.1
		else if (number >= 0.2 && number < 0.5) return 0.04
		else if (number >= 0.5 && number < 0.8) return 0.02
		else if (number >= 0.8 && number < 0.99) return 0.005
		return 0.00001
	}
	const startInterval = () => {
		if (typeof window !== 'undefined') {
			updater = setInterval(() => {
				const randomStep = stepSizes[Math.floor(Math.random() * stepSizes.length)]
				const step = getIncrement(progressValue) + randomStep
				if (progressValue < maximum) {
					progressValue = progressValue + step
				}
				if (progressValue > maximum) {
					clearInterval(updater)
				}
			}, intervalTime)
		}
	}

	beforeNavigate(() => {
		progressValue = 0
		showDocs = false
		showTopNav = false
		startInterval()
	})

	afterNavigate(() => {
		progressValue = 1
		clearInterval(updater)
	})

	const onThemeChange = () => (theme === 'light' ? (theme = 'dark') : (theme = 'light'))

	const toggleDocs = () => {
		showDocs = !showDocs
	}

	const toggleTopNav = () => {
		showTopNav = !showTopNav
	}
	onMount(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js')
	})
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tabler.css" />
</svelte:head>

<App {theme}>
	{#if progressValue < 1}
		<div class="sticky-top">
			<div class="position-relative">
				<Progress col position="absolute" color="primary" style="height: 3px;" value={progressValue * 100} />
			</div>
		</div>
	{/if}

	<header class="navbar navbar-expand-md navbar-light d-print-none align-items-center px-3">
		<div class="container-xl d-none d-md-block">
			<div class="row">
				<div class="col">
					<div class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
						<a href={url}>
							<img src="/logo.svg" width="110" height="32" alt="uBeac" class="navbar-brand-image" />
						</a>
					</div>
				</div>
				<div class="navbar-nav col-auto">
					<a
						href="/"
						on:click|preventDefault={onThemeChange}
						class="nav-link px-0 hide-theme-dark"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						aria-label="Enable dark mode"
						data-bs-original-title="Enable dark mode">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
						</svg>
					</a>
					<a
						href="/"
						on:click|preventDefault={onThemeChange}
						class="nav-link px-0 hide-theme-light"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						aria-label="Enable light mode"
						data-bs-original-title="Enable light mode">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="12" cy="12" r="4" />
							<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
						</svg>
					</a>
					<a href="https://github.com/ubeac/svelte/tree/next" class="nav-link px-0" target="_blank" rel="noreferrer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							class="navbar-nav-svg"
							viewBox="0 0 512 499.36"
							role="img"
							><title>GitHub</title>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="row d-flex d-md-none flex-grow-1 align-items-center">
			<div class="col-auto">
				<button
					class="navbar-toggler"
					type="button"
					aria-controls="navbar-menu"
					aria-expanded="false"
					aria-label="Toggle navigation"
					on:click={toggleDocs}>
					<span class="navbar-toggler-icon" />
				</button>
			</div>
			<div class="col text-center">
				<div class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
					<a href=".">
						<img src="/logo.svg" width="110" height="32" alt="uBeac" class="navbar-brand-image" />
					</a>
				</div>
			</div>
			<div class="col-auto">
				<button
					class="navbar-toggler"
					type="button"
					aria-controls="Top navigation"
					aria-expanded="false"
					aria-label="Toggle navigation"
					on:click={toggleTopNav}>
					<span
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-dots"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="5" cy="12" r="1" />
							<circle cx="12" cy="12" r="1" />
							<circle cx="19" cy="12" r="1" />
						</svg></span>
				</button>
			</div>
		</div>
	</header>

	<El dMd="none">
		<Offcanvas bind:show={showDocs} noScroll backdrop autoClose>
			<OffcanvasHeader title="Documentation" />
			<OffcanvasBody>
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
											<a href={menu.route} class="nav-link gap-2"> <Icon {pack} name={icon} /> {menu.title}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</OffcanvasBody>
		</Offcanvas>

		<Offcanvas bind:show={showTopNav} noScroll placement="end" backdrop autoClose>
			<OffcanvasHeader title="uBeac Svelte Components" />
			<OffcanvasBody>
				<div class="navbar-expand-md">
					<div class="collapse navbar-collapse show" id="navbar-menu">
						<div class="navbar navbar-light">
							<div class="container-xl mb-4">
								<ul class="navbar-nav">
									<li class="nav-item d-none">
										<a class="nav-link" href="/">
											<span class="nav-link-icon d-md-none d-lg-inline-block"
												><!-- Download SVG icon from http://tabler-icons.io/i/home -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline
														points="5 12 3 12 12 3 21 12 19 12" /><path
														d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path
														d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
											</span>
											<span class="nav-link-title"> Home </span>
										</a>
									</li>
									{#if false}
										<li class="nav-item d-none">
											<a class="nav-link" href="#form-elements">
												<span class="nav-link-icon d-md-none d-lg-inline-block"
													><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														stroke-width="2"
														stroke="currentColor"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
														><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline
															points="9 11 12 14 20 6" /><path
															d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
												</span>
												<span class="nav-link-title"> Form elements </span>
											</a>
										</li>
										<li class="nav-item dropdown d-none">
											<a
												class="nav-link dropdown-toggle"
												href="#navbar-extra"
												data-bs-toggle="dropdown"
												data-bs-auto-close="outside"
												role="button"
												aria-expanded="false">
												<span class="nav-link-icon d-md-none d-lg-inline-block"
													><!-- Download SVG icon from http://tabler-icons.io/i/star -->
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														stroke-width="2"
														stroke="currentColor"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
														><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
															d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
												</span>
												<span class="nav-link-title"> Extra </span>
											</a>
											<div class="dropdown-menu">
												<div class="dropdown-menu-columns">
													<div class="dropdown-menu-column">
														<a class="dropdown-item" href="../activity.html"> Activity </a>
														<a class="dropdown-item" href="../gallery.html"> Gallery </a>
														<a class="dropdown-item" href="../invoice.html"> Invoice </a>
														<a class="dropdown-item" href="../search-results.html"> Search results </a>
														<a class="dropdown-item" href="../pricing.html"> Pricing cards </a>
														<a class="dropdown-item" href="../pricing-table.html"> Pricing table </a>
														<a class="dropdown-item" href="../faq.html">
															FAQ
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<a class="dropdown-item" href="../users.html"> Users </a>
														<a class="dropdown-item" href="../license.html"> License </a>
													</div>
													<div class="dropdown-menu-column">
														<a class="dropdown-item" href="../logs.html">
															Logs
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<a class="dropdown-item" href="../music.html"> Music </a>
														<a class="dropdown-item" href="../photogrid.html">
															Photogrid
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<a class="dropdown-item" href="../tasks.html">
															Tasks
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<a class="dropdown-item" href="../uptime.html"> Uptime monitor </a>
														<a class="dropdown-item" href="../widgets.html"> Widgets </a>
														<a class="dropdown-item" href="../wizard.html"> Wizard </a>
														<a class="dropdown-item" href="../settings.html">
															Settings
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<a class="dropdown-item" href="../job-listing.html">
															Job listing
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
													</div>
												</div>
											</div>
										</li>
										<li class="nav-item dropdown d-none">
											<a
												class="nav-link dropdown-toggle"
												href="#navbar-layout"
												data-bs-toggle="dropdown"
												data-bs-auto-close="outside"
												role="button"
												aria-expanded="false">
												<span class="nav-link-icon d-md-none d-lg-inline-block"
													><!-- Download SVG icon from http://tabler-icons.io/i/layout-2 -->
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														stroke-width="2"
														stroke="currentColor"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
														><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect
															x="4"
															y="4"
															width="6"
															height="5"
															rx="2" /><rect x="4" y="13" width="6" height="7" rx="2" /><rect
															x="14"
															y="4"
															width="6"
															height="7"
															rx="2" /><rect x="14" y="15" width="6" height="5" rx="2" /></svg>
												</span>
												<span class="nav-link-title"> Layout </span>
											</a>
											<div class="dropdown-menu">
												<div class="dropdown-menu-columns">
													<div class="dropdown-menu-column">
														<a class="dropdown-item" href="../layout-horizontal.html"> Horizontal </a>
														<a class="dropdown-item" href="../layout-boxed.html">
															Boxed
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<a class="dropdown-item" href="../layout-vertical.html"> Vertical </a>
														<a class="dropdown-item" href="../layout-vertical-transparent.html">
															Vertical transparent
														</a>
														<a class="dropdown-item" href="../layout-vertical-right.html"> Right vertical </a>
														<a class="dropdown-item" href="../layout-condensed.html"> Condensed </a>
														<a class="dropdown-item" href="../layout-combo.html"> Combined </a>
													</div>
													<div class="dropdown-menu-column">
														<a class="dropdown-item" href="../layout-navbar-dark.html"> Navbar dark </a>
														<a class="dropdown-item" href="../layout-navbar-sticky.html"> Navbar sticky </a>
														<a class="dropdown-item" href="../layout-navbar-overlap.html"> Navbar overlap </a>
														<a class="dropdown-item" href="../layout-rtl.html"> RTL mode </a>
														<a class="dropdown-item" href="../layout-fluid.html"> Fluid </a>
														<a class="dropdown-item" href="../layout-fluid-vertical.html"> Fluid vertical </a>
													</div>
												</div>
											</div>
										</li>
									{/if}
									<li class="nav-item dropdown">
										<a
											class="nav-link dropdown-toggle"
											href="#navbar-base"
											data-bs-toggle="dropdown"
											data-bs-auto-close="outside"
											role="button"
											aria-expanded="false">
											<span class="nav-link-icon d-md-none d-lg-inline-block"
												><!-- Download SVG icon from http://tabler-icons.io/i/package -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline
														points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line
														x1="12"
														y1="12"
														x2="20"
														y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line
														x1="12"
														y1="12"
														x2="4"
														y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>
											</span>
											<span class="nav-link-title"> Interface </span>
										</a>
										<div class="dropdown-menu">
											<div class="dropdown-menu-columns">
												<div class="dropdown-menu-column">
													<!--                          <a class="dropdown-item" href="../empty.html"> Empty page </a>-->
													<a class="dropdown-item" href="../accordion.html"> Accordion </a>
													<!--                          <a class="dropdown-item" href="../blank.html"> Blank page </a>-->
													<a class="dropdown-item" href="../badges.html">
														Badges
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../buttons.html"> Buttons </a>
													<div class="dropend d-none">
														<a
															class="dropdown-item dropdown-toggle"
															href="#sidebar-cards"
															data-bs-toggle="dropdown"
															data-bs-auto-close="outside"
															role="button"
															aria-expanded="false">
															Cards
															<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
														</a>
														<div class="dropdown-menu d-none">
															<a href="../cards.html" class="dropdown-item"> Sample cards </a>
															<a href="../card-actions.html" class="dropdown-item">
																Card actions
																<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
															</a>
															<a href="../cards-masonry.html" class="dropdown-item"> Cards Masonry </a>
														</div>
													</div>
													<a class="dropdown-item d-none" href="../colors.html"> Colors </a>
													<a class="dropdown-item d-none" href="../datagrid.html">
														Data grid
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../datatables.html">
														Datatables
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../dropdowns.html"> Dropdowns </a>
													<a class="dropdown-item" href="../modals.html"> Modals </a>
													<a class="dropdown-item d-none" href="../maps.html"> Maps </a>
													<a class="dropdown-item d-none" href="../map-fullsize.html"> Map fullsize </a>
													<a class="dropdown-item d-none" href="../maps-vector.html">
														Vector maps
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../navigation.html"> Navigation </a>
													<a class="dropdown-item d-none" href="../charts.html"> Charts </a>
												</div>
												<div class="dropdown-menu-column">
													<a class="dropdown-item d-none" href="../pagination.html">
														<!-- Download SVG icon from http://tabler-icons.io/i/pie-chart -->
														Pagination
													</a>
													<a class="dropdown-item d-none" href="../placeholder.html"> Placeholder </a>
													<a class="dropdown-item d-none" href="../steps.html">
														Steps
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../tabs.html"> Tabs </a>
													<a class="dropdown-item d-none" href="../tables.html"> Tables </a>
													<a class="dropdown-item d-none" href="../carousel.html">
														Carousel
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../lists.html"> Lists </a>
													<a class="dropdown-item d-none" href="../typography.html"> Typography </a>
													<a class="dropdown-item d-none" href="../offcanvas.html"> Offcanvas </a>
													<a class="dropdown-item d-none" href="../markdown.html"> Markdown </a>
													<a class="dropdown-item d-none" href="../dropzone.html">
														Dropzone
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../lightbox.html">
														Lightbox
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../tinymce.html">
														TinyMCE
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a class="dropdown-item d-none" href="../inline-player.html">
														Inline player
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<div class="dropend d-none">
														<a
															class="dropdown-item dropdown-toggle"
															href="#sidebar-authentication"
															data-bs-toggle="dropdown"
															data-bs-auto-close="outside"
															role="button"
															aria-expanded="false">
															Authentication
														</a>
														<div class="dropdown-menu">
															<a href="../sign-in.html" class="dropdown-item"> Sign in </a>
															<a href="../sign-in-illustration.html" class="dropdown-item">
																Sign in with illustration
															</a>
															<a href="../sign-in-cover.html" class="dropdown-item"> Sign in with cover </a>
															<a href="../sign-up.html" class="dropdown-item"> Sign up </a>
															<a href="../forgot-password.html" class="dropdown-item"> Forgot password </a>
															<a href="../terms-of-service.html" class="dropdown-item"> Terms of service </a>
															<a href="../auth-lock.html" class="dropdown-item"> Lock screen </a>
														</div>
													</div>
													<div class="dropend d-none">
														<a
															class="dropdown-item dropdown-toggle"
															href="#sidebar-error"
															data-bs-toggle="dropdown"
															data-bs-auto-close="outside"
															role="button"
															aria-expanded="false">
															<!-- Download SVG icon from http://tabler-icons.io/i/file-minus -->
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="icon icon-inline me-1"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																stroke-width="2"
																stroke="currentColor"
																fill="none"
																stroke-linecap="round"
																stroke-linejoin="round">
																<path stroke="none" d="M0 0h24v24H0z" fill="none" />
																<path d="M14 3v4a1 1 0 0 0 1 1h4" />
																<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
																<line x1="9" y1="14" x2="15" y2="14" />
															</svg>
															Error pages
														</a>
														<div class="dropdown-menu">
															<a href="../error-404.html" class="dropdown-item"> 404 page </a>
															<a href="../error-500.html" class="dropdown-item"> 500 page </a>
															<a href="../error-maintenance.html" class="dropdown-item"> Maintenance page </a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://tabler-icons.io/" target="_blank" rel="noreferrer">
											<span class="nav-link-icon d-md-none d-lg-inline-block"
												><!-- Download SVG icon from http://tabler-icons.io/i/ghost -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
														d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" /><line
														x1="10"
														y1="10"
														x2="10.01"
														y2="10" /><line x1="14" y1="10" x2="14.01" y2="10" /><path
														d="M10 14a3.5 3.5 0 0 0 4 0" /></svg>
											</span>
											<span class="nav-link-title"> 2979 icons </span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="/docs">
											<span class="nav-link-icon d-md-none d-lg-inline-block"
												><!-- Download SVG icon from http://tabler-icons.io/i/ghost -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon icon-tabler icon-tabler-book"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
													<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
													<line x1="3" y1="6" x2="3" y2="19" />
													<line x1="12" y1="6" x2="12" y2="19" />
													<line x1="21" y1="6" x2="21" y2="19" />
												</svg>
											</span>
											<span class="nav-link-title"> Documentation </span>
										</a>
									</li>
									<li class="nav-item">
										<a
											href="https://github.com/ubeac/svelte/tree/next"
											class="nav-link"
											target="_blank"
											rel="noreferrer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												class="navbar-nav-svg"
												viewBox="0 0 512 499.36"
												role="img"
												><title>GitHub</title>
												<path
													fill="currentColor"
													fill-rule="evenodd"
													d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" />
											</svg>
											&nbsp; Github
										</a>
									</li>

									{#if false}
										<li class="nav-item active dropdown d-none">
											<a
												class="nav-link dropdown-toggle"
												href="#navbar-help"
												data-bs-toggle="dropdown"
												data-bs-auto-close="outside"
												role="button"
												aria-expanded="false">
												<span class="nav-link-icon d-md-none d-lg-inline-block"
													><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														stroke-width="2"
														stroke="currentColor"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
														><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><circle
															cx="12"
															cy="12"
															r="9" /><line x1="15" y1="15" x2="18.35" y2="18.35" /><line
															x1="9"
															y1="15"
															x2="5.65"
															y2="18.35" /><line x1="5.65" y1="5.65" x2="9" y2="9" /><line
															x1="18.35"
															y1="5.65"
															x2="15"
															y2="9" /></svg>
												</span>
												<span class="nav-link-title"> Help </span>
											</a>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="/docs"> Documentation </a>
												<!-- <a
                        class="dropdown-item"
                        href="https://github.com/ubeac/svelte/tree/next"
                        target="_blank"
                        rel="noreferrer">
                        Source code
                      </a> -->
											</div>
											<a
												href="/"
												on:click|preventDefault={onThemeChange}
												class="nav-link hide-theme-dark"
												aria-label="Enable dark mode"
												data-bs-original-title="Enable dark mode">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
												</svg>
												&nbsp; Toggle theme
											</a>
											<a
												href="/"
												on:click|preventDefault={onThemeChange}
												class="nav-link hide-theme-light"
												aria-label="Enable light mode"
												data-bs-original-title="Enable light mode">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<circle cx="12" cy="12" r="4" />
													<path
														d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
												</svg>
												&nbsp; Toggle theme
											</a>
											<a
												href="https://github.com/ubeac/svelte/tree/next"
												class="nav-link"
												target="_blank"
												rel="noreferrer">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													class="navbar-nav-svg"
													viewBox="0 0 512 499.36"
													role="img"
													><title>GitHub</title>
													<path
														fill="currentColor"
														fill-rule="evenodd"
														d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" />
												</svg>
												&nbsp; Github
											</a>
										</li>
									{/if}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</OffcanvasBody>
		</Offcanvas>
	</El>

	<El d="none" dMd="block">
		<div class="navbar-expand-md">
			<div class="collapse navbar-collapse show">
				<div class="navbar navbar-light">
					<div class="container-xl">
						<ul class="navbar-nav">
							{#if false}
								<li class="nav-item d-none">
									<a class="nav-link" href="../">
										<span class="nav-link-icon d-md-none d-lg-inline-block"
											><!-- Download SVG icon from http://tabler-icons.io/i/home -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline
													points="5 12 3 12 12 3 21 12 19 12" /><path
													d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path
													d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
										</span>
										<span class="nav-link-title"> Home </span>
									</a>
								</li>
								<li class="nav-item d-none">
									<a class="nav-link" href="#form-elements">
										<span class="nav-link-icon d-md-none d-lg-inline-block"
											><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="9 11 12 14 20 6" /><path
													d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
										</span>
										<span class="nav-link-title"> Form elements </span>
									</a>
								</li>
								<li class="nav-item dropdown d-none">
									<a
										class="nav-link dropdown-toggle"
										href="#navbar-extra"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										role="button"
										aria-expanded="false">
										<span class="nav-link-icon d-md-none d-lg-inline-block"
											><!-- Download SVG icon from http://tabler-icons.io/i/star -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
													d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
										</span>
										<span class="nav-link-title"> Extra </span>
									</a>
									<div class="dropdown-menu">
										<div class="dropdown-menu-columns">
											<div class="dropdown-menu-column">
												<a class="dropdown-item" href="../activity.html"> Activity </a>
												<a class="dropdown-item" href="../gallery.html"> Gallery </a>
												<a class="dropdown-item" href="../invoice.html"> Invoice </a>
												<a class="dropdown-item" href="../search-results.html"> Search results </a>
												<a class="dropdown-item" href="../pricing.html"> Pricing cards </a>
												<a class="dropdown-item" href="../pricing-table.html"> Pricing table </a>
												<a class="dropdown-item" href="../faq.html">
													FAQ
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<a class="dropdown-item" href="../users.html"> Users </a>
												<a class="dropdown-item" href="../license.html"> License </a>
											</div>
											<div class="dropdown-menu-column">
												<a class="dropdown-item" href="../logs.html">
													Logs
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<a class="dropdown-item" href="../music.html"> Music </a>
												<a class="dropdown-item" href="../photogrid.html">
													Photogrid
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<a class="dropdown-item" href="../tasks.html">
													Tasks
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<a class="dropdown-item" href="../uptime.html"> Uptime monitor </a>
												<a class="dropdown-item" href="../widgets.html"> Widgets </a>
												<a class="dropdown-item" href="../wizard.html"> Wizard </a>
												<a class="dropdown-item" href="../settings.html">
													Settings
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<a class="dropdown-item" href="../job-listing.html">
													Job listing
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
											</div>
										</div>
									</div>
								</li>
								<li class="nav-item dropdown d-none">
									<a
										class="nav-link dropdown-toggle"
										href="#navbar-layout"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										role="button"
										aria-expanded="false">
										<span class="nav-link-icon d-md-none d-lg-inline-block"
											><!-- Download SVG icon from http://tabler-icons.io/i/layout-2 -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect
													x="4"
													y="4"
													width="6"
													height="5"
													rx="2" /><rect x="4" y="13" width="6" height="7" rx="2" /><rect
													x="14"
													y="4"
													width="6"
													height="7"
													rx="2" /><rect x="14" y="15" width="6" height="5" rx="2" /></svg>
										</span>
										<span class="nav-link-title"> Layout </span>
									</a>
									<div class="dropdown-menu">
										<div class="dropdown-menu-columns">
											<div class="dropdown-menu-column">
												<a class="dropdown-item" href="../layout-horizontal.html"> Horizontal </a>
												<a class="dropdown-item" href="../layout-boxed.html">
													Boxed
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<a class="dropdown-item" href="../layout-vertical.html"> Vertical </a>
												<a class="dropdown-item" href="../layout-vertical-transparent.html"> Vertical transparent </a>
												<a class="dropdown-item" href="../layout-vertical-right.html"> Right vertical </a>
												<a class="dropdown-item" href="../layout-condensed.html"> Condensed </a>
												<a class="dropdown-item" href="../layout-combo.html"> Combined </a>
											</div>
											<div class="dropdown-menu-column">
												<a class="dropdown-item" href="../layout-navbar-dark.html"> Navbar dark </a>
												<a class="dropdown-item" href="../layout-navbar-sticky.html"> Navbar sticky </a>
												<a class="dropdown-item" href="../layout-navbar-overlap.html"> Navbar overlap </a>
												<a class="dropdown-item" href="../layout-rtl.html"> RTL mode </a>
												<a class="dropdown-item" href="../layout-fluid.html"> Fluid </a>
												<a class="dropdown-item" href="../layout-fluid-vertical.html"> Fluid vertical </a>
											</div>
										</div>
									</div>
								</li>
							{/if}
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#navbar-base"
									data-bs-toggle="dropdown"
									data-bs-auto-close="outside"
									role="button"
									aria-expanded="false">
									<span class="nav-link-icon d-md-none d-lg-inline-block"
										><!-- Download SVG icon from http://tabler-icons.io/i/package -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="icon"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline
												points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line
												x1="12"
												y1="12"
												x2="20"
												y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line
												x1="16"
												y1="5.25"
												x2="8"
												y2="9.75" /></svg>
									</span>
									<span class="nav-link-title"> Interface </span>
								</a>
								<div class="dropdown-menu">
									<div class="dropdown-menu-columns">
										<div class="dropdown-menu-column">
											<!--                      <a class="dropdown-item" href="../empty.html"> Empty page </a>-->
											<a class="dropdown-item" href="/interface/accordion"> Accordion </a>
											<!--                      <a class="dropdown-item" href="../blank.html"> Blank page </a>-->
											<a class="dropdown-item" href="/interface/badges">
												Badges
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item " href="/interface/buttons"> Buttons </a>
											<div class="dropend d-none">
												<a
													class="dropdown-item dropdown-toggle"
													href="#sidebar-cards"
													data-bs-toggle="dropdown"
													data-bs-auto-close="outside"
													role="button"
													aria-expanded="false">
													Cards
													<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
												</a>
												<div class="dropdown-menu">
													<a href="../cards.html" class="dropdown-item"> Sample cards </a>
													<a href="../card-actions.html" class="dropdown-item">
														Card actions
														<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
													</a>
													<a href="../cards-masonry.html" class="dropdown-item"> Cards Masonry </a>
												</div>
											</div>
											<a class="dropdown-item d-none" href="../colors.html"> Colors </a>
											<a class="dropdown-item d-none" href="../datagrid.html">
												Data grid
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../datatables.html">
												Datatables
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../dropdowns.html"> Dropdowns </a>
											<a class="dropdown-item" href="/interface/modals"> Modals </a>
											<a class="dropdown-item d-none" href="../maps.html"> Maps </a>
											<a class="dropdown-item d-none" href="../map-fullsize.html"> Map fullsize </a>
											<a class="dropdown-item d-none" href="../maps-vector.html">
												Vector maps
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../navigation.html"> Navigation </a>
											<a class="dropdown-item d-none" href="../charts.html"> Charts </a>
										</div>
										<div class="dropdown-menu-column d-none">
											<a class="dropdown-item" href="../pagination.html">
												<!--                        Download SVG icon from http://tabler-icons.io/i/pie-chart-->
												<!--                        Pagination-->
											</a>
											<a class="dropdown-item d-none" href="../placeholder.html"> Placeholder </a>
											<a class="dropdown-item d-none" href="../steps.html">
												Steps
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../tabs.html"> Tabs </a>
											<a class="dropdown-item d-none" href="../tables.html"> Tables </a>
											<a class="dropdown-item d-none" href="../carousel.html">
												Carousel
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../lists.html"> Lists </a>
											<a class="dropdown-item d-none" href="../typography.html"> Typography </a>
											<a class="dropdown-item d-none" href="../offcanvas.html"> Offcanvas </a>
											<a class="dropdown-item d-none" href="../markdown.html"> Markdown </a>
											<a class="dropdown-item d-none" href="../dropzone.html">
												Dropzone
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../lightbox.html">
												Lightbox
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../tinymce.html">
												TinyMCE
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<a class="dropdown-item d-none" href="../inline-player.html">
												Inline player
												<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
											</a>
											<div class="dropend d-none">
												<a
													class="dropdown-item dropdown-toggle"
													href="#sidebar-authentication"
													data-bs-toggle="dropdown"
													data-bs-auto-close="outside"
													role="button"
													aria-expanded="false">
													Authentication
												</a>
												<div class="dropdown-menu">
													<a href="../sign-in.html" class="dropdown-item"> Sign in </a>
													<a href="../sign-in-illustration.html" class="dropdown-item"> Sign in with illustration </a>
													<a href="../sign-in-cover.html" class="dropdown-item"> Sign in with cover </a>
													<a href="../sign-up.html" class="dropdown-item"> Sign up </a>
													<a href="../forgot-password.html" class="dropdown-item"> Forgot password </a>
													<a href="../terms-of-service.html" class="dropdown-item"> Terms of service </a>
													<a href="../auth-lock.html" class="dropdown-item"> Lock screen </a>
												</div>
											</div>
											<div class="dropend d-none">
												<a
													class="dropdown-item dropdown-toggle"
													href="#sidebar-error"
													data-bs-toggle="dropdown"
													data-bs-auto-close="outside"
													role="button"
													aria-expanded="false">
													<!-- Download SVG icon from http://tabler-icons.io/i/file-minus -->
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon icon-inline me-1"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														stroke-width="2"
														stroke="currentColor"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round">
														<path stroke="none" d="M0 0h24v24H0z" fill="none" />
														<path d="M14 3v4a1 1 0 0 0 1 1h4" />
														<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
														<line x1="9" y1="14" x2="15" y2="14" />
													</svg>
													Error pages
												</a>
												<div class="dropdown-menu">
													<a href="../error-404.html" class="dropdown-item"> 404 page </a>
													<a href="../error-500.html" class="dropdown-item"> 500 page </a>
													<a href="../error-maintenance.html" class="dropdown-item"> Maintenance page </a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://tabler-icons.io/" target="_blank" rel="noreferrer">
									<span class="nav-link-icon d-md-none d-lg-inline-block"
										><!-- Download SVG icon from http://tabler-icons.io/i/ghost -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="icon"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" /><line
												x1="10"
												y1="10"
												x2="10.01"
												y2="10" /><line x1="14" y1="10" x2="14.01" y2="10" /><path d="M10 14a3.5 3.5 0 0 0 4 0" /></svg>
									</span>
									<span class="nav-link-title"> 2979 icons </span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/docs">
									<span class="nav-link-icon d-md-none d-lg-inline-block"
										><!-- Download SVG icon from http://tabler-icons.io/i/ghost -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="icon icon-tabler icon-tabler-book"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
											<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
											<line x1="3" y1="6" x2="3" y2="19" />
											<line x1="12" y1="6" x2="12" y2="19" />
											<line x1="21" y1="6" x2="21" y2="19" />
										</svg>
									</span>
									<span class="nav-link-title"> Documentation </span>
								</a>
							</li>
							<li class="nav-item">
								<a href="https://github.com/ubeac/svelte/tree/next" class="nav-link" target="_blank" rel="noreferrer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										class="navbar-nav-svg"
										viewBox="0 0 512 499.36"
										role="img"
										><title>GitHub</title>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" />
									</svg>
									&nbsp; Github
								</a>
							</li>
							{#if false}
								<li class="nav-item active dropdown d-none">
									<a
										class="nav-link dropdown-toggle"
										href="#navbar-help"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										role="button"
										aria-expanded="false">
										<span class="nav-link-icon d-md-none d-lg-inline-block"
											><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><circle
													cx="12"
													cy="12"
													r="9" /><line x1="15" y1="15" x2="18.35" y2="18.35" /><line
													x1="9"
													y1="15"
													x2="5.65"
													y2="18.35" /><line x1="5.65" y1="5.65" x2="9" y2="9" /><line
													x1="18.35"
													y1="5.65"
													x2="15"
													y2="9" /></svg>
										</span>
										<span class="nav-link-title"> Help </span>
									</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="/docs"> Documentation </a>
										<a
											class="dropdown-item"
											href="https://github.com/ubeac/svelte/tree/next"
											target="_blank"
											rel="noreferrer">
											Source code
										</a>
									</div>
								</li>
							{/if}
						</ul>
						<div>
							<Input placeholder="Search..." />
						</div>
					</div>
				</div>
			</div>
		</div>
	</El>

	<AppBody>
		<Page {container}>
			<slot />
		</Page>
	</AppBody>
	<AppFooter>
		<El {container}>
			<div class="row text-center align-items-center flex-row-reverse">
				<div class="col-lg-auto ms-lg-auto">
					<ul class="list-inline list-inline-dots mb-0">
						<li class="list-inline-item"><a href="/docs" class="link-secondary">Documentation</a></li>
						<li class="list-inline-item">
							<a
								href="https://github.com/ubeac/svelte/tree/next"
								target="_blank"
								class="link-secondary"
								rel="noreferrer">
								Source code
							</a>
						</li>
					</ul>
				</div>
				<div class="col-12 col-lg-auto mt-3 mt-lg-0">
					<ul class="list-inline list-inline-dots mb-0">
						<li class="list-inline-item">
							Copyright © 2023 <a href="/" class="link-secondary">uBeac</a>. All rights reserved.
						</li>
					</ul>
				</div>
			</div>
		</El>
	</AppFooter>
</App>
