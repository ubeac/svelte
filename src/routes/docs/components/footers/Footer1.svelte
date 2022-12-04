<script>
	import { El, Footer, Icon } from '@ubeac/svelte'
</script>

<El container>
	<Footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
		<El tag="p" colMd="4" mb="0" textMuted class="text-muted">&copy; 2023 uBeac</El>

		<a
			href="/"
			class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
			<Icon name="brand-bootstrap" size="3x" />
		</a>

		<ul class="nav col-md-4 justify-content-end">
			<li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Features</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Pricing</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-muted">FAQs</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-muted">About</a></li>
		</ul>
	</Footer>
</El>
