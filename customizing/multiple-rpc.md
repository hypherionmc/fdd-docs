---
title: Adding Multiple RPCs
order: a
---
!!!secondary Work In Progress
This documentation is still under construction. Please be patient while we flesh it out and improve. If you need any help, please drop by our Discord server
!!!
---

!!!warning In Game Config Screen
Simple RPC has a full in-game config screen, accessible from ModMenu or the Mods menu in NeoForge/Forge. You will need Cloth Config installed to use it.
!!!

Simple Discord Link now allows you to add Multiple RPCs, that will be chosen at random. This means, that you can have multiple statuses displayed, for a single event.

### Example

Let's say, you want to have multiple statuses displayed, while you are playing in single player.

By default, your single player config looks like this:

```json
#The Single Player Event
[single_player]
	#Enable/Disable the Single Player Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[single_player.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "Currently In {{world.name}}"
		#The second line of text under the app name
		state = "Playing lonely mode"
		#The Asset ID or URLs of images to randomly use for the large image
		largeImageKey = ["mclogonew"]
		#The text to show when someone hovers over the largeImage
		largeImageText = "It's Minecraft {{game.version}}, but modded"
		#The Asset ID or URLs of images to randomly use for the small image
		smallImageKey = ["{{images.player}}"]
		#The text to show when someone hovers over the smallImage
		smallImageText = "{{player.name}}"
		#The Twitch or Youtube URL to use when type is set to STREAMING
		streamingActivityUrl = "https://twitch.tv/twitch"
		#List of buttons (max 2) to show on the RPC
		buttons = []
```

To add a new RPC to this, we will duplicate the entire `[[single_player.presence]]` block, and change it.

Below is the example with two RPCs added for the Single Player event

```json
#The Single Player Event
[single_player]
	#Enable/Disable the Single Player Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[single_player.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "Currently In {{world.name}}"
		#The second line of text under the app name
		state = "Playing lonely mode"
		#The Asset ID or URLs of images to randomly use for the large image
		largeImageKey = ["mclogonew"]
		#The text to show when someone hovers over the largeImage
		largeImageText = "It's Minecraft {{game.version}}, but modded"
		#The Asset ID or URLs of images to randomly use for the small image
		smallImageKey = ["{{images.player}}"]
		#The text to show when someone hovers over the smallImage
		smallImageText = "{{player.name}}"
		#The Twitch or Youtube URL to use when type is set to STREAMING
		streamingActivityUrl = "https://twitch.tv/twitch"
		#List of buttons (max 2) to show on the RPC
		buttons = []

    [[single_player.presence]]
        #The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
        type = "PLAYING"
        #The first line of text under the app name
        description = "Currently In {{world.name}}"
        #The second line of text under the app name
        state = "I'm all alone, no one here besides me"
        #The Asset ID or URLs of images to randomly use for the large image
        largeImageKey = ["fox"]
        #The text to show when someone hovers over the largeImage
        largeImageText = "It's a Very Lonely Minecraft {{game.version}}, but modded"
        #The Asset ID or URLs of images to randomly use for the small image
        smallImageKey = ["{{images.player}}"]
        #The text to show when someone hovers over the smallImage
        smallImageText = "{{player.name}}"
        #The Twitch or Youtube URL to use when type is set to STREAMING
        streamingActivityUrl = "https://twitch.tv/twitch"
        #List of buttons (max 2) to show on the RPC
        buttons = []
```

This will now allow you to display two, randomly selected statuses on your discord profile. Each status can have its own unique images, buttons and text.