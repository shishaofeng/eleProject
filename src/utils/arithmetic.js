import { Decimal } from 'decimal.js'

export function add (a, b) {
  a = new Decimal(a)
  b = new Decimal(b)
  return +a.plus(b)
}

export function minus (a, b) {
  a = new Decimal(a)
  b = new Decimal(b)
  return +a.minus(b)
}

export function multiply (a, b) {
  a = new Decimal(a)
  b = new Decimal(b)
  return +a.times(b)
}

export function divide (a, b) {
  a = new Decimal(a)
  b = new Decimal(b)
  return +a.div(b)
}

export function mod (a, b) {
  a = new Decimal(a)
  b = new Decimal(b)
  return +a.mod(b)
}
