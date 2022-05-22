<script lang="ts">
	import { Divider } from '@app/components'
</script>

<br />
<Divider />
<br />
<Divider>Test</Divider>
<br />
<Divider placement="start">start</Divider>
<br />
<Divider placement="center">center</Divider>
<br />
<Divider placement="end">end</Divider>
<br />
<Divider type="solid">solid</Divider>
<br />
<Divider type="dotted">dotted</Divider>
<br />
<Divider type="dashed">dashed</Divider>
<br />
<Divider variant="middle">middle</Divider>
<br />
<Divider variant="inset">inset</Divider>
<br />
<Divider variant="full">full</Divider>
<br />
<Divider width="medium">medium</Divider>
<br />
<Divider width="thick">thick</Divider>
<br />
<Divider width="thin">thin</Divider>
<br />
<br />
<br />
<br />
<br />
<div style="height: 300px; display: flex; gap: 10px; background: pink">
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical />
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical>Test</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical placement="start">start</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical placement="center">center</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical placement="end">end</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical type="solid">solid</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical type="dotted">dotted</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical type="dashed">dashed</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical variant="middle">middle</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical variant="inset">inset</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical variant="full">full</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical width="thin">thin</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical width="medium">medium</Divider>
		<span>after</span>
	</div>
	<br />
	<div style="height: 100%; display: flex; align-items: center;">
		<span>before</span>
		<Divider vertical width="thick">thick</Divider>
		<span>after</span>
	</div>
</div>
<br />
<br />

<style lang="scss" global>
	@import '../scss';
</style>
