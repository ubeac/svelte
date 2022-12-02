<script>
	import { Progress, El } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Progress currentValue="35" minValue="0" maxValue="100" visuallyHidden />
	</El>
</El>
<El row mt="2">
	<El col>
		<Progress currentValue="35" minValue="0" maxValue="100" />
	</El>
</El>
<El row mt="2">
	<El col>
		<Progress currentValue="35" minValue="0" maxValue="100" visuallyHidden progressSize="sm" />
	</El>
</El>
