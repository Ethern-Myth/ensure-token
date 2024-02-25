
# Ensure Token

A package for ensuring bearer token is available in the header of the HTTP Request using Express

[![npm downloads](https://img.shields.io/npm/dm/ensure-token)](https://www.npmjs.com/package/ensure-token)

<br/>

[![NPM](https://nodei.co/npm/ensure-token.png)](https://nodei.co/npm/ensure-token/)

### Installation

``` cmd
 npm install ensure-token --save
 OR
 yarn add ensure-token
 OR
 pnpm install ensure-token
```

### Usage

javascript or typescript

``` javascript
 import { ensureToken } from 'ensure-token'; 
```

Add the ensureToken in your route like this:

``` javascript
app.get('/your-route', ensureToken, (req, res) => {

})
```

#### This will work on bearer tokens only for now. More Verifications will be added later.

### Don't forget to like this repo. If you have any questions feel free to ask!

Created by  [Ethern Myth](http://www.github.com/ethern-myth)
<br/>

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license).

<br/>
Last updated 18/02/2024.
