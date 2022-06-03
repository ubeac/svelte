import Card from './Card.svelte'
import { default as CardBody } from './CardBody.svelte'
import { default as CardFooter } from './CardFooter.svelte'
import { default as CardHeader } from './CardHeader.svelte'
import { default as CardMedia } from './CardMedia.svelte'
import { default as CardStatus } from './CardStatus.svelte'
import { default as CardTitle } from './CardTitle.svelte'

Card.Body = CardBody
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Media = CardMedia
Card.Status = CardStatus
Card.Title = CardTitle

export { Card }
