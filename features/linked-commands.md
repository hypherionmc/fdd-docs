---
title: Linked Commands
order: a
---

## Video Guide
[!embed](https://iframe.mediadelivery.net/embed/281161/0d1e1b6f-48b4-407e-af4b-df29d38d548c?autoplay=false&loop=false&muted=false&preload=true&responsive=true)

---

Simple Discord Link allows you to execute Minecraft commands, directly in Discord without having to use the server console.

To use this feature, find the `minecraftCommands` section, near the bottom of your config file. By default, it would look like this:

```json
[minecraftCommands]
    #Allow executing Minecraft commands from Discord
    enabled = false
    #Command Prefix. For example ?weather clear
    prefix = "?"
    #List of command permissions
    permissions = []
```

In the above:

1) `enabled` -> Allows you to enable/disable the use of minecraft commands
2) `prefix` -> This is the prefix that you will use in Discord, to execute a command. For example, to execute the `/weather clear command`, you will run `?weather clear` in discord
3) `permissions` -> This configures and controls how commands can be executed. See more examples below

***

### Examples

||| Allow @everyone to execute certain commands
In this example, everyone in your discord server, can execute some basic Minecraft commands.

The commands in this example are `/help`, `/list` and `/weather clear`.

```json
#Execute Minecraft commands in Discord
[minecraftCommands]
    #Allow executing Minecraft commands from Discord
    enabled = true
    #Command Prefix. For example ?weather clear
    prefix = "?"

    #List of command permissions
    [[minecraftCommands.permissions]]
        role = "0"
        commands = ["weather clear", "help", "list"]
        permissionLevel = 1
```

This will limit everyone to only running these 3 commands, and nothing else.
|||

||| Allow people with a role to execute all OP commands
Say you want your server staff to be able to execute any command from inside Discord, your configuration would look like this.

In this example, we will use a role called `Server Staff` with an ID of `0357089327502390097`.

```json
#Execute Minecraft commands in Discord
[minecraftCommands]
    #Allow executing Minecraft commands from Discord
    enabled = true
    #Command Prefix. For example ?weather clear
    prefix = "?"

    [[minecraftCommands.permissions]]
      role = "0357089327502390097"
      commands = []
      permissionLevel = 4
```

This will allow discord server members with the `Server Staff` role, to execute ANY OP commands (Permission level 4), like ban, kick, stop, etc, just like they would be able to do in-game.
|||

||| Allow a certain role to only execute specific commands
In this example, we will allow a role called `Server Moderators`, with ID `089475609834703498` to execute basic moderation commands in Minecraft.

These commands will be, `ban, kick, pardon`.

```json
#Execute Minecraft commands in Discord
[minecraftCommands]
    #Allow executing Minecraft commands from Discord
    enabled = true
    #Command Prefix. For example ?weather clear
    prefix = "?"

    [[minecraftCommands.permissions]]
      role = "089475609834703498"
      commands = ["ban", "pardon", "kick"]
      permissionLevel = 4
```
|||

***

||| Combined Example
```json
#Execute Minecraft commands in Discord
[minecraftCommands]
    #Allow executing Minecraft commands from Discord
    enabled = true
    #Command Prefix. For example ?weather clear
    prefix = "?"

    [[minecraftCommands.permissions]]
      role = "089475609834703498"
      commands = ["ban", "pardon", "kick"]
      permissionLevel = 4

    [[minecraftCommands.permissions]]
      role = "0"
      commands = ["weather clear", "help", "list"]
      permissionLevel = 1

    [[minecraftCommands.permissions]]
      role = "0357089327502390097"
      commands = []
      permissionLevel = 4
```
|||