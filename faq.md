---
title: "FAQ"
---

=== Q: How do I stop XYZ command from being spammed in Discord
A: Add the name of the command being spammed into the `ignoredCommands` list in your config. So if `/list` is being spammed, you will add `list` into the `ignoredCommands` list

=== Q: Where do I find the config file?
A: After installing the mod and CraterLib, you will need to start your server at least once. After that, you can find the config file in `config/simple-discord-link`

=== Q: I configured the mod on my local server, but after copying to my real server, I get an invalid token error
A: SDLink encrypts your bot token and webhook URLs to prevent leaking them. When copying your config, you also need to copy the `sdlinkstorage` folder