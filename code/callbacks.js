// @flow

type Callback = string => void

var greet: Callback =
  (str: string) => console.log("Hello " + str)

function forEveryone(func: Callback) {
  [ "Async", "Brighton", "World" ].forEach(func)
}

forEveryone(greet)
