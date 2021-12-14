# Video progress
    Tags: e2e, video

Checking video progress assets, fast forwarding and rewind

## Video progress
* Open application
* Press "enter"
* Assert video is playing
* Wait "30" seconds
* Assert video position should be "greater" then "30" second(s)

## Fast forward/rewind video
* Open application
* Press "enter"
* Assert video is playing
* Press "right"
* Press "enter" exactly "4" times
* Assert video position should be "greater" then "40" second(s)
* Press "left" exactly "2" times
* Press "enter" exactly "2" times
* Assert video position should be "less" then "25" second(s)
