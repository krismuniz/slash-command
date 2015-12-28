# slash-command

[![Build Status](https://travis-ci.org/krismuniz/slash-command.svg?branch=master)](https://travis-ci.org/krismuniz/slash-command) [![License:MIT](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT) [![Coverage Status](https://coveralls.io/repos/krismuniz/slash-command/badge.svg?branch=master&service=github)](https://coveralls.io/github/krismuniz/slash-command?branch=master)

A simple ***slash command parsing module*** written in JavaScript. In other words, a function that parses a string and returns an object which separates the command keyword(s) from the body of the command.

##### Example:
```js
slashCommand('/mycommand This is the command body');
```
`slashCommand()` returns the following object:
```js
{
  slashcommand: '/mycommand', // command(s) as stated
  command: 'mycommand', // main command name (first in string)
  subcommands: null, // array of subcommands; see below for more info.
  body: 'This is the command body', // the body of the command
  original: '/mycommand This is the command body' // the original string
}
```

## Features

This tiny module abstracts away the string-parsing process: string manipulation, matching regular expressions, mapping arrays, replacing strings, etc.

`slash-command` takes a string, parses it, and returns an object containing the slash command keywords, subcommands (see below), body, and the original string.

#### Use cases

`slash-command` is useful when building:
* chat clients that support slash commands
* CLI-like software
* messaging platform chatbots (e.g. for Slack or HipChat)
* platform-agnostic conversational interfaces and bots (e.g. email, SMS, IRC, etc.)
* Twitter bots, Tumblr bots, etc.

## Installation

Installing the ```slash-command``` module is as simple as installing any other [npm](https://npmjs.com) module:

```shell
$ npm install slash-command --save
```

## Usage

`slash-command` exports a single function, so it is quite to use:

```js
var slashCommand = require('slash-command');
/* OR, some ES6 module-loading love: */
import slashCommand from 'slash-command';

slashCommand('/tweet This is a tweet.');
```
`slashCommand()` returns the following object:
```js
{
  slashcommand: '/tweet', // command(s) as stated
  command: 'tweet', // main command (first in string)
  subcommands: null, // array of all subcommands; null if there are none
  body: 'This is a tweet.', // the body of the command
  original: '/tweet This is a tweet.' // the original string
}

```

##### Subcommands

Let's suppose there are multiple consecutive slash commands in the string. We could use them!

I call these **subcommands**, and `slash-command` supports them very well. It returns all of them in a "`subcommands`" array inside the result object (in order of appearance; from left to right) so you can do whatever crazy thing you want with them.
```js
var slashCommand = require('slash-command');
/* or, for some ES6 module-loading love */
import slashCommand from 'slash-command';

slashCommand('/google/calendar Meeting with Sarah at 6pm.');
```
`slashCommand()` returns the following object:
```js
{
  slashcommand: '/google/calendar', // command(s) as stated
  command: 'google', // main command (first in string)
  subcommands: ['calendar'], // array of all subcommands
  body: 'Meeting with Sarah at 6pm.', // the body of the command
  original: '/google/calendar Meeting with Sarah at 6pm.' // the original string
}
```

##### Required Parameters:

* `string` (`[string]`): The string argument; contains a slash command.

## Testing

Want to run the tests? Go ahead and type the following in your terminal/command prompt:

```shell
$ npm install
$ npm test
```

## Contributing

#### Bug Reports & Feature Requests

Something does not work as expected or perhaps you think this module needs a feature? Please [open an issue](https://github.com/krismuniz/slash-command/issues/new) using GitHub's [issue tracker](https://github.com/krismuniz/slash-command/issues).

#### Developing

Pull Requests (PRs) are welcome. Just make sure you follow the same basic style conventions as the original code.

## License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

---

<center>
  <b>Copyright (c) 2015 Kristian Muñiz [https://krismuniz.com/]</b>
</center>
