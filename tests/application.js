/* globals gauge*/
"use strict";
const suitest = require('suitest-js-api');
const {assert, PROP} = suitest;

const getSelector = require('../selectors');
const getTestId = require('../test-editor-tests');

/**
 * Application-specific element assertions
 */
step("Open application", async () => {
	await assert.openApp();
	await assert.runTest(getTestId('Home page opened'));
});

step('Assert video title <selector> should be selected', async (selector) => {
	await assert.element(getSelector(selector)).matches(PROP.TEXT_COLOR, 'rgb(52, 191, 228)');
});

step("Wait <seconds> seconds", async (seconds) => {
    await assert.sleep(seconds * 1000);
});

step("Run test <testName>", async (testName) => {
    // Run pre-defined test editor test snippet
    await suitest.assert.runTest(getTestId(testName));
});
