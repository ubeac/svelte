<script>
	import { El, Footer, Icon } from '@ubeac/svelte'
</script>

<El container>
	<Footer>
		<El row>
			<El col="6" colMd="2" mb="3">
				<h4>Section</h4>
				<ul class="nav flex-column">
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Features</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Pricing</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">FAQs</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">About</a></li>
				</ul>
			</El>

			<El col="6" colMd="2" mb="3">
				<h4>Section</h4>
				<ul class="nav flex-column">
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Features</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Pricing</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">FAQs</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">About</a></li>
				</ul>
			</El>

			<El col="6" colMd="2" mb="3">
				<h4>Section</h4>
				<ul class="nav flex-column">
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Features</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Pricing</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">FAQs</a></li>
					<li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">About</a></li>
				</ul>
			</El>

			<El colMd="5" offsetMd="1">
				<form>
					<h4>Subscribe to our newsletter</h4>
					<p>Monthly digest of what's new and exciting from us.</p>
					<div class="d-flex flex-column flex-sm-row w-100 gap-2">
						<label for="newsletter1" class="visually-hidden">Email address</label>
						<input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
						<button class="btn btn-primary" type="button">Subscribe</button>
					</div>
				</form>
			</El>
		</El>

		<div class="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
			<p>&copy; 2022 Company, Inc. All rights reserved.</p>
			<ul class="list-unstyled d-flex">
				<li class="ms-3">
					<a class="link-dark text-muted" href="/"><Icon name="brand-twitter" size="2x" /></a>
				</li>
				<li class="ms-3">
					<a class="link-dark text-muted" href="/"><Icon name="brand-instagram" size="2x" /></a>
				</li>
				<li class="ms-3">
					<a class="link-dark text-muted" href="/"><Icon name="brand-facebook" size="2x" /></a>
				</li>
			</ul>
		</div>
	</Footer>
</El>
