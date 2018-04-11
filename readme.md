# Typescript Belgian Beer Explorer Lightning Components

A port of [Belgian Beer Explorer](https://developer.salesforce.com/blogs/developer-relations/2015/02/lightning-components-sample-app-belgian-beer.html) to typescript as a proof of concept.

This is a very primative setup and just meant to illustrate how typescript could be leveraged in the lightning component framework.  Could easily be expanded to work as a DX project to provide a much more robust developer experience.

## Dev Setup

- `git clone [this]`
- `cd typescript-belgian-beer-explorer-lightning`
- `npm install`
- `npm install sfdx-cli -g` (if you don't have [sdfx-cli](https://www.npmjs.com/package/sfdx-cli) already installed)
- in `package.json` update `deploy` script with an authed user

## Workflow

- Edit ts files
- `npm run build`
- `npm run deploy`

See [Belgian Beer Explorer](https://developer.salesforce.com/blogs/developer-relations/2015/02/lightning-components-sample-app-belgian-beer.html) instructions for setting up application.

## Typings

As of writting this, no typing files were avalible for the [aura API](http://documentation.auraframework.org/auradocs#reference?topic=api:$A). If you'd like to see salesforce add them, go show support on [this issue](https://github.com/forcedotcom/aura/issues/159). I've added a few API types to `types.d.ts` as well as typed *some* of the `BeerList` component.

**Note:** I haven't actually tested to see if salesforce accepts any of the funcitonal typescript features (things that transpile to code like classes & enums).  Type Definitions don't result in any transpiled JS so there should be no issues there.
