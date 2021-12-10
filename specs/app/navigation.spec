# Navigation
    Tags: e2e, home

Checking app navigation

## Navigating to the right and left
* Open application
* Press "right" exactly "4" times
* Assert video title "Big Bunny titile" should be selected
* Press "left"
* Assert video title "Sintel title" should be selected

## Navigation up/down
* Open application
* Assert video title "Cominandes 1 title" should be selected
* Press "up"
* Assert video title "Cominandes 1 title" should be selected
* Press "down"
* Assert video title "Cominandes 1 title" should be selected

## Returning to homepage by VRC Back button
* Open application
* Press "enter"
* Assert video is playing
* Press "back"
* Assert video title "Cominandes 1 title" should be selected

## Returning to homepage by UI
* Open application
* Press "enter"
* Assert video is playing
* Press "left" exactly "2" times
* Press "enter"
* Assert video title "Cominandes 1 title" should be selected