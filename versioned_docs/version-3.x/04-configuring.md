---
title: Configuring the mod
order: d
---
:::info Notice
Simple RPC now includes a basic in-game config screen, that is available when Cloth Config is installed. You can find the button at the TOP right corner of the OPTIONS screen. This config screen does not yet support Buttons, or Dimension Overrides. It's still suggested to use our [Config Editor App](https://srpcupdater.hypherionmc.me/). It includes Live preview and fetches the available images directly from discord!
:::

## Information
Simple RPC uses a universal TOML based config system, with a well named Layout and comments. You can use the same config file on Forge/Fabric, without having to redo it.

In addition to the basic Rich Presence options, the mod also includes features such as Server Side config Overrides, Defining a custom Rich Presence based on the server you're connected to as well as including a translated Rich Presence, based on the language of the player.

#### Finding your config files:

Before 3.1:
`config/simple-rpc.toml`

Version 3.1:
`simple-rpc/simple-rpc.toml`

Version 3.2+
`config/simple-rpc/simple-rpc.toml`

:::warning
You do not need to restart the game while editing the config. The config will AUTO RELOAD when the file is saved
:::

## Config Types

+++ Client Only Config

This is the default config that you will use.

This contains all the config for your rich presence such as your discord ID, assets and texts.

You can find this file at:

Before 3.1:
`config/simple-rpc.toml`

Version 3.1:
`simple-rpc/simple-rpc.toml`

Version 3.2+
`config/simple-rpc/simple-rpc.toml`

