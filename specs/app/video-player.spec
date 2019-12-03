# Test video playback
    Tags: e2e, video

Make sure that video player works as expected.

## Video test

Video must start playback as soon as video page is loaded.

First, navigate to any video.

* Open application
* Press "up"
* Assert "WatchMe" navigation item is focused
* Press "right" exactly "3" times
* Press "enter"
* Assert element "First tile" exists
* Press "enter"

Now, make sure video is playing

* Assert video is playing

Last button press is just for conveniance when creating tests - to stop video from playing after test is done

* Press "back"
