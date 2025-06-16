---
title: Configuring the Mod
order: b
---
:::danger Notice
If you really hate editing config files by hand, it's suggested that you use our [Config Editor App](https://github.com/hypherionmc/simple-rpc-editor/releases/). It includes Live preview and fetches the available images directly from discord!
:::

## Information
Simple RPC uses a TOML based config system with a very simple, well named and commented layout. When running the mod for the first time, a config file will be created using the default settings. You can use the mod as is, use your own data, or use a [Custom App](03-custom-app.md) entirely.
:::secondary Notice
Since Simple RPC Version 1.4, it's possible to create a config for different languages. To learn more, Check out [Multi Language Config Files](#multi-language-config-files)
:::

:::info
You do not need to restart the game while editing the config. The config will AUTO RELOAD when the file is saved
:::

---

### Default Config

:::warning
It has recently been discovered that discord has a character limitation on the imageText. It CANNOT be longer than 1288 chars and shorter than 2 chars
:::

:::info
You can also use Direct links to PNG images to use as "image keys". To do this, upload your image to a site like IMGUR, Dropbox or Github and right click the image, then copy URL. If you paste this URL into your browser and ONLY see the image, it will work. If you see a webpage, it will NOT work!
:::

### Sample Config
**Below is the sample config file with an explanation of each section/item.**

**To have a value ignored, simple leave it empty! clientID is required though**

```toml
#General Config Section
#To have a value ignored, simply leave it empty!
[general]
	#The Client ID of the Discord App to use. Replace this with your client id from the previous step to change the name of the app
	clientID = 762726289341677668
	#Enable/Disable the mod
	enabled = true
	#Enable/Disable debugging mode. WARNING: MAY CAUSE LOG SPAM!
	debugging = false
	#Enable/Disable the in game config screen
	configScreen = true
	#Display the Icon and Pack Name in place of LargeImage from compatible launchers. DOES NOT WORK WITH CUSTOM APPS! ONLY THE DEFAULT ONE!
	launcherIntegration = false
	#Enable/Disabled in-game notifications about new releases
	updater = false
	#Internal Version Number. NO TOUCHY!
	version = 9

#The Game Loading event
[init]
	#Enable/Disable the Game Loading Event
	enabled = true
	#The first line of text under the app name
	description = "Minecraft is loading"
	#The second line of text under the app name
	state = "Game Starting..."
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

#The Main Menu event
[main_menu]
	#Enable/Disable the Main Menu Event
	enabled = true
	#The first line of text under the app name
	description = "%player% is currently lazy"
	#The seconds line of text under the app name
	state = "Chilling in the menu"
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

#The Server List event
[server_list]
	#Enable/Disable the Server List Event
	enabled = true
	#The first line of text under the app name
	description = "%player% is looking for a server"
	#The second line of text under the app name
	state = "Searching for friends"
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

#The Join Game Event
[join_game]
	#Enable/Disable the Join Game Event
	enabled = true
	#The first line of text under the app name
	description = "%player% is joining a game"
	#The second line of text under the app name
	state = "Joining Game"
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

#The Single Player Event
[single_player]
	#Enable/Disable the Single Player Event
	enabled = true
	#The first line of text under the app name
	description = "Currently In %world%"
	#The second line of text under the app name
	state = "Playing lonely mode"
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

#Fallback event for disabled events
[generic]
	#The first line of text under the app name
	description = "Playing Minecraft"
	#The second line of text under the app name
	state = ""
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
#Leave values empty that you don't want to override
[dimension_overrides]
    enabled = false

    [[dimension_overrides.dimensions]]
        name = "overworld"
        description = "%player% is in The Overworld"
        state = ""
        largeImageKey = "overworld"
        largeImageText = "In the Overworld"
        smallImageKey = "mclogo"
        smallImageText = "%mods% mods installed"
    
    [[dimension_overrides.dimensions]]
        name = "the_nether"
        description = "%player% is in The Nether"
        state = ""
        largeImageKey = "nether"
        largeImageText = "In the Nether"
        smallImageKey = "mclogo"
        smallImageText = "%mods% mods installed"
    
    [[dimension_overrides.dimensions]]
        name = "the_end"
        description = "%player% is in The End"
        state = ""
        largeImageKey = "end"
        largeImageText = "In the End"
        smallImageKey = "mclogo"
        smallImageText = "%mods% mods installed"
```

___

## Multi-Language Config Files
[!badge variant="info" text="Available since 1.4"] 

### Information
Simple RPC allows for language detection in Minecraft, so If you decide you wanna play Minecraft in a different language, your discord status can now be shown in that language. But it requires some setup, which is why this section exists.

When launching the game for the first time with 1.4 installed, you will find a new folder called `simple-rpc` inside your `.minecraft` folder. This is the folder in which you will place your translated config files.

To create a translated config file, copy `simple-rpc.toml` from your config folder to the `simple-rpc` folder. To make sure the mod loads the correct config file, you need to rename the file a bit. The new name of your file will now be `simple-rpc_lang_code.toml`.
:::secondary Notice
To find a complete list of lang-codes, check out this site -> https://minecraft.fandom.com/wiki/Languages.
:::

Once you have created this file, you can change all "state", "description", "largeimagetext" and "smallimagetext" fields. You cannot translate the imagekeys!

Some name examples of languages:

* American English -> "simple-rpc-en_us.toml"
* Dutch -> "simple-rpc-nl_nl.toml"
|||

:::danger Warning
Leave the default config file in english, as the mod falls back to this file when a translated file cannot be found
:::

___
## Configuration Variables

### Information
Variables are pieces of text added to the config file that allows you to display data from the game on your status.

These variables can used inside any **'state'**, **'description'**, **'largeImageText'**, **'smallImageText'** and inside buttons.

### Single/Multiplayer Variables (2.5+)
| Variable | Description                                                                |
| --- |----------------------------------------------------------------------------|
| `%player%` | Shows the Minecraft name of the player                                     |
| `%world%` | Shows the current world (Dimension): For example overworld/nether/etc      |
| `%mods%` | Shows the total amount of installed mods                                   |
| `%difficulty%` | Shows the difficulty of the current game                                   |
| `%position%` | Shows the position of the player                                           |
| `%biome%` | Show the name of the biome you're in                                       |
| `%mcver%` | Show the Minecraft Version: For example 1.16.5                             |
| `%instance%` | Shows the name of the instance on supported launchers                      |
| `%launcher%` | Shows the name of the Launcher on supported launchers                      |
| `%server%` | Returns the server IP with _ instead of `.` So 127.0.0.1 becomes 127_0_0_1 |
| `%launchername%` | Get the name of the launcher (if supported) in lower-case                  |
| `%savename%` | Shows the name of your world [!badge variant="info" text="Since 2.6"]                 |

&nbsp;

### Multiplayer Only (2.4+)

| Variable | Description |
| --- | --- |
| `%serverip%` | Shows the IP/Address of the server the player is playing on (Deprecated. Will be removed soon) |
| `%servername%` | Shows the name of the server |
| `%players%` | Shows the amount of online players |
| `%maxplayers%` | Shows the max amount of players on the server |
| `%motd%` | Show the Message of the day of the server |

:::danger
These variables only work in multiplayer (lan or online) games
:::
