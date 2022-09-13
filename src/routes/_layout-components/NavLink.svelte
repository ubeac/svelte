<script>
	import { Icon } from '$lib/components'

	export let href = '/'
	export let icon = ''

	let className = ''
	export { className as class }
</script>

<a {href} class="nav-link {className}">
	{#if icon !== ''}
		<span class="nav-link-icon d-md-none d-lg-inline-block">
			<Icon name={icon} />
		</span>
	{/if}

	<span class="nav-link-title">
		<slot />
	</span>
</a>
