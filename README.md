# Getting into the Flow: Static Types for Javascript

Copyright 2017 Dave Gurnell.

Slides for a [talk][talk] at [Async][async] on 7th September 2017.

## License

<a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="https://purl.org/dc/terms/" property="dct:title">Getting into the Flow: Static Types for Javascript</span> by <a xmlns:cc="https://creativecommons.org/ns#" href="https://davegurnell.com" property="cc:attributionName" rel="cc:attributionURL">Dave Gurnell</a> is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

## Abstract

Static type systems are all the rage these days.
Languages like [Typescript][typescript], [Elm][elm], and [Purescript][purescript],
use static types to reason about code without running it,
eliminating certain classes of bugs and making code easier to understand.

However, adopting a new programming language comes at a cost.
Wouldn't it be nice if we could benefit from static types
in our existing Javascript code
without jumping over to a new language?

Enter Facebook's [Flow][flow],
a static type checker for ordinary Javascript.
In this talk I'll show you how to add Flow
to an existing Javascript project.
I'll demonstrate how Flow's static types work and how
they'll help uncover bugs in your code.
Finally, I'll talk about how to adjust your programming style
to get the most benefit from static types.

---

[Dave][dave-twitter] is a [Scala][scala] developer moonlighting as a Javascripter.
By day he works for Brighton-based Scala consultancy [Underscore][underscore]
(no relation to the popular Javascript library).
He spends most of his time [writing software][cartographer],
[writing books about writing software][underscore-books],
and [building synthesizers from the souls of tormented cats][meowsynth].

[talk]: https://asyncjs.com/types-for-js
[async]: https://asyncjs.com
[typescript]: https://www.typescriptlang.org
[elm]: http://elm-lang.org
[purescript]: http://www.purescript.org
[flow]: https://flow.org
[dave]: http://davegurnell.com
[dave-twitter]: https://twitter.com/davegurnell
[scala]: https://scala-lang.org
[underscore]: https://underscore.io
[cartographer]: https://cartographer.io
[underscore-books]: https://underscore.io/books
[meowsynth]: http://meowsynth.com
