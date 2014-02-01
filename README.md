ng-down [![NPM version](https://badge.fury.io/js/ng-down.png)](http://badge.fury.io/js/ng-down) [![Build Status](https://travis-ci.org/darul75/ng-down.png?branch=master)](https://travis-ci.org/darul75/ng-down) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/ng-down/counters/views.png)](https://sourcegraph.com/github.com/darul75/ng-down)
=====================

AngularJS directive bottom page trigger.

Why
-------------

I was using it for pagination feature when user has reached bottom of page.

Relatively simple but effective.

Demo
-------------
http://darul75.github.io/ng-down/


Installation
------------

Using npm:

```
npm install ng-down
```

How to use it
-------------

You should already have script required for Angular, note sanitize module use.

```html
<script type="text/javascript" src="angular.min.js"></script>
```

to the list above, you should add:

```html
<link rel="stylesheet" type="text/css" href="ng-down.min.css">
```

```html
<script type="text/javascript" src="ng-down.min.js"></script>
```

Then, inject `ngDown` in your application module:

```javascript
angular.module('myApp', ['ngDown']);
```

and then just put on dom element directive name `when-bottom` and `action` scope function attribute.

```html
<div when-bottom action='currentFn()' timer='3000'>
```

'action' your scope function which will be triggered when scrolling down.

### Options

* `timer`: 'timer' lock is ms, to avoid many call

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




