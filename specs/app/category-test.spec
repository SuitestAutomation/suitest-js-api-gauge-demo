# Category page test
    Tags: e2e, category

Test scenario makes sure that category page displays correct data.

Illustrates how data can be fetched from server and used to build test scenarion dynamically.

## Category page dynamic test

First of all, we need to navigate to the page we would like to test.

* Open application
* Press "up"
* Assert "WatchMe" navigation item is focused
* Press "right" exactly "3" times
* Press "enter"
* Assert element "First tile" exists

Load the feed we would like to test against. Step is split in two: one to load data, another one to verify items on the screen
according to that data. This is done to illustrate how to work with dynamic items in Gauge.

* Load "home-list-videos" page items
* Assert page items are rendered
