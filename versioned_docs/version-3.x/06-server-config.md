---
title: Server Config Override
order: g
---
:::info
If you do not wish to use this feature, then Simple RPC is only needed client side
:::
Simple RPC 3.0+ now allows you to override the values used by "multi_player" and "dimension_overrides" from a server.

To do this, you need to install Simple RPC on your server as well

When you launch your server with Simple RPC installed, you will find a new file called `simple-rpc-server.toml` inside your `config` folder.

**The file will look similar to this:**

```toml
[general]
	#Enable/Disable Serverside Overrides
	enabled = false
	#Internal Version Number. NO TOUCHY!
	version = 3

#The Multi Player Event
[multi_player]
	#Enable/Disable the Multi Player Event
	enabled = true
	#The first line of text under the app name
	description = "Playing with Others"
	#The second line of text under the app name
	state = "Playing online"
	#The Asset ID of the image to display as the large image
	largeImageKey = ["mclogonew"]
	#The text that gets displayed when the large image is hovered
	largeImageText = "It's Minecraft %mcver%, but modded"
	#The Asset ID of the image to display as the small image
	smallImageKey = ["%playerhead%"]
	#The text that gets displayed when the small image is hovered
	smallImageText = "%mods% mods installed"
	#The buttons to display on Discord
	buttons= []
	

#Dimension Information Overrides
[dimension_overrides]
	#Allows you to override the displayed values for dimensions
	enabled = false

	#The Dimensions to override
	[[dimension_overrides.dimensions]]
		name = "overworld"
		description = "%player% is in The Overworld"
		state = ""
		largeImageKey = ["overworld"]
		largeImageText = "In the Overworld"
		smallImageKey = ["mclogo"]
		smallImageText = "%mods% mods installed"

	[[dimension_overrides.dimensions]]
		name = "the_nether"
		description = "%player% is in The Nether"
		state = ""
		largeImageKey = ["nether"]
		largeImageText = "In the Nether"
		smallImageKey = [""]
		smallImageText = "%mods% mods installed"

	[[dimension_overrides.dimensions]]
		name = "the_end"
		description = "%player% is in The End"
		state = ""
		largeImageKey = ["end"]
		largeImageText = "In the End"
		smallImageKey = ["mclogo"]
		smallImageText = "%mods% mods installed"
```
&nbsp;

:::success
Any values specified here, will be shown on discord instead of the ones found on the Client Side config file IF this config file is enabled.
:::
