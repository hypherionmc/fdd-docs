---
title: Console Relay
order: e
---

!!!warning Online Config Editor
You can edit your config files, using our online config editor at https://editor.firstdark.dev. Alternatively, use the `sdconfigeditor` command in your console to edit your config live on the server, using the web interface.
!!!

Sometimes you want to know what is going on, on your server, without having to access the console.

Luckily, Simple Discord Link comes with a Console relay Feature. This will forward the output of your server console, to the `consoleChannel` of your discord.


### Setting the channel

To get the console channel ID, right-click on the channel you want console relay to go to and select "Copy Channel ID".<br>![](https://cdn.firstdark.dev/docs/sdlink-wiki/mod-config1.png)

In the `[channelsAndWebooks.channels]` section paste that ID in the `consoleChannelID` field

```json
[channelsAndWebhooks.channels]
	#REQUIRED! The ID of the channel to post in and relay messages from. This is still needed, even in webhook mode
	chatChannelID = "1143258591260856360"
	#If this ID is set, event messages will be posted in this channel instead of the chat channel
	eventsChannelID = "0"
	#If this ID is set, console messages sent after the bot started will be relayed here
	consoleChannelID = "124646549815216548"
```

After this, head over to the `[chat]` section, and make sure `sendConsoleMessages = false` is set to `true`.

Restart your server, and you should see your console being relayed back to discord.


!!!warning
Console Relay can ONLY use the consoleChannel. If consoleChannel is not configured, the console will not be relayed.

The consoleWebhook can also NOT be used for console relay, as the rate-limits on webhooks are too low for the amount of messages relayed
!!!


