---
title: Sync FTB Ranks with Discord
order: i
---

Since Simple Discord Link 3.2.1, it's possible to sync FTB ranks, ranks with discord roles.

To configure this, open up your `simple-discord-compat.toml` file, and find the FTB Ranks sections.

By default, it looks like this:

```json
#FTB Ranks Rank syncing
[ftbranks]
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
#FTB Ranks Rank syncing
[ftbranks]
    #Sync Groups/Ranks to Minecraft from Discord Roles
    syncToMinecraft = true
    #Sync Groups/Ranks to Discord roles from Minecraft
    syncToDiscord = true
    #List of Ranks and Roles that will be synced. Check the wiki on how to configure this
    [[ftbranks.syncs]]
        rank = "testrank"
        role = "1310591485254697010"
```

The above example will sync the `testrank` rank, with a role in discord, and the role in discord with the `testrank` rank in game


!!! Notice
This sync normally happens when a discord role for a user changes, when the in game rank is changed, and during login.
!!!