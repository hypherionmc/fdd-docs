---
title: Changing the Images Alternative
order: c
---
You can also use Direct links to PNG images to use as "image keys". To do this, upload your image to a site like IMGUR, Dropbox or Github and right click the image, then copy URL. If you paste this URL into your browser and ONLY see the image, it will work. If you see a webpage, it will NOT work!

An example of this would be to upload your image to IMGUR, right clicking the image in your browser, and clicking `Copy Image Url` or `Copy Image Address`.

You can then replace your imageKey with the url.

For example:

`largeImageKey = ["imagekey"]` -> `largeImageKey = ["https://dummysite.com/image.png"]`

You can also MIX discord assets, and URL assets.

For example:

`largeImageKey = ["imagekey"]` -> `largeImageKey = ["imagekey", "https://dummysite.com/image.png"]`
