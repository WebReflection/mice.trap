# mice.trap

[![Build Status](https://travis-ci.com/WebReflection/mice.trap.svg?branch=master)](https://travis-ci.com/WebReflection/mice.trap) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/mice.trap/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/mice.trap?branch=master)

<sup>**Social Media Photo by [Ricky Kharawala](https://unsplash.com/@sweetmangostudios) on [Unsplash](https://unsplash.com/)**</sup>

A "_mouse operator_" implementation, from this [es-discuss thread](https://esdiscuss.org/topic/optional-chaining-syntax-but-with-the-mice-operator).

```js
// the current chaining operator
const result = nmsp.some.payload()?.result ?? nmsp.some.payload();
//                                            ^^^ undesired ^^^

// the proposed mouse operator
const result = nmsp.some.payload()<?.result;

// this module
import mouse from 'mice.trap';
// or const mouse = require('mice.trap');
const result = mouse(nmsp.some.payload())?.result ?? mouse.trap;
```
