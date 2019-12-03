# Smoke test
    Tags: smoke

Smoke test only detects if application build is launchable and it makes sense to continue running other tests on it.

## Home page loaded

Home page must load and display the "All Files" tile at least.

This would mean that app loaded feed from server and shown some data on the screen.

* Open application
* Assert element "All Files tile" exists
