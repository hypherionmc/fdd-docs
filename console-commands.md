---
title: Console Channel & Commands
order: e
---

## Adding a Console Channel

When launching 2.1 for the first time a new channel setting will appear in the config called `consoleChannelID`.
This channel works the same as the Chat/Event channel settings, BUT, it does NOT support Webhooks or Embeds

---

## Adding Linked Commands

#### Note: Linked Commands only work in the CONSOLE channel

When launching 2.1 for the first time, a new config section will appear. It will look like this:

```json
#Execute Minecraft commands in Discord
[linkedCommands]
#Should linked commands be enabled
enabled = false

#Commands to be linked
commands = []
```

To add a command, replace `commands = []` with:

```json
[[linkedCommands.commands]]
    mcCommand = "say %args%"
    discordCommand = "saymc"
    discordRole = ""
```

`mcCommand` will be the Minecraft command to be executed. In this example, the `Say` command will be executed.
`discordCommand` will be the slug to be used on the discord command to trigger the command.

For example:

`/mc saymc hello world` or `~mc saymc hello world`

On the slash commands, the optional `args` option is passed to the `%args%` variable

On the text command, everything after `saymc` will be passed to the `%args%` variable

`discordRole` is an optional Role Name that will be allowed to execute the command. This setting is optional, but below is an example of a command locked behind a role. Please note that Role Names are case in-sensitive. So for example, Role is named `MacOS`, but `macos` will also work

```json
[[linkedCommands.commands]]
    mcCommand = "stop"
    discordCommand = "stopmc"
    discordRole = "MacOS"
```

### Example with two commands configured


```json
#Execute Minecraft commands in Discord
[linkedCommands]
#Should linked commands be enabled
enabled = true

#Commands to be linked
[[linkedCommands.commands]]
    mcCommand = "say %args%"
    discordCommand = "saymc"
    discordRole = ""

[[linkedCommands.commands]]
    mcCommand = "stop"
    discordCommand = "stopmc"
    discordRole = "MacOS"
```
