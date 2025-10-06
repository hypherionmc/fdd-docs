---
title: Built-In Placeholders
position: 8
---

Placeholders are custom functions, that replace pieces of text with data during the config loading.

These variables can be used inside any `state`, `description`, `largeImageText`, `smallImageText` and inside buttons.

Some variables can also be used inside `largeImageKey` and `smallImageKey`. These are marked with [!badge IMAGE]

### Global Placeholders

These placeholders can be used anywhere. If data for a placeholder is not available, it will resolve to a dummy value.

| Variable | Description                                                         |
| --- |---------------------------------------------------------------------|
| &#123;&#123;game.version&#125;&#125; | Show the current version of the running game                        |
| &#123;&#123;game.mods&#125;&#125; | Show the amount of mods installed                                   |
| &#123;&#123;player.name&#125;&#125; | Show the name of the logged in Minecraft Player                     |
| &#123;&#123;player.uuid&#125;&#125; | Return the UUID of the player. Useful for custom avatar services |
| |                                                                     |
| IN GAME ONLY | These variables only resolve while you are in game                  |
| &#123;&#123;world.name&#125;&#125; | Display the name of the current dimension/world the player is in    |
| &#123;&#123;world.difficulty&#125;&#125; | Shows the current game difficulty                                   |
| &#123;&#123;world.savename&#125;&#125; | Display the name of the world you are playing on, AKA the save name |
| &#123;&#123;world.time.12&#125;&#125; | Display the current world time in 12hr format                       |
| &#123;&#123;world.time.24&#125;&#125; | Display the current time in 24hr format |
| &#123;&#123;world.time.day&#125;&#125; | Display the current world day count |
| &#123;&#123;world.weather&#125;&#125; | Display the current biome/dimension weather |
| &#123;&#123;world.biome&#125;&#125; | Display the name of the current biome the player is in |
| | |
| &#123;&#123;player.position&#125;&#125; | Display the current position of the player in the world |
| &#123;&#123;player.health.current&#125;&#125; | Display the current player health |
| &#123;&#123;player.health.max&#125;&#125; | Display the maximum health of the player |
| &#123;&#123;player.health.percent&#125;&#125; | Display the current health % of the player |
| &#123;&#123;player.item.off_hand&#125;&#125; | Diplay the name of the item the player has in their off-hand |
| &#123;&#123;player.item.main_hand&#125;&#125; | Display the name of the item the player has in their main-hand |

### Image Placeholders

These placeholders are usable inside image keys

| Variable          | Description           |
|-------------------|-----------------------|
| &#123;&#123;images.player&#125;&#125; | Player Head           |
| &#123;&#123;images.player.head&#125;&#125;   | Isometric Player Head |
| &#123;&#123;images.realm&#125;&#125;  | Realm Icon if any     |
| &#123;&#123;images.server&#125;&#125; | Server Icon if any    |

### Server Placeholders

These placeholders are only usable when you are connected to a Server or Lan World

| Variable      | Description                                   |
|---------------|-----------------------------------------------|
| &#123;&#123;server.ip&#125;&#125; | The Raw IP of the server you are connected to |
| &#123;&#123;server.ip_underscore&#125;&#125; | The IP of the server, but with `.` replaced with `_` |
| &#123;&#123;server.name&#125;&#125; | The name of the server you are playing on |
| &#123;&#123;server.motd&#125;&#125; | The MOTD of the server you are playing on |
| &#123;&#123;server.players.count&#125;&#125; | Total players currently online |
| &#123;&#123;server.players.countexcl&#125;&#125; | Total number of online players, excluding yourself |
| &#123;&#123;server.players.max&#125;&#125; | The max amount of players allowed on the server |

### Realms Placeholders

These placeholders are only usable when you are connected to a Realm

| Variable       | Description                                |
|----------------|--------------------------------------------|
| &#123;&#123;realm.name&#125;&#125; | The name of the realm you are connected to |
| &#123;&#123;realm.description&#125;&#125; | The description of the realm you are connected to |
| &#123;&#123;realm.world&#125;&#125; | The name of the current world of the realm |
| &#123;&#123;realm.game&#125;&#125; | The name of the mini-game of the realm, if any |
| &#123;&#123;realm.players.count&#125;&#125; | The current online players on the realm |
| &#123;&#123;realm.players.max&#125;&#125; | The maximum amount of players allowed on the realm |

### Replay Mod Placeholders

These placeholders are only usable if Replay Mod is installed

| Variable       | Description                                |
|----------------|--------------------------------------------|
| &#123;&#123;replaymod.time.elapsed&#125;&#125; | Total amount of time elapsed in the current render |
| &#123;&#123;replaymod.time.left&#125;&#125; | Total amount of time remaining in the current render |
| &#123;&#123;replaymod.frames.current&#125;&#125; | The total amount of rendered frames |
| &#123;&#123;replaymod.frames.total&#125;&#125; | The total amount of frames to render |

### Other Placeholders

These placeholders don't server any specific function. They are currently only used for the Launcher integration

| Variable       | Description                                |
|----------------|--------------------------------------------|
| &#123;&#123;launcher.name&#125;&#125; | The name of the detected launcher |
| &#123;&#123;launcher.pack&#125;&#125; | The name of the detected launcher modpack name |
| &#123;&#123;launcher.icon&#125;&#125; | The icon of the launcher instance, if any |
