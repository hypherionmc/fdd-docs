---
title: Sync LuckPerms Ranks with Discord
order: h
---
!!! Notice
You can also edit this config file with our online editor at https://editor.firstdark.dev to make it easier
!!!

Since Simple Discord Link 3.2.1, it's possible to sync LuckPerms ranks (or groups) with discord roles.

To configure this, open up your `simple-discord-compat.toml` file, and find the LuckPerms sections.

By default, it looks like this:

```json
#LuckPerms group syncing
[luckperms]
	#Sync Groups/Ranks to Minecraft from Discord Roles
	syncToMinecraft = true
	#Sync Groups/Ranks to Discord roles from Minecraft
	syncToDiscord = true
	#List of Ranks and Roles that will be synced. Check the wiki on how to configure this
	syncs = []
```

- `syncToMinecraft` -> Sync Discord Roles to In Game Ranks
- `syncToDiscord` -> Sync In Game Ranks to Discord
- `syncs` -> List of ranks and roles that will be synced. This gets removed when the actual values are added


Example:

```json
#LuckPerms group syncing
[luckperms]
    #Sync Groups/Ranks to Minecraft from Discord Roles
    syncToMinecraft = true
    #Sync Groups/Ranks to Discord roles from Minecraft
    syncToDiscord = true
    #List of Ranks and Roles that will be synced. Check the wiki on how to configure this
    # REMOVE ME syncs = []
    [[luckperms.syncs]]
        rank = "group.testing"
        role = "1310640194755493969"

    [[luckperms.syncs]]
        rank = "group.testingrole"
        role = "2585882845654968465"
```

The above example will sync the `group.testing` group, with a role in discord, and the role in discord with the `testing` group in game


!!! Notice
This sync normally happens when a discord role for a user changes, when the in game group is changed, and during login.
!!!