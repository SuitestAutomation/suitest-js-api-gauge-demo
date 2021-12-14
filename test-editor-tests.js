const testEditorTests = {
	'Home page opened': '254f6988-6370-46a6-8ea3-7564616e87e1',
};

module.exports = testName => {
	if (testName in testEditorTests) {
		return testEditorTests[testName];
	}

	throw new Error(`Unknown test requested: ${testName}`);
};
