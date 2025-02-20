---
title: Override RPC Per Biome/World
order: f
---
!!!secondary Work In Progress
This documentation is still under construction. Please be patient while we flesh it out and improve. If you need any help, please drop by our Discord server
!!!
---

!!!warning In Game Config Screen
Simple RPC has a full in-game config screen, accessible from ModMenu or the Mods menu in NeoForge/Forge. You will need Cloth Config installed to use it.
!!!

Simple RPC allows you to override the RPC shown, based on the Biome/World you are in. This works like most of the other RPCs in the mod, but requires a little more setup.

### Default Config

By default, the included Override config would look like this:

```json
#Dimension Information Overrides
[dimension_overrides]
	#Allows you to override the displayed values for dimensions
	enabled = false

	#The Dimensions to override
	[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "overworld"

		#List of RPCs that will be displayed at random
		[[dimension_overrides.dimensions.presence]]
			#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
			type = "PLAYING"
			#The first line of text under the app name
			description = "{{player.name}} is in The Overworld"
			#The second line of text under the app name
			state = ""
			#The Asset ID or URLs of images to randomly use for the large image
			largeImageKey = ["overworld"]
			#The text to show when someone hovers over the largeImage
			largeImageText = "In the Overworld"
			#The Asset ID or URLs of images to randomly use for the small image
			smallImageKey = ["mclogo"]
			#The text to show when someone hovers over the smallImage
			smallImageText = "{{game.mods}} mods installed"
			#The Twitch or Youtube URL to use when type is set to STREAMING
			streamingActivityUrl = "https://twitch.tv/twitch"
			#List of buttons (max 2) to show on the RPC
			buttons = []

	[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "the_nether"

		#List of RPCs that will be displayed at random
		[[dimension_overrides.dimensions.presence]]
			#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
			type = "PLAYING"
			#The first line of text under the app name
			description = "{{player.name}} is in The Nether"
			#The second line of text under the app name
			state = ""
			#The Asset ID or URLs of images to randomly use for the large image
			largeImageKey = ["nether"]
			#The text to show when someone hovers over the largeImage
			largeImageText = "In the Nether"
			#The Asset ID or URLs of images to randomly use for the small image
			smallImageKey = ["mclogo"]
			#The text to show when someone hovers over the smallImage
			smallImageText = "{{game.mods}} mods installed"
			#The Twitch or Youtube URL to use when type is set to STREAMING
			streamingActivityUrl = "https://twitch.tv/twitch"
			#List of buttons (max 2) to show on the RPC
			buttons = []

	[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "the_end"

		#List of RPCs that will be displayed at random
		[[dimension_overrides.dimensions.presence]]
			#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
			type = "PLAYING"
			#The first line of text under the app name
			description = "{{player.name}} is in The End"
			#The second line of text under the app name
			state = ""
			#The Asset ID or URLs of images to randomly use for the large image
			largeImageKey = ["end"]
			#The text to show when someone hovers over the largeImage
			largeImageText = "In the End"
			#The Asset ID or URLs of images to randomly use for the small image
			smallImageKey = ["mclogo"]
			#The text to show when someone hovers over the smallImage
			smallImageText = "{{game.mods}} mods installed"
			#The Twitch or Youtube URL to use when type is set to STREAMING
			streamingActivityUrl = "https://twitch.tv/twitch"
			#List of buttons (max 2) to show on the RPC
			buttons = []
```

These add overrides for the Overworld, Nether and End. It is disabled by default, but you can enable it by changing `enabled = false` to `enabled = true`.

---

### Example with Biome Override

To add an override for a Biome, you need to specify the `name` as `biome:modid:biomename`. For example, `biome:plains` or `biome:byg:winter`.

!!!warning
NOTE: biome: is required, otherwise the mod will try to match a dimension
!!!

```json
[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "biome:plains"

		#List of RPCs that will be displayed at random
		[[dimension_overrides.dimensions.presence]]
			#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
			type = "PLAYING"
			#The first line of text under the app name
			description = "{{player.name}} is in The Overworld"
			#The second line of text under the app name
			state = ""
			#The Asset ID or URLs of images to randomly use for the large image
			largeImageKey = ["plains"]
			#The text to show when someone hovers over the largeImage
			largeImageText = "Wandering in the Plains"
			#The Asset ID or URLs of images to randomly use for the small image
			smallImageKey = ["mclogo"]
			#The text to show when someone hovers over the smallImage
			smallImageText = "{{game.mods}} mods installed"
			#The Twitch or Youtube URL to use when type is set to STREAMING
			streamingActivityUrl = "https://twitch.tv/twitch"
			#List of buttons (max 2) to show on the RPC
			buttons = []
```

---

### Example with Biome and Dimension Override

You can also add overrides, based on the dimension they are in. For example, if you only wanted to add an override for Plains, in the Overworld.

!!!warning
NOTE: | is required. This tells the mod to match both the Biome and Dimension
!!!

```json
[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "overworld|plains"

		#List of RPCs that will be displayed at random
		[[dimension_overrides.dimensions.presence]]
			#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
			type = "PLAYING"
			#The first line of text under the app name
			description = "{{player.name}} is in The Overworld"
			#The second line of text under the app name
			state = ""
			#The Asset ID or URLs of images to randomly use for the large image
			largeImageKey = ["plains"]
			#The text to show when someone hovers over the largeImage
			largeImageText = "Wandering in the Plains"
			#The Asset ID or URLs of images to randomly use for the small image
			smallImageKey = ["mclogo"]
			#The text to show when someone hovers over the smallImage
			smallImageText = "{{game.mods}} mods installed"
			#The Twitch or Youtube URL to use when type is set to STREAMING
			streamingActivityUrl = "https://twitch.tv/twitch"
			#List of buttons (max 2) to show on the RPC
			buttons = []
```

!!!info
These overrides also support multiple rpcs and buttons
!!!