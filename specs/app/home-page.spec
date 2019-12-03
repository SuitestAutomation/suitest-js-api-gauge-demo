# Test home page
    Tags: e2e, home

Home page displays a list of top menu and assets available for user to view.

## Top menu navigation

Make sure that top navigation works as expected.

* Open application

On load focus must be on the first item of the first swimlane. The "home" item of the main menu must be selected.

* Assert "All Files tile" navigation item is focused
* Assert "WatchMe" navigation item is selected

When pressing up, focus should move to the main menu's selected item.

* Press "up"
* Assert "WatchMe" navigation item is focused

User should be able to open each category provided in feed.

* Make sure every main menu item is selectable

## Top menu drop-down

Make sure that drop-down in the right corner of the menu can be opened and pop-ups are shown

* Open application

Move focus to top menu

* Press "up"
* Assert "WatchMe" navigation item is focused

Navigate all the way to the right

* Press "right" exactly "5" times
* Assert "Drop down main menu item" navigation item is focused

Make sure drop down is opened

* Assert element "Drop down main menu container" exists
* Assert "Privacy main menu item" navigation item is focused

Open first drop-down item and check if it's there

* Press "enter"
* Assert element "Modal popup" exists
* Press "enter"
* Assert element "Modal popup" does not exist

Navigate down and check second drop-down item

* Press "down"
* Assert "Imprint main menu item" navigation item is focused
* Press "enter"
* Assert element "Modal popup" exists
* Press "enter"
* Assert element "Modal popup" does not exist

## Tiles navigation

Check tiles navigation

* Open application

We already have this test defined in test editor. We could export it to JS API or, alternatively, just launch it directly from here.

* Run test "Navigating on homepage"
