<script lang="ts">
  import { type ContainerMaxWidths, El, PageBody } from '@ubeac/svelte'

  let container: ContainerMaxWidths = 'lg'
  let title = ''
  let description = ''
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="uBeac" />
</svelte:head>

<PageBody>
  <El {container}>
    <El row>
      <El col="12">
        <slot />
      </El>
    </El>
  </El>
</PageBody>
