---
title: Built-In Placeholders
order: h
---
!!!secondary Work In Progress
This documentation is still under construction. Please be patient while we flesh it out and improve. If you need any help, please drop by our Discord server
!!!
---

Placeholders are custom functions, that replace pieces of text with data during the config loading.

These variables can be used inside any `state`, `description`, `largeImageText`, `smallImageText` and inside buttons.

Some variables can also be used inside `largeImageKey` and `smallImageKey`. These are marked with [!badge IMAGE]

### Global Placeholders

||| Global Placeholders

These placeholders can be used anywhere. If data for a placeholder is not available, it will resolve to a dummy value.

| Variable | Description                                                         |
| --- |---------------------------------------------------------------------|
| {{game.version}} | Show the current version of the running game                        |
| {{game.mods}} | Show the amount of mods installed                                   |
| {{player.name}} | Show the name of the logged in Minecraft Player                     |
| {{player.uuid}} | Return the UUID of the player. Useful for custom avatar services |
| |                                                                     |
| IN GAME ONLY | These variables only resolve while you are in game                  |
| {{world.name}} | Display the name of the current dimension/world the player is in    |
| {{world.difficulty}} | Shows the current game difficulty                                   |
| {{world.savename}} | Display the name of the world you are playing on, AKA the save name |
| {{world.time.12}} | Display the current world time in 12hr format                       |
| {{world.time.24}} | Display the current time in 24hr format |
| {{world.time.day}} | Display the current world day count |
| {{world.weather}} | Display the current biome/dimension weather |
| {{world.biome}} | Display the name of the current biome the player is in |
| | |
| {{player.position}} | Display the current position of the player in the world |
| {{player.health.current}} | Display the current player health |
| {{player.health.max}} | Display the maximum health of the player |
| {{player.health.percent}} | Display the current health % of the player |
| {{player.item.off_hand}} | Diplay the name of the item the player has in their off-hand |
| {{player.item.main_hand}} | Display the name of the item the player has in their main-hand |

|||

### Image Placeholders

||| Images 

These placeholders are usable inside image keys

| Variable          | Description           |
|-------------------|-----------------------|
| {{images.player}} | Player Head           |
| {{images.head}}   | Isometric Player Head |
| {{images.realm}}  | Realm Icon if any     |
| {{images.server}} | Server Icon if any    |

|||

### Server Placeholders

||| Multi Player Placeholders

These placeholders are only usable when you are connected to a Server or Lan World

| Variable      | Description                                   |
|---------------|-----------------------------------------------|
| {{server.ip}} | The Raw IP of the server you are connected to |
| {{server.ip_underscore}} | The IP of the server, but with `.` replaced with `_` |
| {{server.name}} | The name of the server you are playing on |
| {{server.motd}} | The MOTD of the server you are playing on |
| {{server.players.count}} | Total players currently online |
| {{server.players.countexcl}} | Total number of online players, excluding yourself |
| {{server.players.max}} | The max amount of players allowed on the server |


|||

### Realms Placeholders

||| Realms Placeholders

These placeholders are only usable when you are connected to a Realm

| Variable       | Description                                |
|----------------|--------------------------------------------|
| {{realm.name}} | The name of the realm you are connected to |
| {{realm.description}} | The description of the realm you are connected to |
| {{realm.world}} | The name of the current world of the realm |
| {{realm.game}} | The name of the mini-game of the realm, if any |
| {{realm.players.count}} | The current online players on the realm |
| {{realm.players.max}} | The maximum amount of players allowed on the realm |

|||

### Replay Mod Placeholders

||| Replay Mod Placeholders

These placeholders are only usable if Replay Mod is installed

| Variable       | Description                                |
|----------------|--------------------------------------------|
| {{replaymod.time.elapsed}} | Total amount of time elapsed in the current render |
| {{replaymod.time.left}} | Total amount of time remaining in the current render |
| {{replaymod.frames.current}} | The total amount of rendered frames |
| {{replaymod.frames.total}} | The total amount of frames to render |

|||

### Other Placeholders

||| Other Placeholders

These placeholders don't server any specific function. They are currently only used for the Launcher integration

| Variable       | Description                                |
|----------------|--------------------------------------------|
| {{launcher.name}} | The name of the detected launcher |
| {{launcher.pack}} | The name of the detected launcher modpack name |
| {{launcher.icon}} | The icon of the launcher instance, if any |

|||