Below is a copy of the default, unconfigured config shipped with the mod.
```toml
#General Config Section. See https://readme.firstdarkdev.xyz/simple-rpc/introduction/
[general]
    #The Application ID of the Discord App to use
    applicationID = 904387784289161227
    #Enable/Disable the mod
    enabled = true
    #Enable/Disable debugging mode. WARNING: MAY CAUSE LOG SPAM!
    debugging = false
    #Enable/Disable the in game config screen. ONLY AVAILABLE WHEN CLOTH CONFIG IS INSTALLED!
    configScreen = false
    #Display the Icon and Pack Name in place of LargeImage from compatible launchers. DOES NOT WORK WITH CUSTOM APPS! ONLY THE DEFAULT ONE!
    launcherIntegration = false
    #Internal Version Number. NO TOUCHY!
    version = 18

#The Game Loading event
[init]
    #Enable/Disable the Game Loading Event
    enabled = true
    #The first line of text under the app name
    description = "KBP is loading"
    #The second line of text under the app name
    state = "Game Starting..."
    #The Asset ID of the image to display as the large image
    largeImageKey = ["modpacklogo"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["modpacklogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "KBP is running"
    #The buttons to display on Discord
    buttons = []

#The Main Menu event
[main_menu]
    #Enable/Disable the Main Menu Event
    enabled = true
    #The first line of text under the app name
    description = "%player% is currently pondering which world to conquer"
    #The seconds line of text under the app name
    state = "Idling in the menu"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["modpacklogo"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["modpacklogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "KBP is running"
    #The buttons to display on Discord
    buttons = []

#The Server List event
[server_list]
    #Enable/Disable the Server List Event
    enabled = true
    #The first line of text under the app name
    description = "%player% is looking for a server"
    #The second line of text under the app name
    state = "Searching for friends"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["modpacklogo"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["modpacklogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "KBP is running"
    #The buttons to display on Discord
    buttons = []

#The Realms Screen event
[realms_list]
    #Enable/Disable the Realms Screen Event
    enabled = true
    #The first line of text under the app name
    description = "%player% is looking for a Realm"
    #The second line of text under the app name
    state = "Browsing Realms"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["mclogonew"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["mclogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "%mods% mods installed"
    #The buttons to display on Discord
    buttons = []

#The Join Game Event
[join_game]
    #Enable/Disable the Join Game Event
    enabled = true
    #The first line of text under the app name
    description = "%player% is joining a game"
    #The second line of text under the app name
    state = "Joining Game"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["modpacklogo"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["modpacklogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "KBP is running"
    #The buttons to display on Discord
    buttons = []

#The Single Player Event
[single_player]
    #Enable/Disable the Single Player Event
    enabled = true
    #The first line of text under the app name
    description = "Currently In %world%"
    #The second line of text under the app name
    state = "Playing lonely mode"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["modpacklogo"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["modpacklogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "KBP is running"
    #The buttons to display on Discord
    buttons = []

#The Multi Player Event
[multi_player]
    #Enable/Disable the Multi Player Event
    enabled = true
    #The first line of text under the app name
    description = "Playing on %servername% with %players% players"
    #The second line of text under the app name
    state = "Playing online"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["modpacklogo"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but a boomer shooter"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["modpacklogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "KBP is running"
    #The buttons to display on Discord
    buttons = []

#The Realms Game Event
[realms]
    #Enable/Disable the Realms Game Event
    enabled = true
    #The first line of text under the app name
    description = "Playing on %realmname%"
    #The second line of text under the app name
    state = "Playing on a Realm"
    #The Asset ID of the image to display as the large image
    largeImageKey = ["mclogonew"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but modded"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["mclogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "%realmdescription%"
    #The buttons to display on Discord
    buttons = []

#Fallback event for disabled events
[generic]
    #The first line of text under the app name
    description = "Playing Minecraft"
    #The second line of text under the app name
    state = ""
    #The Asset ID of the image to display as the large image
    largeImageKey = ["mclogonew"]
    #The text that gets displayed when the large image is hovered
    largeImageText = "It's Minecraft %mcver%, but modded"
    #The Asset ID of the image to display as the small image
    smallImageKey = ["mclogo"]
    #The text that gets displayed when the small image is hovered
    smallImageText = "%mods% mods installed"
    #The buttons to display on Discord
    buttons = []

#Custom Config Variables that you can use
[custom]
    #Must these variables be parsed along with other variables
    enabled = true
    #Your custom variables to add
    [[custom.variables]]
        name = "testvar"
        value = "This is my Custom Var"

#Dimension Information Overrides
[dimension_overrides]
#Allows you to override the displayed values for dimensions
    enabled = true
    
    #The Dimensions to override
    [[dimension_overrides.dimensions]]
        name = "overworld"
        description = "Exploring the Failed Earth"
        state = "TESTING"
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
    
    [[dimension_overrides.dimensions]]
        name = "the_nether"
        description = "Crawling in Hell"
        state = ""
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
    
    [[dimension_overrides.dimensions]]
        name = "the_end"
        description = "Within the Corrupted Zone"
        state = ""
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
    
    [[dimension_overrides.dimensions]]
        name = "atum:atum"
        description = "Gaining strength in the Ancient Terrain"
        state = ""
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
    
    [[dimension_overrides.dimensions]]
        name = "stacked_dimensions_warden:deeper_dark"
        description = "Mining in the Forbidden Caverns"
        state = ""
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
    
    [[dimension_overrides.dimensions]]
        name = "dimdungeons:dungeon_dimension"
        description = "Raiding the Secret Pockets"
        state = ""
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
    
    [[dimension_overrides.dimensions]]
        name = "lostcities:lostcity"
        description = "Adventuring in the Lost World"
        state = ""
        largeImageKey = ["modpack_logo"]
        largeImageText = ""
        smallImageKey = ["modpack_logo"]
        smallImageText = "KBP is running"
        buttons = []
```
+++ Translated Configs

Simple RPC allows for language detection in Minecraft, so If you decide you wanna play Minecraft in a different language, your discord status can now be shown in that language. But it requires some setup, which is why this section exists.

To make use of this feature, simply copy your default `simple-rpc.toml` file, using the naming example below.

:::secondary Language Codes
To find a complete list of lang-codes, check out this site -> https://minecraft.fandom.com/wiki/Languages.
:::

Once you have created this file, you can change all "state", "description", "largeimagetext" and "smallimagetext" fields. You cannot translate the imagekeys!

Some name examples of languages:

- American English -> "simple-rpc-en_us.toml"
- Dutch -> "simple-rpc-nl_nl.toml"

:::danger Warning: Leave the default config file in english, as the mod falls back to this file when a translated file cannot be found
:::

+++ Per Server Override

Since Simple RPC Version 2.5, it's now possible to add "custom server entries", that allow you to change the Rich Presence display data based on the IP of the server you are connected to. This allows modpack makers to include a rich presence when someone is playing on one of their official servers, instead of just having `Playing on djghksdjh`.

