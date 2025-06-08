---
title: Configuring The Mod
order: 1
---
:::secondary Work In Progress
This documentation is still under construction. Please be patient while we flesh it out and improve. If you need any help, please drop by our Discord server
:::
---

:::warning In Game Config Screen
Simple RPC has a full in-game config screen, accessible from ModMenu or the Mods menu in NeoForge/Forge. You will need Cloth Config installed to use it.
:::

## Information
Simple RPC uses a universal TOML based config system, with a well named Layout and comments. You can use the same config file on Forge/NeoForge/Quilt/Fabric, without having to redo it

In addition to the basic Rich Presence options, the mod also includes features such as defining a custom Rich Presence based on the server you're connected to as well as including a translated Rich Presence, based on the language of the player.

#### Finding your config files:

`config/simple-rpc/simple-rpc.toml`

---

## Configuration
The mod is configured using either the in-game config screen, or by editing the config file by hand.

To edit the file by hand, it's recommended to use Notepad++ with TOML plugin installed.

Default Config File:

```toml title="config/simple-rpc/simple-rpc.toml"
#General Config Section. See https://srpc.fdd-docs.com/introduction/
[general]
	#The Application ID of the Discord App to use
	applicationID = "762726289341677668"
	#Enable/Disable the mod
	enabled = true
	#Enable/Disable debugging mode. WARNING: MAY CAUSE LOG SPAM!
	debugging = false
	#Display the Icon and Pack Name in place of LargeImage from compatible launchers. DOES NOT WORK WITH CUSTOM APPS! ONLY THE DEFAULT ONE!
	launcherIntegration = false
	#Internal Version Number. NO TOUCHY!
	version = 25

#The Game Loading event
[init]
	#Enable/Disable the Game Loading Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[init.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "Minecraft is loading"
		#The second line of text under the app name
		state = "Game Starting..."
		#The Asset ID or URLs of images to randomly use for the large image
		largeImageKey = ["mclogonew"]
		#The text to show when someone hovers over the largeImage
		largeImageText = "It's Minecraft {{game.version}}, but modded"
		#The Asset ID or URLs of images to randomly use for the small image
		smallImageKey = ["mclogo"]
		#The text to show when someone hovers over the smallImage
		smallImageText = "{{game.mods}} mods installed"
		#The Twitch or Youtube URL to use when type is set to STREAMING
		streamingActivityUrl = "https://twitch.tv/twitch"
		#List of buttons (max 2) to show on the RPC
		buttons = []

#The Main Menu event
[main_menu]
	#Enable/Disable the Main Menu Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[main_menu.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "{{player.name}} is currently lazy"
		#The second line of text under the app name
		state = "Chilling in the menu"
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

#The Server List event
[server_list]
	#Enable/Disable the Server List Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[server_list.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "{{player.name}} is looking for a server"
		#The second line of text under the app name
		state = "Searching for friends"
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

#The Realms Screen event
[realms_list]
	#Enable/Disable the Realms Screen Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[realms_list.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "{{player.name}} is looking for a Realm"
		#The second line of text under the app name
		state = "Browsing Realms"
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

#The Join Game Event
[join_game]
	#Enable/Disable the Join Game Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[join_game.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "{{player.name}} is joining a game"
		#The second line of text under the app name
		state = "Joining Game"
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

#The Multi Player Event
[multi_player]
	#Enable/Disable the Multi Player Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[multi_player.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "Playing on {{server.name}} with {{server.players.count}} players"
		#The second line of text under the app name
		state = "Playing online"
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

#The Realms Game Event
[realms]
	#Enable/Disable the Realms Game Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[realms.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "Playing on {{realm.name}}"
		#The second line of text under the app name
		state = "Playing on a Realm"
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

#The Paused Event
[paused]
	#Enable/Disable the Pause Event
	enabled = true

	#List of RPCs that will be displayed at random
	[[paused.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "In the Pause Menu"
		#The second line of text under the app name
		state = "Game Paused"
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

#Fallback event for disabled events
[generic]

	#List of RPCs that will be displayed at random
	[[generic.presence]]
		#The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type = "PLAYING"
		#The first line of text under the app name
		description = "Playing Minecraft"
		#The second line of text under the app name
		state = ""
		#The Asset ID or URLs of images to randomly use for the large image
		largeImageKey = ["mclogonew"]
		#The text to show when someone hovers over the largeImage
		largeImageText = "It's Minecraft {{game.version}}, but modded"
		#The Asset ID or URLs of images to randomly use for the small image
		smallImageKey = ["mclogo"]
		#The text to show when someone hovers over the smallImage
		smallImageText = "{{game.mods}} mods installed"
		#The Twitch or Youtube URL to use when type is set to STREAMING
		streamingActivityUrl = "https://twitch.tv/twitch"
		#List of buttons (max 2) to show on the RPC
		buttons = []

#Custom Config Variables that you can use
[custom]
	#Must these variables be parsed along with other variables
	enabled = true

	#Your custom variables to add
	variables = []

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

---

## Translating your config file
Simple RPC allows for language detection in Minecraft, so If you decide you wanna play Minecraft in a different language, your discord status can now be shown in that language. But it requires some setup, which is why this section exists.

To make use of this feature, simply copy your default `simple-rpc.toml` file, using the naming example below.

:::secondary Language Codes
To find a complete list of lang-codes, check out this site -> https://minecraft.fandom.com/wiki/Languages.
:::

Once you have created this file, you can change all "state", "description", "largeimagetext" and "smallimagetext" fields. You cannot translate the imageKeys!

Some name examples of languages:

- American English -> "simple-rpc-en_us.toml"
- Dutch -> "simple-rpc-nl_nl.toml"

:::danger Warning: Leave the default config file in english, as the mod falls back to this file when a translated file cannot be found
:::