<script>
	import { El, Footer, Icon } from '@ubeac/svelte'
</script>

<El container>
	<Footer py="3" borderTop class="d-flex flex-wrap justify-content-between align-items-center">
		<div class="col-md-4 d-flex align-items-center">
			<a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
				<Icon name="brand-bootstrap" size="3x" />
			</a>
			<span class="mb-3 mb-md-0 text-muted">&copy; 2022 uBeac</span>
		</div>

		<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li class="ms-3">
				<a class="text-muted" href="/"><Icon name="brand-twitter" size="2x" /></a>
			</li>
			<li class="ms-3">
				<a class="text-muted" href="/"><Icon name="brand-instagram" size="2x" /></a>
			</li>
			<li class="ms-3">
				<a class="text-muted" href="/"><Icon name="brand-facebook" size="2x" /></a>
			</li>
		</ul>
	</Footer>
</El>
