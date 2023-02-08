<script lang="ts">
  import { Card, CardBody, El, Badge, Button } from '@ubeac/svelte'

  const badgeSamples = [
    "blue",
    "azure",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "cyan"
  ]

  function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
</script>
<h1>Badges</h1>
<El lg>
  <El row>
    <El col="4" d="none" dMd="block">
      <Card size="lg">
        <CardBody class="px-4 py-3">
          <El tag="h1">
            Example heading
            <Badge color="secondary">New</Badge>
          </El>
          <El tag="h2">
            Example heading
            <Badge color="secondary">New</Badge>
          </El>
          <El tag="h3">
            Example heading
            <Badge color="secondary">New</Badge>
          </El>
          <El tag="h4">
            Example heading
            <Badge color="secondary">New</Badge>
          </El>
          <El tag="h5">
            Example heading
            <Badge color="secondary">New</Badge>
          </El>
          <El tag="h6">
            Example heading
            <Badge color="secondary">New</Badge>
          </El>
        </CardBody>
      </Card>
    </El>
    <El col="8">
      <Card size="lg">
        <CardBody class="p-3">
          {#each badgeSamples as badgeSample,index}
            <Badge color="{badgeSample}" class="mx-1">
              <El tag="strong">{capitalizeFirstLetter(badgeSample)}</El>
            </Badge>
          {/each}
        </CardBody>
      </Card>
      <Card size="lg" class="my-3">
        <CardBody class="p-3">
          {#each badgeSamples as badgeSample,index}
            <Badge color="{badgeSample}" class="mx-1" ghost>
              <El tag="strong">{capitalizeFirstLetter(badgeSample)}</El>
            </Badge>
          {/each}
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody class="p-3">
          {#each badgeSamples as badgeSample,index}
            <Badge color="{badgeSample}" class="mx-1" outline>
              <El tag="strong">{capitalizeFirstLetter(badgeSample)}</El>
            </Badge>
          {/each}
        </CardBody>
      </Card>
    </El>
  </El>
  <El row class="mt-3">
    <El col="3" d="none" dMd="block">
      <Card size="lg">
        <CardBody class="p-3">
          <div class="w-100 d-flex justify-content-between">
            Action
            <Badge color="blue">12</Badge>
          </div>
          <div class="w-100 d-flex justify-content-between align-items-center mt-2">
            Another action
            <Badge dot color="green" />
          </div>
        </CardBody>
      </Card>
    </El>
    <El col="9" d="none" dMd="block">
      <Card size="lg">
        <CardBody class="p-3">
          {#each badgeSamples as badgeSample,index}
            <Button class="m-1">
              {capitalizeFirstLetter(badgeSample)} badge
              <Badge color="{badgeSample}">{index + 1}</Badge>
            </Button>
          {/each}
        </CardBody>
      </Card>
      <Card size="lg" class="mt-3">
        <CardBody class="p-3">
          {#each badgeSamples as badgeSample,index}
            <Button position="relative" class="m-1">
              {capitalizeFirstLetter(badgeSample)} badge
              <Badge color="{badgeSample}" pill notification>{index + 1}</Badge>
            </Button>
          {/each}
        </CardBody>
      </Card>
      <Card size="lg" class="mt-3">
        <CardBody class="p-3">
          {#each badgeSamples as badgeSample,index}
            <Button position="relative" class="m-1">
              {capitalizeFirstLetter(badgeSample)} badge
              <Badge color="{badgeSample}" dot blink notification>{index + 1}</Badge>
            </Button>
          {/each}
        </CardBody>
      </Card>
    </El>
  </El>
</El>

