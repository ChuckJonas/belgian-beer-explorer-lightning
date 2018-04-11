# Typescript Belgian Beer Explorer Lightning Components

A port of [Belgian Beer Explorer](https://developer.salesforce.com/blogs/developer-relations/2015/02/lightning-components-sample-app-belgian-beer.html) to typescript as a proof of concept.

This is a very primative setup and just meant to illustrate how typescript could be leveraged in the lightning component framework.

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

As of writting this, no typing files were avalible for the aura API. I've added a few types to `types.d.ts` as well as typed *some* of the `BeerList` component.