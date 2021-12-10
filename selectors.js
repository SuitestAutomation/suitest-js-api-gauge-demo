const selectors = {};

// Return either pre-defined selector or the key itself - maybe it's defined in element repo
module.exports = selector => {
    return selectors[selector] || selector;
};
