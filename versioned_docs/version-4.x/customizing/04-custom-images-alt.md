---
title: Use your own Images, without changing the name
position: 4
---

:::warning In Game Config Screen
Simple RPC has a full in-game config screen, accessible from ModMenu or the Mods menu in NeoForge/Forge. You will need Cloth Config installed to use it.
:::

You can also use Direct links to PNG or GIF images to use as "image keys". To do this, upload your image to a site like IMGUR, Dropbox or GitHub and right click the image, then copy URL.

:::danger Test The Link
If you paste this URL into your browser and ONLY see the image, it will work. If you see a webpage, it will NOT work!
:::

An example of this would be to upload your image to IMGUR, right clicking the image in your browser, and clicking `Copy Image Url` or `Copy Image Address`.

You can then replace your imageKey with the url.

For example:

`largeImageKey = ["imagekey"]` -> `largeImageKey = ["https://dummysite.com/image.png"]`

You can also MIX discord assets, and URL assets.

For example:

`largeImageKey = ["imagekey"]` -> `largeImageKey = ["imagekey", "https://dummysite.com/image.png"]`
