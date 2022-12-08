<script lang="ts">
	import { Button, El, Icon, Input, Spinner } from '@ubeac/svelte'

	let value: any
</script>

<Input bind:value placeholder="Try to type something..." />
<El>You typed: {value ?? ''}</El>

<div class="input-icon ">
	<input type="text" value="" class="form-control" placeholder="Search…" />
	<span class="input-icon-addon">
		<Icon name="search" />
		<Icon name="search" />
		<Icon name="search" />
	</span>
</div>

<Input placeholder="Search…">
	<span slot="end">
		<Icon name="search" />
	</span>
</Input>

<Input placeholder="Search…">
	<Icon slot="end" name="search" />
</Input>

<Input placeholder="Username">
	<span slot="start">
		<Icon name="user" />
	</span>
</Input>

<div class="input-icon">
	<span class="input-icon-addon">
		<Icon name="user" />
	</span>
	<input type="text" value="" class="form-control" placeholder="Username" />
</div>

<div class="input-group">
	<input type="text" class="form-control" placeholder="Search for…" />
	<Button>Go</Button>
</div>

<div class="input-icon">
	<input type="text" value="" class="form-control" placeholder="Loading…" />
	<span class="input-icon-addon">
		<Spinner size="sm" textMuted animate="border" />
	</span>
</div>

<div class="input-icon">
	<span class="input-icon-addon">
		<Spinner size="sm" textMuted animate="border" />
	</span>
	<input type="text" value="" class="form-control" placeholder="Loading…" />
</div>

<div class="input-group input-group-flat">
	<input type="text" class="form-control" autocomplete="off" />
	<span class="input-group-text">
		<a
			href="/"
			class="link-secondary"
			data-bs-toggle="tooltip"
			aria-label="Clear search"
			data-bs-original-title="Clear search">
			<Icon name="x" />
		</a>
		<a
			href="/"
			class="link-secondary ms-2"
			data-bs-toggle="tooltip"
			aria-label="Search settings"
			data-bs-original-title="Search settings">
			<Icon name="adjustments" />
		</a>
		<a
			href="/"
			class="link-secondary ms-2 disabled"
			data-bs-toggle="tooltip"
			aria-label="Add notification"
			data-bs-original-title="Add notification">
			<Icon name="bell" />
		</a>
	</span>
</div>
