<script>
	import { FormSwitch, Button, FormFieldset, FormHint, El } from '@ubeac/svelte'
</script>

<El container>
	<FormFieldset label="Form Switches">
		<El row>
			<FormSwitch col="8" label="2/3 width:" text="Switch 1" />
			<FormSwitch col="4" value label="1/3 width:" text="Switch 2" />
			<FormSwitch col="4" value label="1/3 width:" text="Switch 3" />
			<FormSwitch col="4" label="1/3 width:" text="Switch 4" required />
			<FormSwitch col="4" label="1/3 width:" text="Switch 5" required>
				<FormHint slot="message" state="invalid">This field is required</FormHint>
			</FormSwitch>

			<El offset="9" col="auto">
				<Button>Submit</Button>
			</El>
		</El>
	</FormFieldset>
</El>
