// File contains element-related assertion
/* globals gauge*/
"use strict";
const suitest = require('suitest-js-api');
const {assert} = suitest;

const nodeAssert = require('assert');

const getSelector = require('../selectors');

const DEFAULT_TIMEOUT = 5000;

step("Assert element <selector> exists", async (selector) => {
    // Make sure that element exists in DOM
    await assert.element(getSelector(selector)).exists().timeout(DEFAULT_TIMEOUT);
});

step("Assert element <selector> does not exist", async (selector) => {
    // Make sure that element exists in DOM
    await assert.element(getSelector(selector)).doesNot().exist().timeout(DEFAULT_TIMEOUT);
});

step("Assert element <selector> is loaded", async (selector) => {
    // Make sure that given image is loaded, give it up to 5s to load
    await assert.element(getSelector(selector)).matches(suitest.PROP.IMAGE_LOAD_STATE, suitest.IMAGE_LOAD_STATE.LOADED).timeout(DEFAULT_TIMEOUT);
});

step("Assert element <selector> has property <property> equals <value>", async (selector, property, value) => {
    // Make sure that element property equals to given value
    await assert.element(getSelector(selector)).matches(property, value, suitest.COMP.EQUAL).timeout(DEFAULT_TIMEOUT);
});

step("Assert video is playing", async () => {
    // Wait for 10s max for video to start playback
    await assert.video().isPlaying().timeout(10000);
    // Make sure it's playing for at least 2s
    await assert.video().matches(suitest.PROP.VIDEO_POSITION, 2000, suitest.COMP.EQUAL_GREATER).timeout(3000);
});

step("Assert video is paused or stopped", async () => {
    // Example of custom assertion
    const video = await suitest.video();
    const videoStateIsCorrect = [suitest.VIDEO_STATE.PAUSED, suitest.VIDEO_STATE.STOPPED].includes(video.videoState);

    nodeAssert(videoStateIsCorrect, `Video state is ${video.videoState}, but expected PAUSED or STOPPED`);
});
