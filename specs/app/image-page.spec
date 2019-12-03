# Image gallery page
    Tags: e2e, image

Check if images can be opened

## Open image

First, navigate to some image

* Open application
* Press "up"
* Assert "WatchMe" navigation item is focused
* Press "right" exactly "2" times
* Press "enter"
* Assert element "First tile" exists
* Press "enter"

Now make sure image is loaded

* Assert element "Image" is loaded