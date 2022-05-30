---
title: Button
description: Description
---

<script lang="ts">
  import { Button, Icon } from '@app/components'
  import Preview from "@app/sections/Preview.svelte";
</script>

# Button

## Import the button component from package

```js
import { Button } from './button'
```

## Use the button component to create a button

### Default Button

<Preview>
  <Button>Button</Button>
</Preview>

```html
<button>Button</button>
```

### Block Button

<Preview>
  <Button block>block</Button>
</Preview>

```html
<button block>block</button>
```

### Button with icon

<Preview>
  <Button icon>
    <Icon name="sun" />
  </Button>
</Preview>

```html
<button icon>
	<Icon name="sun" />
</button>
```

### Flat Button

<Preview>
  <Button flat>flat</Button>
</Preview>

```html
<button flat>flat</button>
```

### Button with green color

<Preview>
  <Button color="green">green</Button>
</Preview>

```html
<button color="green">green</button>
```

### Button with secondary color

<Preview>
  <Button color="secondary">secondary</Button>
</Preview>

```html
<button color="secondary">secondary</button>
```

### Tile Button

<Preview>
  <Button tile>tile</Button>
</Preview>

```html
<button tile>tile</button>
```

### Tile Flat Button

<Preview>
  <Button tile flat>tile flat</Button>
</Preview>

```html
<button tile flat>tile flat</button>
```

### Outline blue Button

<Preview>
  <Button color="blue" outline>outline</Button>
</Preview>

```html
<button color="blue" outline>outline</button>
```

### Button with href

<Preview>
  <Button href="/">Href</Button>
</Preview>

```html
<button href="/">Href</button>
```

### Button Group

<Preview>
  <Button.Group>
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Last</Button>
  </Button.Group>
</Preview>

```html
<Button.Group>
	<button>First</button>
	<button>Second</button>
	<button>Last</button>
</Button.Group>
```
