---
title: Custom Embeds
order: d
---

!!!warning Online Config Editor
You can edit your config files, using our online config editor at https://editor.firstdark.dev. Alternatively, use the `sdconfigeditor` command in your console to edit your config live on the server, using the web interface.
!!!

Simple Discord Link now allows you to customize the layout of embeds, used for various messages.

Custom Embeds are stored in `config/simple-discord-link/embeds` and use a JSON structure.

By default, the mod includes a single embed layout called `default.json`, which is used for all embeds.


The default embed looks like this:

```json
{
  "color": "#000000",
  "title": null,
  "url": null,
  "author": {
    "name": "%author%",
    "icon_url": "%avatar%",
    "url": null
  },
  "description": "%message_contents%",
  "thumbnail": null,
  "fields": null,
  "image": null,
  "timestamp": 0,
  "footer": null
}
```

***

### Full embed structure

Below, is the full JSON layout of a discord embed:

```json
{
  "title": "Embed Title",
  "description": "Embed Body",
  "color": "#000000",
  "timestamp": "2023-11-15T19:18:27.895Z",
  "url": "https://discord.com",
  "author": {
    "name": "Author name",
    "url": "https://discord.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://glitchii.github.io/embedbuilder/assets/media/banner.png"
  },
  "footer": {
    "text": "Footer text",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "fields": [
    {
      "name": "Field 1, *lorem* **ipsum**, ~~dolor~~",
      "value": "Field value"
    },
    {
      "name": "Field 2",
      "value": "You can use custom emojis <:Kekwlaugh:722088222766923847>. <:GangstaBlob:742256196295065661>",
      "inline": false
    },
    {
      "name": "Inline field",
      "value": "Fields can be inline",
      "inline": true
    },
    {
      "name": "Inline field",
      "value": "*Lorem ipsum*",
      "inline": true
    },
    {
      "name": "Inline field",
      "value": "value",
      "inline": true
    },
    {
      "name": "Another field",
      "value": "> Nope, didn't forget about this",
      "inline": false
    }
  ]
}
```

To ignore a value, simple set it to `null`.

***

### Adding your own embeds

In this example, we will create a custom embed to use, when the player dies.

To get started, create a new file called `death.json` in the `config/simple-discord-link/embeds` folder.

**Tip: Use this [Website](https://www.color-hex.com/) to find HEX color codes to use for `color`.**

We will then use the following layout:

```json
{
  "color": "#15695f",
  "title": "R.I.P 😔",
  "url": null,
  "author": {
    "name": "%author%",
    "icon_url": "%avatar%",
    "url": null
  },
  "description": "%message_contents%",
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "fields": null,
  "image": null,
  "timestamp": 0,
  "footer": {
    "text": "My Awesome Server",
    "icon_url": null
  }
}
```

In this example, we added a Title to the embed, added the server icon as a thumbnail to the embed, and added our server name in the footer.

To enable this embed, open up your config file and change

```json
#Control where DEATH messages are delivered
	[messageDestinations.death]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = false
		#Embed Layout to use
		embedLayout = "default"
```

to

```json
#Control where DEATH messages are delivered
	[messageDestinations.death]
		#The Channel the message will be delivered to. Valid entries are CHAT, EVENT, CONSOLE
		channel = "EVENT"
		#Should the message be sent using EMBED style messages
		useEmbed = true
		#Embed Layout to use
		embedLayout = "death"
```

So to recap, change `embedLayout` to `death`.

The `embedLayout` uses the name of the json file, without the extension. So if your file is called `death.json`, your `embedLayout` will be `death`

***

### Embed Placeholders.

You can use the following placeholders inside embeds:

1) `%author%` -> The name of the Player/Server. For example: `HypherionSA`
2) `%avatar%` -> The player/server avatar link
3) `%message_contents%` -> The actual contents of the message
4) `%username%` -> The raw username of the player/server. For example, `hypherionsa` or `server`
5) `%player_avatar%` -> Get the Player avatar in server messages (Join/Leave, Death etc)
6) `%player_name%` -> Get the name of the player in server messages (Join/Leave, Death etc)