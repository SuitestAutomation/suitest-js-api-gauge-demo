/* globals gauge*/
"use strict";
const suitest = require('suitest-js-api');

/**
 * Remote Control
 */
step("Press <key>", async (key) => {
    // Press remote control button
    await suitest.press(key.toUpperCase());
});

step("Press <key> exactly <times> times", async (key, times) => {
    // Press remote control button several times
    await suitest.press(key.toUpperCase()).repeat(+times);
});

step("Press <key> every <sec> seconds exactly <times> times", async (key, sec, times) => {
    // Press remote control button several times
    await suitest.press(key.toUpperCase()).repeat(+times).interval(sec * 1000);
});