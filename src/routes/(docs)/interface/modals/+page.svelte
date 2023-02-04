<script lang="ts">
    import {Card, CardBody, El, Button} from '@ubeac/svelte'
    import SimpleModal from "./SimpleModal.svelte";
    import LargeModal from "./LargeModal.svelte";
    import SmallModal from "./SmallModal.svelte";
    import FullWidthModal from "./FullWidthModal.svelte";
    import ScrollableModal from "./ScrollableModal.svelte";
    import FormModal from "./FormModal.svelte";
    import SimpleFormModal from "./SimpleFormModal.svelte";

    let simpleModalIsOpen = false;
</script>
<h1>Modals</h1>
<El lg>
  <El row>
    <El col="12" d="none" dMd="block">
      <Card size="lg">
        <CardBody class="px-4 py-3">
          <SimpleModal/>
          <LargeModal/>
          <SmallModal/>
          <FullWidthModal/>
          <ScrollableModal/>
          <FormModal/>
          <Button>
            Success modal
          </Button>
          <Button class="m-2">
            Danger modal
          </Button>
          <SimpleFormModal/>
        </CardBody>
      </Card>
    </El>
  </El>
</El>

