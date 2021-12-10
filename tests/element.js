// File contains element-related assertion
/* globals gauge*/
"use strict";
const suitest = require('suitest-js-api');
const {assert, COMP, PROP} = suitest;
const nodeAssert = require('assert');
const getSelector = require('../selectors');

const DEFAULT_TIMEOUT = 5000;

function wordComparatorToSuitest(comparator) {
    return {
        'greater': COMP.GREATER,
        'less': COMP.LESSER,
    }[comparator] || comparator;
}

step("Assert element <selector> exists", async (selector) => {
    // Make sure that element exists in DOM
    await assert.element(getSelector(selector)).exists().timeout(DEFAULT_TIMEOUT);
});

step("Assert element <selector> does not exist", async (selector) => {
    // Make sure that element exists in DOM
    await assert.element(getSelector(selector)).doesNot().exist().timeout(DEFAULT_TIMEOUT);
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

step("Assert video position should be <comparator> then <seconds> second(s)", async (comparator, seconds) => {
	await assert
        .video()
        .matches(PROP.VIDEO_POSITION, seconds * 1000, wordComparatorToSuitest(comparator))
        .timeout(DEFAULT_TIMEOUT);
});