This file can be found in the `config/simple-rpc` folder and is called `server-entries.toml`.

This file, like the normal config file also supports translations, so, you can for example use `server-entries-en_us.toml` for english.

This file has a very basic layout, and is easy to work with. By default, the config file looks like this:

```toml
enabled = false
version = 2
entry = []
```

To add a custom server entry, simply replace `entry = []` with the following:

```toml
[[entry]]
    ip = "yourserverip"
    description = "Look mom, I have a server!"
    state = "Playing on the best damn mc server ever"
    largeImageKey = ["server_log"]
    largeImageText = "Find us at https://myawesomeserver.com"
    smallImageKey = [""]
    smallImageText = ""
```

:::info
Please note that ip, has to match the IP address or url that you use to connect to the server exactly. Meaning if you connect using server.yourdomain.com, then you need to use that as the IP. If you use 127.0.0.1:5689, then you need to use that as the IP
:::

As an example, a complete config file would look like this:

```toml
enabled = true
version = 2

[[entry]]
    ip = "hypherionmc.me:3008"
    description = "Testing Server Overrides"
    state = "Playing on a local server"
    largeImageKey = ["hypherion_2"]
    largeImageText = "It works"
    smallImageKey = [""]
    smallImageText = ""
```

:::warning
Don't forget to change enabled to true to enable this config file to work!
:::

+++ Per Biome RPC

Since Simple RPC 3.1, it's not possible to apply an RPC based on a Biome, Dimension or Both.

### Dimension Override

This is the standard config setup. To apply an RPC based on a dimension or "world", simple enter the name as `modid:dimension`.

For example: `minecraft:overworld`

### Dimension Information Overrides

```toml

[dimension_overrides]
#Allows you to override the displayed values for dimensions
enabled = false

	#The Dimensions to override
	[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "overworld"
		#The first line of text under the app name
		description = "%player% is in The Overworld"
		#The second line of text under the app name
		state = ""
		#The Asset ID of the image to display as the large image
		largeImageKey = ["overworld"]
		#The text that gets displayed when the large image is hovered
		largeImageText = "In the Overworld"
		#The Asset ID of the image to display as the small image
		smallImageKey = ["mclogo"]
		#The text that gets displayed when the small image is hovered
		smallImageText = "%mods% mods installed"
		#The buttons to display on Discord
		[[dimension_overrides.dimensions.buttons]]
			label = "Test Button"
			url = "https://google.com"
```

### Biome Override

This is the standard config setup. To apply an RPC based on a biome, simple enter the name as `biome:modid:dimension`.

For example: `biome:minecraft:plains`

NOTE: biome: is required, otherwise the mod will try to match a dimension

### Dimension Information Overrides
```toml
[dimension_overrides]
#Allows you to override the displayed values for dimensions
enabled = false

	#The Dimensions to override
	[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "biome:plains"
		#The first line of text under the app name
		description = "Player is feeling PLAIN"
		#The second line of text under the app name
		state = ""
		#The Asset ID of the image to display as the large image
		largeImageKey = ["overworld"]
		#The text that gets displayed when the large image is hovered
		largeImageText = "In the Overworld"
		#The Asset ID of the image to display as the small image
		smallImageKey = ["mclogo"]
		#The text that gets displayed when the small image is hovered
		smallImageText = "%mods% mods installed"
		#The buttons to display on Discord
		[[dimension_overrides.dimensions.buttons]]
			label = "Test Button"
			url = "https://google.com"
```

### Dimension & Biome Override

This is the standard config setup. To apply an RPC based on a dimension & biome, simple enter the name as modid:dimension|modid:biome.

For example: `minecraft:overworld|minecraft:plains`

NOTE: | is required. This tells the mod to match both the Biome and Dimension

### Dimension Information Overrides

```toml
[dimension_overrides]
#Allows you to override the displayed values for dimensions
enabled = false

	#The Dimensions to override
	[[dimension_overrides.dimensions]]
		#The name of the Dimension/Biome to override. FORMAT: modid:dimension or modid:biome
		name = "overwold|plains"
		#The first line of text under the app name
		description = "Player is feeling PLAIN"
		#The second line of text under the app name
		state = ""
		#The Asset ID of the image to display as the large image
		largeImageKey = ["overworld"]
		#The text that gets displayed when the large image is hovered
		largeImageText = "In the Overworld"
		#The Asset ID of the image to display as the small image
		smallImageKey = ["mclogo"]
		#The text that gets displayed when the small image is hovered
		smallImageText = "%mods% mods installed"
		#The buttons to display on Discord
		[[dimension_overrides.dimensions.buttons]]
			label = "Test Button"
			url = "https://google.com"
```
+++

