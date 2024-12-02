---
title: Trigger Commands on Role Changes
order: g
---

Trigger Commands, is a new feature of SDLink, that allows you to execute minecraft commands, when discord roles for a linked account changes.

!!! Notice
This features requires access control, with at least just verification mode
!!!

Default Config:

```json
#Run Minecraft commands when discord roles changes. Requires Access Control to be enabled
[triggerCommands]
	#Should any of the below commands be executed when a role changes
	enabled = false
	#Commands to run when roles are added
	roleAdded = []
	#Commands to run when roles are removed
	roleRemoved = []
```

### Running a minecraft command when a role is added in discord

To run a command when a role is added to a user in discord, changes `roleAdded` to the following:

```json
[[triggerCommands.roleAdded]]
  discordRole = "12345" # or RoleName
  # %player% and %role%
  minecraftCommand = ["mycommand", "mycommand2"] 
```

So your full config will look like this:

```json
#Run Minecraft commands when discord roles changes. Requires Access Control to be enabled
[triggerCommands]
	#Should any of the below commands be executed when a role changes
	enabled = true
	#Commands to run when roles are added
    [[triggerCommands.roleAdded]]
        discordRole = "12345" # or RoleName
        #%player% and %role%
        minecraftCommand = ["mycommand", "mycommand2"]
    #Commands to run when roles are removed
	roleRemoved = []
```

This will now run `mycommand` and `mycommand2` when the user receives the `12345` role.

### Running a command when a role is removed in discord

To run a command when a role is removed from a user in discord, changes `roleRemoved` to the following:

```json
[[triggerCommands.roleRemoved]]
  discordRole = "12345" # or RoleName
  # %player% and %role%
  minecraftCommand = ["mycommand", "mycommand2"] 
```

So your full config will look like this:

```json
#Run Minecraft commands when discord roles changes. Requires Access Control to be enabled
[triggerCommands]
	#Should any of the below commands be executed when a role changes
	enabled = true
	#Commands to run when roles are added
    roleAdded = []
    #Commands to run when roles are removed
    [[triggerCommands.roleAdded]]
        discordRole = "12345" # or RoleName
        #%player% and %role%
        minecraftCommand = ["mycommand", "mycommand2"]
```