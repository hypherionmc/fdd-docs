---
order: c
---

The bot current includes two commands. The commands are `whitelist` and `list`.

## Whitelist Command
!!!warning
You need to set whitelisting to true in the config and whitelisting needs to be enabled on your server before this command will work.

Also note that the bot can ONLY unwhitelist players that have been whitelisted through the bot!
!!!

### whitelist add playerName
The command is `prefix`whitelist add. `prefix` will be what you configured in the config. The default is `~`

This adds a minecraft player to your server whitelist. Only one user can add a profile. Example: `~whitelist add hypherionsa`

### whitelist remove playerName
The command is `prefix`whitelist remove. `prefix` will be what you configured in the config. The default is `~`

This removes a minecraft player from your server whitelist. Only the person that added the whitelist, Discord admins and people with KICK perms can unwhitelist users. Example: `~whitelist remove hypherionsa`

### whitelist list
This command lists all player whitelisted THROUGH THE BOT!

## Other Commands

### help
The command is `prefix`help. `prefix` will be what you configured in the config. The default is `~`

This command returns a list of commands available on the bot

### list
The command is `prefix`list. `prefix` will be what you configured in the config. The default is `~`

This command returns a list of online players on the server

### link
The command is `prefix`link. `prefix` will be what you configured in the config. The default is `~`

This command allows players to link their Minecraft profile to their Discord Profile. NOTE: The bot needs MANAGE NICKNAMES permissions for this.

### linkedacc
The command is `prefix`linkedacc. `prefix` will be what you configured in the config. The default is `~`

This command allows admins to view a list of linked Minecraft and Discord accounts

### status
The command is `prefix`status. `prefix` will be what you configured in the config. The default is `~`

This command displays the status of the server. Only admins and members with KICK_MEMBERS can use this command

### stop - (Removed in 1.2)
The command is `prefix`stop. `prefix` will be what you configured in the config. The default is `~`

This command allows you to stop the server. Only admins and members with KICK_MEMBERS can use this command
