<script lang="ts">
	import { Button, Card, CardBody, CardHeader, El, Icon } from '@ubeac/svelte'

	const baseColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light']
	const exteraColors = [
		'blue',
		'azure',
		'indigo',
		'purple',
		'pink',
		'red',
		'orange',
		'yellow',
		'lime',
		'green',
		'teal',
		'cyan',
	]
	const icons = [
		'facebook',
		'twitter',
		'google',
		'youtube',
		'vimeo',
		'dribbble',
		'github',
		'instagram',
		'pinterest',
		'vk',
		'flickr',
		'bitbucket',
	]
	function capitalizeFirstLetter(name: string): string {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}
</script>

<h1>Buttons</h1>
<El>
	<El col="12" d="none" dMd="block">
		<Card size="lg">
			<CardHeader><h3>Standard Buttons</h3></CardHeader>
			<CardBody class="p-3">
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Normal</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} class="w-full">
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Active State</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} class="w-full" active>
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Disabled</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} class="w-full" disabled>
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
			</CardBody>
		</Card>

		<!-- Outline Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Outline Buttons</h3></CardHeader>
			<CardBody class="p-3">
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Normal</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} outline class="w-full">
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Active State</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} outline class="w-full" active>
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Disabled</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} outline class="w-full" disabled>
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
			</CardBody>
		</Card>

		<!-- Ghost Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Ghost Buttons</h3></CardHeader>
			<CardBody class="p-3">
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Normal</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} ghost class="w-full">
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Active State</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} ghost class="w-full" active>
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Disabled</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} ghost class="w-full" disabled>
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
			</CardBody>
		</Card>

		<!-- Square Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Square Buttons</h3></CardHeader>
			<CardBody class="p-3">
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Normal</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} tile class="w-full">
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
			</CardBody>
		</Card>

		<!-- Pill Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Pill Buttons</h3></CardHeader>
			<CardBody class="p-3">
				<El row alignItems="center">
					<El colXl="2" class="font-weight-semibold">Normal</El>
					{#each baseColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} pill class="w-full">
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
			</CardBody>
		</Card>

		<!-- Exera Colors Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Exera Colors</h3></CardHeader>
			<CardBody class="p-3">
				<El row alignItems="center">
					{#each exteraColors as color, index}
						<El colXl class={color == 'light' ? 'py-3 bg-dark' : 'py-3'}>
							<Button {color} class="w-full">
								{capitalizeFirstLetter(color)}
							</Button>
						</El>
					{/each}
				</El>
			</CardBody>
		</Card>

		<!-- Icons  Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Icons Buttons</h3></CardHeader>
			<CardBody class="p-3">
				{#each icons as brand, index}
					<Button color={brand} class="ms-3 pe-2 ps-2">
						<Icon name="brand-{brand}" />
					</Button>
				{/each}
			</CardBody>
		</Card>

		<!-- Social  Buttons -->
		<Card size="lg" class="mt-3">
			<CardHeader><h3>Social Colors</h3></CardHeader>
			<CardBody class="p-3">
				{#each icons as brand, index}
					<Button color={brand} class="ms-3 my-3 pe-4 ps-4">
						{capitalizeFirstLetter(brand)}
						<Icon name="brand-{brand}" />
					</Button>
				{/each}
			</CardBody>
		</Card>
	</El>
</El>
