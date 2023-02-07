<script lang="ts">
	import { Card, CardBody, El } from '@ubeac/svelte'

	import DangerModal from './DangerModal.svelte'
	import FormModal from './FormModal.svelte'
	import FullWidthModal from './FullWidthModal.svelte'
	import LargeModal from './LargeModal.svelte'
	import ScrollableModal from './ScrollableModal.svelte'
	import SimpleFormModal from './SimpleFormModal.svelte'
	import SimpleModal from './SimpleModal.svelte'
	import SmallModal from './SmallModal.svelte'
	import SuccessModal from './SuccessModal.svelte'
</script>

<h1>Modals</h1>
<El>
	<El row>
		<El col="12" d="none" dMd="block">
			<Card size="lg">
				<CardBody px="4" py="3">
					<SimpleModal />
					<LargeModal />
					<SmallModal />
					<FullWidthModal />
					<ScrollableModal />
					<FormModal />
					<SuccessModal />
					<DangerModal />
					<SimpleFormModal />
				</CardBody>
			</Card>
		</El>
	</El>
</El>
