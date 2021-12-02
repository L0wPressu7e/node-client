<h1 align="center">
  Welup nodejs Client
  <br>
</h1>

<h4 align="center">
  Node Client for the Welups Blockchain
</h4>

<p align="center">
  <a href="#how-to-use">How to Use</a>
</p>

# How to use

## Requirements

* Node v9.8.0

## Running tests

```bash
> npm test
```

## Usage

Install the package

```bash
> npm install @welups/node-client
```

Use the HTTP Client

```javascript
import {Client} from '@welups/node-client';

const client = new Client('http://full-node-api-endpoint');

let recentBlocks = await client.getBlocks({
  sort: '-number',
  limit: 10,
});
```
