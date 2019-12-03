/* globals gauge*/
"use strict";
const suitest = require('suitest-js-api');
const {assert} = suitest;

const getSelector = require('../selectors');
const getTestId = require('../test-editor-tests');

// How long should we wait for element assertions
const DEFAULT_TIMEOUT = 5000;

// Main menu is hard-coded in code, so list it here for easier maintainenece
const MAIN_MENU_ITEMS = [
    'Main Menu item 1',
    'Main Menu item 2',
    'Main Menu item 3',
    'Main Menu item 4',
];

/**
 * Helper functions
 */
function isFocused(element) {
    return element.matches(suitest.PROP.CLASS, 'focus', suitest.COMP.CONTAIN);
}

function isSelected(element) {
    return element.matches(suitest.PROP.CLASS, 'active', suitest.COMP.CONTAIN);
}

/**
 * Application-specific element assertions
 */
step("Open application", async () => {
    // Tell Suitest that a new test must start. This would re-set the context for test execution (e.g. for network requests)
    // We don't care about the test name in this case
    await suitest.startTest('Start test');
    // Open the applicaition on the main page
    await suitest.openApp();
    // Wait until main content element exists on the page, i.e. it's loaded and ready for interaction
    await assert.element(getSelector('Main page content')).exists().timeout(10000);
    // And loader is hidden
    await assert.element(getSelector('Loading overlay')).doesNot().exist().timeout(10000);
});

step("Assert <selector> navigation item is focused", async (selector) => {
    // Element is focused when it contains class "focus"
    await isFocused(assert.element(getSelector(selector))).timeout(DEFAULT_TIMEOUT);
});

step("Assert <selector> navigation item is selected", async (selector) => {
    // Element is selected when it has class "active"
    await isSelected(assert.element(getSelector(selector))).timeout(DEFAULT_TIMEOUT);
});

step("Make sure every main menu item is selectable", async () => {
    // Example of complex scenario, wirtten with JS
    // Expect at the beginning focus to be on main menu item
    // Traverce main menu and make sure every item can be selected
    for (const selector of MAIN_MENU_ITEMS) {
        // Press right until item in question is focused
        await assert.press(suitest.VRC.RIGHT).until(
            isFocused(suitest.element(getSelector(selector)))
        ).repeat(5);

        // Press OK
        await suitest.press(suitest.VRC.OK);

        // Make sure that item is now selected
        await isSelected(assert.element(getSelector(selector))).timeout(DEFAULT_TIMEOUT);

        // Wait until focus is moved to content tile in case it exists
        if (await suitest.element(getSelector('First tile')).exists().timeout(DEFAULT_TIMEOUT)) {
            // There is some contents, have to press up
            await suitest.press(suitest.VRC.UP).until(
                isFocused(suitest.element(getSelector(selector)))
            ).repeat(3);
        }
    }
});

step("Navigate to pause button", async () => {
    // This step would focus "pause" button in video player from 2 state:
    // * video just started and focus is on suggested videos
    // * video was playing for some time and controls are now hidden
    await suitest.press(suitest.VRC.DOWN).until(
        isFocused(suitest.element(getSelector('Pause button')))
    ).repeat(3);
});

step("Run test <testName>", async (testName) => {
    // Run pre-defined test editor test snippet
    await suitest.assert.runTest(getTestId(testName));
});
