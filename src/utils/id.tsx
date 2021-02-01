import { nanoid } from 'nanoid'

export function stringId(size = 8) {
  return nanoid(size)
}

export default function id(min: number = 100000, max: number = 999999) {
  return getRandomInt(min, max)
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
