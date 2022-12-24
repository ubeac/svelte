<script type="ts">
	import { App, AppBody, AppFooter, Avatar, El, Page, Progress } from '@ubeac/svelte'
	import type { Themes } from '@ubeac/svelte'
	import 'bootstrap/dist/js/bootstrap.bundle.min.js'

	import { browser } from '$app/environment'
	import { afterNavigate, beforeNavigate } from '$app/navigation'

	let container: ContainerMaxWidths = 'md'
	let theme: Themes = 'light'
	let progressValue = 0
	let updater: any

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
		if (browser) {
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
		startInterval()
	})

	afterNavigate(() => {
		progressValue = 1
		clearInterval(updater)
	})

	const onThemeChange = () => (theme === 'light' ? (theme = 'dark') : (theme = 'light'))
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
	<header class="navbar navbar-expand-md navbar-light d-print-none">
		<div class="container-xl">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbar-menu"
				aria-controls="navbar-menu"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon" />
			</button>
			<h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
				<a href=".">
					<img src="/logo.svg" width="110" height="32" alt="uBeac" class="navbar-brand-image" />
				</a>
			</h1>
			<div class="navbar-nav flex-row order-md-last">
				<div class="nav-item d-none d-md-flex me-3">
					<div class="btn-list">
						<a href="https://github.com/ubeac/svelte/tree/next" class="btn" target="_blank" rel="noreferrer">
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
								<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
							Source code
						</a>
					</div>
				</div>
				<div class="d-none d-md-flex  me-3">
					<a
						href="/"
						on:click={onThemeChange}
						class="nav-link px-0 hide-theme-dark"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						aria-label="Enable dark mode"
						data-bs-original-title="Enable dark mode">
						<!-- Download SVG icon from http://tabler-icons.io/i/moon -->
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
								d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
					</a>
					<a
						href="/"
						on:click={onThemeChange}
						class="nav-link px-0 hide-theme-light"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						aria-label="Enable light mode"
						data-bs-original-title="Enable light mode">
						<!-- Download SVG icon from http://tabler-icons.io/i/sun -->
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
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><path
								d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
					</a>
				</div>
				<div class="nav-item dropdown">
					<a href="/" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
						<Avatar size="sm"><img alt="AV" src="/avatars/000m.jpg" /></Avatar>
						<!-- <span class="avatar avatar-sm" style="background-image: url(./static/avatars/000m.jpg)" /> -->
						<div class="d-none d-xl-block ps-2">
							<div>Paweł Kuna</div>
							<div class="mt-1 small text-muted">UI Designer</div>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
						<a href="/" class="dropdown-item">Status</a>
						<a href="/" class="dropdown-item">Profile</a>
						<a href="/" class="dropdown-item">Feedback</a>
						<div class="dropdown-divider" />
						<a href="./settings.html" class="dropdown-item">Settings</a>
						<a href="./sign-in.html" class="dropdown-item">Logout</a>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div class="navbar-expand-md">
		<div class="collapse navbar-collapse" id="navbar-menu">
			<div class="navbar navbar-light">
				<div class="container-xl">
					<ul class="navbar-nav">
						<li class="nav-item">
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
											points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path
											d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
								</span>
								<span class="nav-link-title"> Home </span>
							</a>
						</li>
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
										<a class="dropdown-item" href="../empty.html"> Empty page </a>
										<a class="dropdown-item" href="../accordion.html"> Accordion </a>
										<a class="dropdown-item" href="../blank.html"> Blank page </a>
										<a class="dropdown-item" href="../badges.html">
											Badges
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../buttons.html"> Buttons </a>
										<div class="dropend">
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
										<a class="dropdown-item" href="../colors.html"> Colors </a>
										<a class="dropdown-item" href="../datagrid.html">
											Data grid
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../datatables.html">
											Datatables
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../dropdowns.html"> Dropdowns </a>
										<a class="dropdown-item" href="../modals.html"> Modals </a>
										<a class="dropdown-item" href="../maps.html"> Maps </a>
										<a class="dropdown-item" href="../map-fullsize.html"> Map fullsize </a>
										<a class="dropdown-item" href="../maps-vector.html">
											Vector maps
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../navigation.html"> Navigation </a>
										<a class="dropdown-item" href="../charts.html"> Charts </a>
									</div>
									<div class="dropdown-menu-column">
										<a class="dropdown-item" href="../pagination.html">
											<!-- Download SVG icon from http://tabler-icons.io/i/pie-chart -->
											Pagination
										</a>
										<a class="dropdown-item" href="../placeholder.html"> Placeholder </a>
										<a class="dropdown-item" href="../steps.html">
											Steps
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../tabs.html"> Tabs </a>
										<a class="dropdown-item" href="../tables.html"> Tables </a>
										<a class="dropdown-item" href="../carousel.html">
											Carousel
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../lists.html"> Lists </a>
										<a class="dropdown-item" href="../typography.html"> Typography </a>
										<a class="dropdown-item" href="../offcanvas.html"> Offcanvas </a>
										<a class="dropdown-item" href="../markdown.html"> Markdown </a>
										<a class="dropdown-item" href="../dropzone.html">
											Dropzone
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../lightbox.html">
											Lightbox
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../tinymce.html">
											TinyMCE
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<a class="dropdown-item" href="../inline-player.html">
											Inline player
											<span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
										</a>
										<div class="dropend">
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
										<div class="dropend">
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
													stroke-linejoin="round"
													><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path
														d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><line
														x1="9"
														y1="14"
														x2="15"
														y2="14" /></svg>
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
						<li class="nav-item dropdown">
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
						<li class="nav-item dropdown">
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
						<li class="nav-item active dropdown">
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
					</ul>
				</div>
			</div>
		</div>
	</div>
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
							Copyright © 2023 <a href=".." class="link-secondary">uBeac</a>. All rights reserved.
						</li>
					</ul>
				</div>
			</div>
		</El>
	</AppFooter>
</App>
