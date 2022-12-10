<script lang="ts">
	import { Button, El, Icon, Input, Spinner } from '@ubeac/svelte'

	let value: any
</script>

<Input bind:value placeholder="Try to type something..." />
<El>You typed: {value ?? ''}</El>

<h2>Input group</h2>

<Input placeholder="Username">
	<svelte:fragment slot="before"
		><span class="input-group-text">@</span><Button>test</Button><span class="input-group-text">$0.00</span
		></svelte:fragment>

	<svelte:fragment slot="after"
		><span class="input-group-text">$0.00</span><Button>test</Button><Button>test</Button><span class="input-group-text"
			>@</span
		></svelte:fragment>
</Input>

<Input placeholder="Username">
	<svelte:fragment slot="before"><span>@</span><Button>test</Button><span>$0.00</span></svelte:fragment>

	<svelte:fragment slot="after"
		><span>$0.00</span><Button>test</Button><Button>test</Button><span>@</span></svelte:fragment>
</Input>

<Input placeholder="Username">
	<span slot="after">
		<a href="/" class="input-group-link">Show password</a>
	</span>
</Input>

<Input placeholder="Recipient's username">
	<span slot="after" class="input-group-text">@example.com</span>
</Input>
<div class="input-icon mb-3">
	<span class="input-icon-addon">
		<!-- Download SVG icon from http://tabler-icons.io/i/user -->
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
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="7" r="4" /><path
				d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
	</span>
	<input type="text" value="" class="form-control" placeholder="Username" />
</div>

<Input>
	<span slot="start" class="input-icon-addon">
		<!-- Download SVG icon from http://tabler-icons.io/i/user -->
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
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="7" r="4" /><path
				d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
	</span>
	<input type="text" value="" class="form-control" placeholder="Username" />
</Input>
<!-- 

<div class="input-group mb-3">
	<span class="input-group-text" id="basic-addon1">@</span>
	<input
		type="text"
		class="form-control"
		placeholder="Username"
		aria-label="Username"
		aria-describedby="basic-addon1" />
</div>

<div class="input-group input-group-flat">
	<span class="input-group-text"> test </span>
	<input type="text" class="form-control" autocomplete="off" />
	<span class="input-group-text"> test </span>
</div>

<div class="input-icon ">
	<input type="text" value="" class="form-control" placeholder="Search…" />
	<span class="input-icon-addon">
		<Icon name="search" />
		<Icon name="search" />
		<Icon name="search" />
	</span>
</div> -->
<!-- 
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
</div> -->
