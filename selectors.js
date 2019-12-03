const selectors = {
    'Main page content': {css: '#contentholder'},
    'Loading overlay': {css: '#static-loading-screen'},
    'All Files tile': {css: '#allFolderButton'},
    'WatchMe': {css: '#mainMenuhomeButton'},
    'Main Menu item 1': {css: '#mainmenuItem0'},
    'Main Menu item 2': {css: '#mainmenuItem1'},
    'Main Menu item 3': {css: '#mainmenuItem2'},
    'Main Menu item 4': {css: '#mainmenuItem3'},
    'Drop down main menu item': {css: '#userMenu'},
    'Drop down main menu container': {css: '#userMenuDropDown'},
    'Privacy main menu item': {css: '#userMenuDatenschutz'},
    'Imprint main menu item': {css: '#userMenuImpressum'},
    'Modal popup': {css: '#staticpopup'},
    'First tile': {css: '#filtered > div > div.widget.container.button.item.listitem.active.focus.buttonFocussed > div.widget.container.image'},
    'Pause button': {css: '.button.pause'},
    'Image': {css: '#imageplayer_img'},
};

// Return either pre-defined selector or the key itself - maybe it's defined in element repo
module.exports = selector => {
    return selectors[selector] || selector;
};
