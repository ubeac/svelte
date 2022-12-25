<script>
	import { Divider, El } from '@ubeac/svelte'
</script>

<El display="flex" gap="2">
	<El textColor="primary">Primary</El>
	<Divider direction="vertical" />
	<El textColor="secondary">Secondary</El>
	<Divider direction="vertical" />
	<El textColor="success">Success</El>
	<Divider direction="vertical" />
	<El textColor="info">Info</El>
	<Divider direction="vertical" />
	<El textColor="danger">Danger</El>
	<Divider direction="vertical" />
	<El textColor="warning">Warning</El>
</El>
