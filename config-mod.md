---
order: b
title: Configuring the Mod
---

+++ Requirements 
Before you can configure the mod, you need:

* Have a Discord Bot created and invited to your server [See Here](initial-setup.md)
* Started your server at-least once, to have the config file generated

+++ Config File Locations
* Forge/Fabric/Quilt: `config/simple-discord-bot.toml`
* Paper/Spigot/Bukkit: `plugins/SDLink/simple-discord-bot.toml`
+++

***

### Adding the required information

The very first thing to do, is to change the `botToken` field from "" to the token you copied from the previous setup. If you did not do this already or don't have a bot token, then please visit `Creating the Discord Bot`.

You can find the `botToken` in the `general` section of the config file.

AN EXAMPLE:

```
#General Mod Config
[general]
	#The Token of the Bot to use. KEEP THIS PRIVATE
	botToken = "ODcXXXg2ODA0MzkzNTAXXXXX.YRgajA.kzNCQLfGdVhKXXXie4rVC-EXXX"
```

***

#### Configuring channels

The mod allows you to configure 2 channels to send messages in. If both are configured, one will be used for Chat messages only, and the other one for everything else.

You do not need to configure both, BUT, `channelID` must always be defined. If it is not, the bot will NOT send messages from discord back to minecraft.

First make sure you have Developer mode enabled in discord. To do/check this, click the gear icon next to your discord name.

