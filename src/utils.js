
export function isBool(x) {
  return typeof x === 'boolean'
}

export function isEmpty(x) {
  return x.length === 0
}

export function isNumber(x) {
  return !isNaN(parseFloat(x))
}

export function isUndefined(x) {
  return typeof x === 'undefined'
}

export function omit(obj, fn) {
  const ret = {}
  for (const [k, v] of Object.entries(obj)) {
    if (!fn(v)) {
      ret[k] = v
    }
  }
  return ret
}
