import Card from './Card.svelte'
import { default as CardActions } from './CardActions.svelte'
import { default as CardBody } from './CardBody.svelte'
import { default as CardFooter } from './CardFooter.svelte'
import { default as CardHeader } from './CardHeader.svelte'
import { default as CardMedia } from './CardMedia.svelte'
import { default as CardStamp } from './CardStamp.svelte'
import { default as CardStatus } from './CardStatus.svelte'
import { default as CardSubtitle } from './CardSubtitle.svelte'
import { default as CardTitle } from './CardTitle.svelte'

Card.Actions = CardActions
Card.Body = CardBody
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Media = CardMedia
Card.Status = CardStatus
Card.Stamp = CardStamp
Card.Subtitle = CardSubtitle
Card.Title = CardTitle

export { Card }