![](https://cdn.firstdarkdev.xyz/docs/sdlink/discord-profile.png)
&nbsp; &nbsp;

Next, scroll down to "APP SETTINGS" and click on `Advanced`. Make sure Developer mode is enabled

![](https://cdn.firstdarkdev.xyz/docs/sdlink/dev-mode.png)

After doing this, go back to your discord server, choose a channel to use for the chat and right-click on the channel name, then click `Copy ID` on the popup menu. This will copy the Channel ID required for the config to the clipboard.

Next, change `channelID` from `0` to the value you copied in the previous step. If you wish to have a separate chat and events channel, then repeat the previous step on the channel you wish to use for logging and change `logChannelID` from `0` to the copied ID.

You can leave `logChannelID` on `0`, then the mod will simply use your chat channel for everything.

!!!warning
The log channel has no effect when Webhooks are enabled
!!!

AN EXAMPLE:

```
#Chat Config
[chatConfig]
	#The ID of the channel to post in. This will be ignored if webhooks are enabled
	channelID = 123457224520163438
	#If this ID is set, event messages will be posted in this channel instead of the chat channel
	logChannelID = 123428407002800200
```

***

#### Using Webhooks

!!!warning
You still need to configure the `channelID` config value, otherwise the bot cannot relay messages from discord back to minecraft
!!!

This mod has two ways of delivering messages. You can choose which one to use. Using Channel Webhooks or using pre-configured channels. Webhooks require a bit more setup, but allows the bot to show the players' skin as the profile picture, and the player name as the name of the person that sent the message. Below is an example of a Webhook message.

![Webhook Message Example](https://cdn.firstdarkdev.xyz/docs/sdlink/webhook-example.png)
&nbsp;

To configure this, go to a channel in Discord that you want to use for messages. Click the gear icon next to the channel name to open the channel settings. Next head over to `Integrations`.
![Integration Screen](https://cdn.firstdarkdev.xyz/docs/sdlink/integrations.png)

To create a new webhook, click on `View Webhooks >` to open the webhooks screen.
![Webhook Screen](https://cdn.firstdarkdev.xyz/docs/sdlink/webhooks.png)
&nbsp;

By default, discord will automatically create a new webhook if the channel does not have one. If you already have one or if a new one was created, click "Copy Webhook URL" to copy the URL to the dashboard. If you have an existing webhook, you may need to click on the webhook name to see this option.

Next, paste this URL into the config file where it says `webhookurl`. Also change `enabled` to true to make sure the bot uses webhooks. You can specify a `serverAvatar` link if you want. This is the profile picture that will be used by the bot when a message is sent from "SERVER".

AN EXAMPLE:

```
#Webhook Config
[webhookConfig]
	#Should webhook messages be used
	enabled = true
	#The URL of the channel webhook
	webhookurl = "https://discord.com/api/webhooks/123456761114300438/xxxxxxgiZCcR8Qc9v7k2lv2dWmxrWUXh35j0O8OoymC74LAGOoy8xyVU0NtU95-xxxxx"
	#The URL of the channel webhook to use for Server Messages Messages
	webhookurlLogs = "https://discord.com/api/webhooks/765432161114300438/xxxxxxgiZCcR8Qc9v7k2lv2dWmxrWUXh35j0O8OoymC74LAGOoy8xyVU0NtU95-xxxxx"
	#A DIRECT link to an image to use as the avatar for server messages
	serverAvatar = ""
```

You can now also configure another webhook to use as the for Log messages. If this is not configured, the CHAT webhook will be used for both

***

### The default, un-configured config file contents

```

#General Mod Config
[general]
	#Should the bot be enabled or not
	enabled = true
	#Should debug logging be enabled? WARNING: THIS CAN SPAM YOUR LOG!
	debugging = false
	#Should the bot be allowed to whitelist/un-whitelist players. Whitelisting needs to be enabled on your server as well
	whitelisting = false
	#Should the bot be allowed to whitelist/un-whitelist players in OFFLINE mode. Whitelisting needs to be enabled on your server as well
	offlinewhitelist = false
	#Automatically link Minecraft and Discord Accounts when a user is whitelisted
	linkedWhitelist = false
	#Should only admins be allowed to whitelist players
	onlyAdminsWhitelist = false
	#If a role name is defined here, it will be assigned to players when they are whitelisted
	autoWhitelistRole = ""
	#If a role name is defined here, it will be assigned to players when their MC and Discord accounts are linked
	linkedRole = ""
	#Should the /discord command be enabled in game
	inviteCommandEnabled = false
	#Discord Invite Link used by the in-game invite command
	inviteLink = ""
	#Internal version control. DO NOT TOUCH!
	configVersion = 23

#Config specific to the discord bot
[botConfig]
	#The Token of the Bot to use. KEEP THIS PRIVATE. See https://readme.firstdarkdev.xyz/simple-discord-link/initial-setup/ to find this
	botToken = ""
	#How quickly the bot status should update
	activityUpdateInterval = 30
	#If defined, only this role can use Staff Functions. Otherwise, it defaults back to admin/kick perms
	staffRole = ""
	#Should the bot use / commands. NOTE: THIS MAY TAKE UP TO 24 HOURS TO SHOW UP IN YOUR DISCORD
	slashCommands = false
	#The prefix to use for bot commands. Example: ~players. THIS HAS NO EFFECT WHEN USING SLASH COMMANDS
	botPrefix = "~"
	#Do not add Playing. A status to display on the bot. You can use %players% and %maxplayers% to show the number of players on the server
	botStatus = "Minecraft"
	#The type of the status displayed on the bot. Valid entries are: PLAYING, STREAMING, WATCHING, LISTENING
	botStatusType = "PLAYING"
	#Should the bot update the topic of your chat channel automatically
	doTopicUpdates = true
	#A topic for the Chat Relay channel. You can use %player%, %maxplayers%, %uptime% or just leave it empty.
	channelTopic = "Playing Minecraft with %players%/%maxplayers% people | Uptime: %uptime%"

#Config relating to the discord channels to use with the mod
[channels]
	#The ID of the channel to post in and relay messages from. This is still needed, even in webhook mode
	chatChannelID = 0
	#If this ID is set, event messages will be posted in this channel instead of the chat channel
	eventsChannelID = 0
	#If this ID is set, console messages sent after the bot started will be relayed here, and you can execute minecraft commands here
	consoleChannelID = 0

#Webhook Config
[webhooks]
	#Should webhook messages be used
	enabled = false
	#The URL of the channel webhook to use for Chat Messages
	chatWebhook = ""
	#The URL of the channel webhook to use for Server Messages
	eventsWebhook = ""
	#The URL of the channel webhook to use for Console Messages
	consoleWebhook = ""
	#A DIRECT link to an image to use as the avatar for server messages. Also used for embeds
	serverAvatar = ""
	#The name to display for Server messages when using Webhooks
	serverName = "Minecraft Server"

#Chat Config
[chat]
	#The type of image to use as the player icon in messages. Valid entries are: AVATAR, HEAD, BODY, COMBO
	playerAvatarType = "HEAD"
	#Prefix to add to Minecraft when a message is relayed from Discord. Supports MC formatting. Use %user% for the Discord Username
	mcPrefix = "§e[Discord]§r %user%: "
	#Should messages from bots be relayed
	ignoreBots = true
	#Should SERVER STARTING messages be shown
	serverStarting = true
	#Should SERVER STARTED messages be shown
	serverStarted = true
	#Should SERVER STOPPING messages be shown
	serverStopping = true
	#Should SERVER STOPPED messages be shown
	serverStopped = true
	#Should the chat be relayed
	playerMessages = true
	#Should Join and Leave messages be posted
	joinAndLeaveMessages = true
	#Should Advancement messages be posted
	advancementMessages = true
	#Should Death Announcements be posted
	deathMessages = true
	#Should Messages from the /say command be posted
	sendSayCommand = true
	#Should commands be posted to discord
	broadcastCommands = true
	#Commands that should not be broadcasted to discord
	ignoredCommands = ["particle", "login"]

#Change the contents of certain event messages
[messages]
	#Convert Discord to MC, and MC to Discord Formatting
	formatting = true
	#Should console messages be sent to the Console Channel
	sendConsoleMessages = true
	#Server Starting Message
	serverStarting = "*Server is starting...*"
	#Server Started Message
	serverStarted = "*Server has started. Enjoy!*"
	#Server Stopping Message
	serverStopping = "*Server is stopping...*"
	#Server Stopped Message
	serverStopped = "*Server has stopped...*"
	#Player Joined Message. Use %player% to display the player name
	playerJoined = "*%player% has joined the server!*"
	#Player Left Message. Use %player% to display the player name
	playerLeft = "*%player% has left the server!*"
	#Achievement Messages. Available variables: %player%, %title%, %description%
	achievements = "*%player% has made the advancement [%title%]: %description%*"
	#Chat Messages. Available variables: %player%, %message%
	chat = "%message%"
	#Command Messages. Available variables: %player%, %command%
	commands = "%player% **executed command: %command%**"
	#Should messages sent with TellRaw be sent to discord as a chat? (Experimental)
	relayTellRaw = true
	#Should the entire command executed be relayed to discord, or only the name of the command
	relayFullCommands = false
	#The message to show when someone uses /discord command. You can use %inviteurl%
	inviteMessage = "Hey, check out our discord server here -> %inviteurl%"

#Change in which channel messages appear
[messageDestinations]

	#Control where CHAT messages are delivered
	[messageDestinations.chat]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "CHAT"
		#Should the message be sent using EMBED style messages
		useEmbed = false

	#Control where START/STOP messages are delivered
	[messageDestinations.startStop]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = false

	#Control where JOIN/LEAVE messages are delivered
	[messageDestinations.joinLeave]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = false

	#Control where ADVANCEMENT messages are delivered
	[messageDestinations.advancements]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = false

	#Control where DEATH messages are delivered
	[messageDestinations.death]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = false

	#Control where COMMAND messages are delivered
	[messageDestinations.commands]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = false

#Enable or Disable certain bot commands
[botCommands]
	#Allow members to link their MC and Discord accounts
	accountLinking = true
	#Enable/Disable the Player List command
	allowPlayerList = true
	#Enable/Disable the Server Status command
	allowServerStatus = true

#Execute Minecraft commands in Discord
[linkedCommands]
	#Should linked commands be enabled
	enabled = false
	#Commands to be linked
	commands = []
```
