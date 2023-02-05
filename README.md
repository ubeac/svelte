# uBeac - Svelte UI Component Library

[![npm version](https://img.shields.io/npm/v/@ubeac/svelte.svg?style=flat-square)](https://www.npmjs.com/package/@ubeac/svelte)
[![Build Status](https://img.shields.io/travis/ubeac/svelte.svg?style=flat-square)](https://travis-ci.org/ubeac/svelte)
[![License](https://img.shields.io/npm/l/@ubeac/svelte.svg?style=flat-square)](https://github.com/ubeac/svelte/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/@ubeac/svelte.svg?style=flat-square)](https://www.npmjs.com/package/@ubeac/svelte)
[![GitHub issues](https://img.shields.io/github/issues/ubeac/svelte.svg?style=flat-square)](https://github.com/ubeac/svelte/issues)
[![GitHub stars](https://img.shields.io/github/stars/ubeac/svelte.svg?style=flat-square)](https://github.com/ubeac/svelte/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ubeac/svelte.svg?style=flat-square)](https://github.com/ubeac/svelte/network)

uBeac is a powerful and flexible Svelte UI component library, designed to help developers build enterprise-grade web applications quickly and easily. With a focus on rapid application development and framework independence, uBeac is the perfect complement to any CSS framework. The component's UI is inspired by [Tabler](https://tabler.github.io/) UI Kit built on top of Bootstrap css.

## Installation

To install uBeac, you can use npm:

```bash
npm install @ubeac/svelte
```

## Usage

Once installed, you can import the components and use them in your Svelte application:

```html
<script>
	import { Button } from '@ubeac/svelte'
</script>

<Button>Hello uBeac</Button>
```

## Styles

uBeac components have default styles which is based on tabler. which you can use like this:

```svelte
<script>
	import {Button} from '@ubeac/svelte'
	import '@ubeac/svelte/styles/tabler.css'

</script>

<Button>Hello World!</Button>
```

## Demo

Check out the [documentation website](https://svelte.ubeac.io/) for live demos of each component and detailed usage instructions.
