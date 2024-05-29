---
title: Configuring the mod
order: b
---
!!! danger
If you hate editing Config Files, check out our new Online [Config Editor](https://editor.firstdark.dev)
!!!

||| Information
Simple RPC uses a universal TOML based config system, with a well named Layout and comments. If you have used the Minecraft version before, this config should feel similar for you.

#### Finding your config files:

`stardewgamefolder/Mods/SimpleRPC/simple-rpc.toml`
|||


||| The Config File
This is the default config that you will use.

This contains all the config for your rich presence such as your discord ID, assets and texts.

Below is a copy of the default, unconfigured config shipped with the mod.
```json
# General Mod Config
[General]
# The discord Application id to use for your Rich Presence
ApplicationID = "1243169976542695454"
# Enable/Disable the mod
Enabled = true
# Enable additional logging. WARNING: MAY CAUSE LOG SPAM!
Debugging = false

# The Game Loading event
[GameLoading]
# Enable/Disable the Game Loading event
Enabled = true
# The first line of text under the app name
Description = "Stardew Valley is loading"
# The second line of text under the app name
State = "Game Starting..."
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Main Menu Event
[MainMenu]
# Enable/Disable the Main Menu Loading event
Enabled = true
# The first line of text under the app name
Description = "{player.name} is currently lazy"
# The second line of text under the app name
State = "Chilling in the menu"
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Load Save Game Event
[LoadGame]
# Enable/Disable the Load Save Game event
Enabled = true
# The first line of text under the app name
Description = "Choosing a game to load"
# The second line of text under the app name
State = "Browsing saved games"
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Start New Game Event
[NewGame]
# Enable/Disable the New Game event
Enabled = true
# The first line of text under the app name
Description = "Getting ready to play"
# The second line of text under the app name
State = "Starting a new game..."
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Server Browser Event
[ServerMenu]
# Enable/Disable the Server Browser event
Enabled = true
# The first line of text under the app name
Description = "Looking for friends..."
# The second line of text under the app name
State = "Browsing for servers"
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Join Game Event
[JoiningGame]
# Enable/Disable the Joining Game event
Enabled = true
# The first line of text under the app name
Description = "{player.name} is joining a game"
# The second line of text under the app name
State = "Joining Game"
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Single Player Event
[SinglePlayer]
# Enable/Disable the Single Player event
Enabled = true
# The first line of text under the app name
Description = "Surviving on the farm"
# The second line of text under the app name
State = "Playing Lonely Mode"
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# The Co-Op Event
[CoOp]
# Enable/Disable the Co-Op event
Enabled = true
# The first line of text under the app name
Description = "Playing with Friends"
# The second line of text under the app name
State = "{server.type}"
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# Generic Fallback event for disabled events
[Generic]
# The first line of text under the app name
Description = "Enjoying Stardew Valley"
# The second line of text under the app name
State = ""
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""
# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
Buttons = [ ]

# Add your own Placeholders here
[CustomPlaceholders]
# Enable/Disable Custom Placeholders
Enabled = false
# List of Custom Placeholders. YOU CAN NOT REPLACE BUILT-IN PLACEHOLDERS!
Variables = [ ]
```
|||

---

## Configuration Variables

||| Information
Variables are pieces of text added to the config file that allows you to display data from the game on your status.

These variables can be used inside any `state`, `description`, `largeImageText`, `smallImageText` and inside buttons.
|||

+++ Global Variables
These variables can be used anywhere in the config file.

| Variable                      | Description                                                                                                                                 |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `{game.modcount}`             | Display the amount of installed mods                                                                                                        |
| `{game.smapi}`                | Display the SMAPI api version                                                                                                               |
| `{game.version}`              | Display the Game Version                                                                                                                    |
| `{game.song}`                 | Display the currently playing song, if any                                                                                                  |
| `{player.name}`               | This will default to Player if you are not in game                                                                                          |

+++ Single/Multi Player
These variables can be used in single player and CoOp mode

| Variable                | Description                                    |
|-------------------------|------------------------------------------------|
| `{game.location}`       | Display the current location name              |
| `{game.date.daypadded}` | Display the current day in 01, 02 etc format   |
| `{game.date.daysuffix}` | Display the suffixed day                       |
| `{game.date.dayofweek}` | Display the current day of the week            |
| `{game.date.day}`       | Display the current day without any formatting |
| `{game.date.yearsuffix}` | Display the suffixed year                      |
| `{game.date.year}`      | Display the current year                       |
| `{game.date.date}`      | Display the current date                       |
| `{game.date.time}`      | Display the current time                       |
| `{game.date.season}`    | Display the current season                     |
|      |                                                |
| `{player.farm}`     | Display the current farm                       |
| `{player.farm_name}`    | Display the current farm name                  |
| `{player.pet}`     | Display your pet name                          |
| `{player.romantic_interest}`    | Display your top romantic interest             |
| `{player.non_romantic_interest}`    | Display your top non-romantic interest         |
| `{player.title}`     | Display your title                             |
| `{player.timeplayed}`    | Display your time played                       |
| `{player.health.max}`    | Display your max health                        |
| `{player.health.percent}`    | Display your health in %                       |
| `{player.health}`    | Display your health                            |
| `{player.stamina.max}`    | Display your max stamina                       |
| `{player.stamina.percent}`    | Display your stamina in %                      |
| `{player.stamina}`    | Display your stamina                           |
|      |                                                |
| `{player.money.comma}`    | Display your money, comma separated            |
| `{player.money.number}`    | Display your money without any formatting      |
| `{player.money}`     | Display your money as shown in game            |
|      |                                                |
| `{player.level.number}`    | Display your level                             |
| `{player.level}`     | Display your level as shown in game            |

+++ Multi Player Only
These variables can only be used in a CoOp game, in addition to the other variables

| Variable         | Description                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------|
| `{server.type}`  | This is a special placeholder to display the server type. This can be editied in the i18n folder |
| `{server.players.current}`   | Display the current number of online players                                                     |
| `{server.players.max}` | Display the max number of players that can be in the game                                        |
+++
