# Suitest JavaScript API demo - Gauge integration

This repository contains a demo of [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) e2e tests with [Gauge test runner](https://gauge.org).

## Setup

1. Copy `.suitestrc.dist` file as `.suitestrc` and fill in it's contents with your values according to [documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).

2. In terminal run `npm ci`.

3. Run `npm run interactive` for [interactive mode](https://suite.st/docs/suitest-api/setup/#launching-test-in-interactive-mode) or `npm run automated` for [automated mode](https://suite.st/docs/suitest-api/setup/#launching-the-same-test-in-automated-mode).

## Example tests

You can find some Suitest tests written for WatchMe app (every Suitest account has this app by default). Those tests rely on some elements from Suitest "Element repository" and configuration where base url set to http://file.suite.st/sampleapp/index-hbbtv.html - HbbTv configuration in WatchMe app. So make sure you properly adjusted .suitestrc file.

