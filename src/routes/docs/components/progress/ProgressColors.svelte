<script>
	import { Progress, El } from '@ubeac/svelte'
</script>

<El row>
	<El col><Progress currentValue="35" minValue="0" maxValue="100" color="azure" visuallyHidden /></El>
</El>
<El row mt="2">
	<El col><Progress currentValue="25" minValue="0" maxValue="100" color="warning" visuallyHidden /></El>
</El>
<El row mt="2">
	<El col><Progress currentValue="40" minValue="0" maxValue="100" color="primary" visuallyHidden /></El>
</El>
<El row mt="2">
	<El col><Progress currentValue="30" minValue="0" maxValue="100" color="danger" visuallyHidden /></El>
</El>
<El row mt="2">
	<El col><Progress currentValue="25" minValue="0" maxValue="100" color="success" visuallyHidden /></El>
</El>
<El row mt="2">
	<El col><Progress currentValue="40" minValue="0" maxValue="100" color="pink" visuallyHidden /></El>
</El>
