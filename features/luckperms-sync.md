---
title: Sync LuckPerms Ranks with Discord
order: h
---

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

`syncToMinecraft` -> Sync Discord Roles to In Game Ranks
`syncToDiscord` -> Sync In Game Ranks to Discord
`syncs` -> List of ranks and roles that will be synced.


Example:

```json
#LuckPerms group syncing
[luckperms]
    #Sync Groups/Ranks to Minecraft from Discord Roles
    syncToMinecraft = true
    #Sync Groups/Ranks to Discord roles from Minecraft
    syncToDiscord = true
    #List of Ranks and Roles that will be synced. Check the wiki on how to configure this
    [[luckperms.syncs]]
        rank = "testing"
        role = "1310640194755493969"
```

The above example will sync the `testing` group, with a role in discord, and the role in discord with the `testing` group in game


!!! Notice
This sync normally happens when a discord role for a user changes, when the in game group is changed, and during login.
!!!