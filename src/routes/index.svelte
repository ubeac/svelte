<script lang="ts">
	import { Grid } from '@app/components'
</script>

<Grid style="height: 100px;">
	<Grid.Item xs={4} style="background: red;">
		col 1
	</Grid.Item>
	<Grid.Item xs={5} style="background: green;">
		col 2
	</Grid.Item>
	<Grid.Item xs={3} style="background: blue;">
		col 3
	</Grid.Item>
</Grid>

<br />

<Grid style="height: 100px;">
	<Grid.Item xs={4} >
		<div style="background: red;">col 1</div>
	</Grid.Item>
	<Grid.Item xs={5} >
		<div style="background: green;">col 2</div>
	</Grid.Item>
	<Grid.Item xs={3} >
		<div style="background: blue;">col 3</div>
	</Grid.Item>
</Grid>

<style lang="scss" global>
	@import '../scss';
</style>