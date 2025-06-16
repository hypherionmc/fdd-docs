---
title: Server Config Override
order: c
---
:::secondary Notice
If you do not wish to use this feature, then Simple RPC is only needed client side
:::
Simple RPC 2.0+ now allows you to override the values used by "multi_player" from a server.

To do this, you need to install Simple RPC on your server as well

When you launch your server with Simple RPC installed, you will find a new file called `simple-rpc-server.toml` inside your `config` folder.

**The file will look similar to this:**

```toml
[general]
	#Enable/Disable Serverside Overrides
	enabled = false
	#Internal Version Number. NO TOUCHY!
	version = 9

#The Multi Player Event
[multi_player]
	#Enable/Disable the Multi Player Event
	enabled = true
	#The first line of text under the app name
	description = "Playing on %servername% with %players% players"
	#The second line of text under the app name
	state = "Playing online"
	#The Asset ID of the image to display as the large image
	largeImageKey = "mclogo"
	#The text that gets displayed when the large image is hovered
	largeImageText = "It's Minecraft %mcver%, but modded"
	#The Asset ID of the image to display as the small image
	smallImageKey = "mclogo"
	#The text that gets displayed when the small image is hovered
	smallImageText = "%mods% mods installed"
	#The buttons to display on Discord
	buttons = []

#World/Dimension Image Overrides
[world_images]
	#Enabled/Disable custom images for Worlds/Biomes
	enabled = false

	#The Worlds/Biomes to override
	[[world_images.worlds]]
		worldname = "overworld"
		largeImageKey = "overworld"
		largeImageText = "In the Overworld"
		smallImageKey = "mclogo"
		smallImageText = "%mods% mods installed"

	[[world_images.worlds]]
		worldname = "the_nether"
		largeImageKey = "nether"
		largeImageText = "In the Nether"
		smallImageKey = "mclogo"
		smallImageText = "%mods% mods installed"

	[[world_images.worlds]]
		worldname = "the_end"
		largeImageKey = "end"
		largeImageText = "In the End"
		smallImageKey = "mclogo"
		smallImageText = "%mods% mods installed"
```
&nbsp;  
:::success
Any values specified here, will be shown on discord instead of the ones found on the Client Side config file IF this config file is enabled.
:::
