// @flow

function greet(str: string) {
  console.log("Hello " + str)
}

function forEveryone(func: string => void) {
  [ "Async", "Brighton", "World" ].forEach(func)
}

forEveryone(greet)
