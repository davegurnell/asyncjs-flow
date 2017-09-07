// @flow

class Greeting {
  greet() {
    return "Hello!"
  }
}

var greeting: Greeting = new Greeting()

var hello = greeting.greet()
