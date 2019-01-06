function identity(value) {
  return value
}

function spreadArgs(fn) {
  return function(args) {
    if (!Array.isArray(args)) throw new Error('Args should be an array')
    
    return fn(...args)
  }
}

function gatherArgs(fn) {
  return function(...args) {
    return fn(args)
  }
}

function unary(fn) {
  return function singleArgument(arg) {
    return fn(arg)
  }
}

function partial(fn, ...firstArguments) {
  return function partialApplied(...lastArguments) {
    return fn(...firstArguments, ...lastArguments)
  }
}

function partialRight(fn, ...firstArguments) {
  return function partialApplied(...lastArguments) {
    return fn(...lastArguments, ...firstArguments)
  }
}