---
title: Trying Crystal (the language)
snippet: Last night a new-ish language named [Crystal](http://crystal-lang.org/) had climbed to the top of [Hacker News](https://web.archive.org/web/20150606041438/https://news.ycombinator.com/). I was bored, I clicked through, and a magical gem convinced me I had to give Crystal a try.
---

Last night a new-ish language named [Crystal](http://crystal-lang.org/) had climbed to the top of [Hacker News](https://web.archive.org/web/20150606041438/https://news.ycombinator.com/). I was bored, I clicked through, and a magical gem convinced me I had to give Crystal a try.

![Crystal Logo](/static/crystal-lang-logo.gif)

## ruby syntax, c-level performance

The front page of the projects site pretty clearly shows how similar Crystal is to ruby. Beyond the similarities in name, they both share some of the things I really like about ruby:

 * trailing `unless` and `if`
 * implicit returns
 * funky method names, like `puts`, `Array#slice!`, and `File::exists?`
 * `"#{templated} string"`

And most of the things I don’t

 * using the `end` keyword to close a “block”
 * class getters and setters versus properties

```cr
class Doc
  property breed
  property weight

  def initialize
    # these set instance variables, which are then returned by the
    # Dog#breed and Dog#weight accessor functions. They do not change
    # the actually value of dog.weight or doc.breed, just the value those
    # functions will return
    @breed = "collie"
    @weight = 45
  end
end
```

## 🚦 install with brew

After scanning the project’s docs I installed the compiler, which on OSX was super simple using homebrew:

```sh
brew tap manastech/crystal
brew install crystal
```

This gives you the `crystal` cli, which can do a host of things for you. Run `crystal --help` for a quick run-down.

## holy hello world 🚀

One thing I really appreciate about Crystal is it’s devotion to keeping the experience ruby-like and it mostly delivers. For a young project that’s pretty impressive.

To start a new application, the `crystal` cli offers the `init` command. Run this to create a new hello_world directory and application.

```sh
crystal init app hello_world
cd hello_world
```

Then open up `src/hello_world.cr` and replace

```cr
# TODO Put your code here
```

with

```cr
puts "hello world"
```

Then, you just need to run this the `src/hello_world.cr` file with the `crystal` compiler.

```cr
crystal src/hello_world.cr # prints "hello world"
```

Isn’t that stupid easy? I almost can’t believe that it’s creating a single binary file that executing my very ruby-like code.

# doing something web-y

My first reaction to this little hello world exercise left me excited to see what else was out there. I wanted to try doing some web stuff with Crystal, so I started to look around for some sort of web framework. A few projects popped up:

 * [amatista](https://github.com/werner/amatista) - Not sure what it’s relationship with [Amethyst](https://github.com/Codcore/Amethyst) is, but I found this one first 😜
 * [moonshine](https://github.com/dhruvrajvanshi/Moonshine)

To get the ball rolling I pulled in [github.com/werner/todo_crystal](https://github.com/werner/todo_crystal) as a stating point. Not only did it already have “web-stuff” I could read, but it was written as an example app for amatista.

Right around here is when I realized that a **very** important part of the ruby experience is missing from Crystal: gems! 🙀 There is a [very popular issue](https://github.com/manastech/crystal/issues/220) where people are discussing what a dependency management system for Crystal should look like, but for now there is a rudimentary dependency management task provided by the cli: `crystal deps`. This command reads a `Packagefile` and uses it to pull repositories from Github into your project. To add amatista to your project you can create a `Packagefile` that looks like this:

```cr
deps do
  github "werner/amatista"
end
```

Then, run `crystal deps` and it will install the amatista dependency into a `.deps` directory in your project. This `.deps` directory reminds me of node.js’s `node_modules` directory with a local copy of the dependencies needed for this specific project. It is a style that I really like.

# maybe a better name is emerald

So, I’m really excited for the future of Crystal. It seems like it could be a fantastic way to write super-performant bits of a system when rust or go is too big a context switch from us who work in super high-level languages on a daily basis. For now though I’m curious to see how the dependency system issue gets resolved and what type of concurrency structures are put in place to really get the most out of the low-level at which Crystal operates.

I did end up publishing [a little library](https://github.com/spalger/crystal-mime) last night that will allow the different web frameworks to quit with [this](https://github.com/werner/amatista/blob/908a6ee3890c2ebf402e5d67266548256518a89f/src/amatista/response.cr#L13-L16) [nonsense](https://github.com/dhruvrajvanshi/Moonshine/blob/96cabb3fc20e4412b8b0327279c4a6043be568d0/src/moonshine/http/handler.cr#L74-L80) and really support static-file serving. Until the dependency system gets resolved though, I’m afraid that dependencies are only resolved one level deep, so adding this to amatista is a waste of time.

Hopefully this project, which started development back in September 2012, will mature nicely and fight for some of rust and go’s market, for now though it is far too green for me.

until next time,<br>
Spencer