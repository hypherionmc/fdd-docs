---
title: Changing The Bot Language
order: k
---

Since Simple Discord Link 3.3.0, you can now change the language of the messages sent by the bot in Discord.

This includes: Error messages, command help messages, command feedback and anything else that used to be hard coded to english.

### Changing the Bot Language

On startup with 3.3.0, you will notice a new `language` folder created inside your `simple-discord-link` config folder.

Inside that folder, is a file named: `en_us.json`. This is the default language file used by the bot.

#### Contents of `en_us.json`

```json
{
  "account.unlinked": "Unlinked",
  "account.notfound": "We couldn't find your Minecraft account. Please ask the staff for assistance",
  "account.verify_success": "Your account has been verified",
  "account.unverify_success": "Your account has been un-verified",
  "account.load_failed": "Failed to load your account",
  "account.not_in_database": "Account not found in server database",

  "error.no_discord_server": "Sorry, I cannot find a discord server attached to this bot. Please report this to the server operator",
  "error.empty_cache": "The discord member cache of this server is empty. Please ask the server owner to run the reloadcache discord command",
  "error.no_roles": "Server has required roles configured, but no discord roles were loaded. Please notify the server owner",
  "error.command_failed": "Failed to execute command. Please see your server log",
  "error.no_message_perms": "I do not have permission to send messages in %s",
  "error.no_db_accounts": "Sorry, but this server does not contain any stored players in its database",
  "error.not_a_member": "%s is not a member of this discord server",
  "error.not_a_member_of": "Sorry, you do not seem to be a member of %s. Please try again",
  "error.no_match_found": "No account found that matches %s",
  "error.code_length": "Sorry, I can only handle 4 digit verification code messages. Please try again",
  "error.mc_command_failed": "Failed to execute command: %s",
  "error.verify.only_by_players": "This command can only be used by players",
  "error.verify.not_enabled": "Verification is not enabled for this server",
  "error.hiding.no_account_provided": "You need to supply a player to hide",
  "error.hiding.unhide_no_account_provided": "You need to supply a player to unhide",
  "error.unknown": "Unknown",

  "feedback.bot_reloaded": "Bot has been reloaded",

  "command.help.help": "Bot commands and Help",
  "command.help.title": "Bot Commands",

  "command.playerlist.help": "List currently online players on the server",
  "command.playerlist.title": "Online Players",
  "command.playerlist.no_online": "There are currently no players online",
  "command.playerlist.title_page": "Online Players - Page %s/%s",
  "command.playerlist.footer": "%s/%s players online",

  "command.hiddenplayers.help": "List all hidden players on your server",
  "command.hiddenplayers.title": "Hidden Players",
  "command.hiddenplayers.no_players": "There are currently no hidden players",
  "command.hiddenplayers.title_page": "Hidden Players - Page %s/%s",

  "command.hideplayer.help": "Make a discord user invisible",
  "command.hideplayer.access_control": "The minecraft option cannot be used when both access control and optionalVerification is disabled",
  "command.hideplayer.account_not_found": "Cannot find linked minecraft account for user %s",

  "command.unhideplayer.help": "Make a discord user visible",

  "command.reloadcache.help": "Force reload the bot cache",
  "command.reloadcache.reloaded": "Cache has been reloaded",
  "command.reloadcache.not_reloaded": "Failed to reload cache. Please check your server log",

  "command.setchannel.help": "Configure a channel for the mod to use",
  "command.setchannel.saved": "Saved Channel to Config. Restart your server for the channel to become active",
  "command.setchannel.webhook_saved": "Saved Webhook to Config. Restart your server for the webhook to become active",
  "command.setchannel.failed": "Failed to save config: %s",

  "command.staffunverify.help": "Unverify another player's Minecraft account",
  "command.staffverify.help": "Allow staff members verify minecraft players, without verification",

  "command.unverify.help": "Unverify your previously verified Minecraft account",
  "command.unverify.failed": "Sorry, we could not un-verify your Minecraft account. Please try again",

  "command.verify.help": "Verify your Minecraft account to access the server",
  "command.verify.missing_code": "You need to provide a verification code",
  "command.verify.already_verified": "Sorry, you already have a verified account and this server does not allow multiple accounts",
  "command.verify.failed": "Sorry, we could not verify your Minecraft account. Please try again",

  "command.verifiedaccounts.help": "View a list of verified Minecraft Accounts",
  "command.verifiedaccounts.title": "Verified Accounts",
  "command.verifiedaccounts.no_accounts": "There are no verified accounts for this discord",
  "command.verifiedaccounts.title_page": "Verified Accounts - Page %s/%s",

  "message.attachments": "(%s attachments)",
  "message.replied_to": "Replied to %s: %s",

  "commands.not_allowed": "Sorry, minecraft commands are not allowed in this channel",
  "commands.permission_denied": "Sorry, you do not have permission to execute that command",
  "commands.command_not_allowed": "Sorry, but you are not allowed to execute that command",

  "hiding.now_hidden": "%s is now hidden",
  "hiding.failed": "Failed to hide player. Error: %s",
  "hiding.not_hidden": "Player is not hidden",
  "hiding.unhidden": "Player %s is no longer hidden",
  "hiding.unhide_failed": "Failed to unhide player. Error: %s",

  "mc.sdconfigeditor.opening": "Config Editor Connection initializing. Check your log for the link",

  "tooltip.display_name": "Display Name",
  "tooltip.username": "Username",
  "tooltip.roles": "Roles"
}
```

Here, you can change the text displayed. After changing and saving the file, restart your server, or use the `reloadbot` command. Restarting is recommended though.

### Built In Languages

Currently, Simple Discord Link has built in language files for the following languages:

- `en_us` - (English United States)
- `es_es` - (Spanish) (Submitted by ArkoSammy12).

!!!danger
To use one of the built-in languages, change the `language` field in `simple-discord-link.toml` to the language code given above. You are also welcome to submit translations for your language, to our GitHub repo, so it can be included in the mod.