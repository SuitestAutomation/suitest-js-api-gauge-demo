# Video playback
    Tags: e2e, video

Checking video playback

## Starting a video
* Open application
* Press "right" exactly "2" times
* Assert video title "Cominandes 3 title" should be selected
* Press "enter"
* Assert video is playing

## Pausing/Resuming video by UI
* Open application
* Press "enter"
* Assert video is playing
* Press "enter"
* Assert video is paused or stopped
* Press "play"

## Pausing/Resuming video by VRC
* Open application
* Press "enter"
* Assert video is playing
* Press "pause"
* Assert video is paused or stopped
* Press "play"
* Assert video is playing