---

## Configuration Variables

### Information
Variables are pieces of text added to the config file that allows you to display data from the game on your status.

These variables can be used inside any `state`, `description`, `largeImageText`, `smallImageText` and inside buttons.

Some variables can also be used inside `largeImageKey` and `smallImageKey`. These are marked with [!badge variant="info" text="IMAGE"]

+++ Single/Multi/Realms (3.0+)

These variables can be used with Single Player, Multi Player and Realms.

| Variable                      | Description                                                                                                                                 |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `%player%`                    | Shows the Minecraft name of the player                                                                                                      |
| `%world%`                     | Shows the current world (Dimension): For example overworld/nether/etc                                                                       |
| `%mods%`                      | Shows the total amount of installed mods                                                                                                    |
| `%difficulty%`                | Shows the difficulty of the current game                                                                                                    |
| `%position%`                  | Shows the position of the player                                                                                                            |
| `%biome%`                     | Show the name of the biome you're in                                                                                                        |
| `%mcver%`                     | Show the Minecraft Version: For example 1.16.5                                                                                              |
| `%instance%`                  | Shows the name of the Instance on supported launchers                                                                                       |
| `%launcher%`                  | Shows the name of the Launcher on supported launchers                                                                                       |
| `%server%` [!badge variant="info" text="IMAGE"]     | Returns the server IP with _ instead of `.` So 127.0.0.1 becomes 127_0_0_1. Can be used to change the image key based on the server address |
| `%launchername%`              | Get the name of the launcher (if supported) in lower-case                                                                                   |
| `%savename%`                  | Shows the name of your world [!badge variant="info" text="Since 2.6"]                                                                       |
| `%playerhead%` [!badge variant="info" text="IMAGE"] | Uses the Face of the player as an Image Key. No need to have them uploaded                                                                  |
| `%gametime12%`                | Returns the In-Game time, in 12 Hour Format. For example: 01:00 PM                                                                          |
| `%gametime%`                  | Returns the In-Game time in 24 Hour Format. For example: 13:00                                                                              |
| `%day%`                       | Returns the In-Game day as shown in F3                                                                                                      |
| `%weather%`                   | Returns the current weather of the biome the player is in                                                                                   |
| `%replayframe%`               | Used with ReplayMod to show the currently rending frame                                                                                     |
| `%replaytotal%`               | Used with ReplayMod to show the total frames to be rendered                                                                                 |
| `%replaytime%`               | Used with ReplayMod to show the current render time                                                                                         |
| `%replaytimeleft%`               | Used with ReplayMod to show the total render time left                                                                                      |

+++ Multi Player Only

These variables can only be used in a Multiplayer/Lan game, in addition to the other variables

| Variable                      | Description                                                                                   |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| `%serverip%`                  | Shows the IP/Address of the server the player is playing on (Deprecated. Will be removed soon) |
| `%servername%`                | Shows the name of the server                                                                  |
| `%players%`                   | Shows the amount of online players                                                            |
| `%playersexcl%`               | Shows the amount of online players (Excluding You)                                            |
| `%maxplayers%`                | Shows the max amount of players on the server                                                 |
| `%motd%`                      | Show the Message of the day of the server                                                     |
| `%servericon%` [!badge variant="info" text="IMAGE"] | Returns the Icon of the server for use as an Image Key. No need to have it uploaded           |

+++ Realms Only

These variables can only be used when connected to a REALM, in addition to the existing single player variables.

| Variable | Description |
| --- | --- |
| `%realmname%` | Returns the name of the realm |
| `%realmdescription%` | Returns the description of the realm |
| `%realmgame%` | Returns the name of the active mini-game, if any |
| `%realmicon%` [!badge variant="info" text="IMAGE"] | Returns the Icon of the mini-game, if any |
| `%players%` | Returns the amount of online players in the realm |
| `%maxplayers%` | Returns the maximum number of slots on the realm. Hardcoded to 10 |

+++
