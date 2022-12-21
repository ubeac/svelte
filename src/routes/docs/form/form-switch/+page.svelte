<script>
	import { Preview } from '@ubeac/svelte'
	import FormSwitchDefault from './FormSwitchDefault.svelte'
	import FormSwitchColumns from './FormSwitchColumns.svelte'
</script>

<h1>FormSwitch</h1>
<p>Use FormSwitch if you want to set Description for your switch.</p>

<Preview src="./FormSwitchDefault.svelte">
	<FormSwitchDefault />
</Preview>

<h2>Column width</h2>
<p>You can set Column width of FormSwitch using <code>cols</code> prop.</p>

<Preview src="./FormSwitchColumns.svelte">
	<FormSwitchColumns />
</Preview>
