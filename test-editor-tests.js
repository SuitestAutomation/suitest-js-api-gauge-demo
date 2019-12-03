const testEditorTests = {
    'Navigating on homepage': '2907c099-ef51-4725-a7a0-a9f3d2f7ba68',
};

module.exports = testName => {
    if (testName in testEditorTests) {
        return testEditorTests[testName];
    }

    throw new Error(`Unknown test requested: ${testName}`);
};
