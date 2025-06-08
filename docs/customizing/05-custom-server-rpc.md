---
title: Override the RPC based on the Server
position: 5
---
:::secondary Work In Progress
This documentation is still under construction. Please be patient while we flesh it out and improve. If you need any help, please drop by our Discord server
:::
---

## Information
Sometimes, you may be playing on a server and think, man, I would love to have a unique RPC displayed just for this server.

In the past, we allowed Servers to override the RPC shown, when players are connected to them. This feature was removed, and now allow players to add their own.

This config file is located at `config/simple-rpc/server-entries.toml`

:::info Translations
This config file, also supports translations, like the main Simple RPC config file
:::
:::

## Default Config

By default, the server entries config file would look like this:

```toml title="config/simple-rpc/server-entries.toml"
#Enable/Disable Server Entries overrides
enabled = false
#Internal Version Number. NO TOUCHY!
version = 3
#Server override entries
entry = []
```

## Adding a Server Override

To add an override for a server, you have to remove the `entry = []` line, and replace it with the following:

```toml title="config/simple-rpc/server-entries.toml"
[[entry]]
  ip = "127.0.0.1"
  
  [[entry.presence]]
    #The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
    type = "PLAYING"
    #The first line of text under the app name
    description = "Currently In {{world.name}}"
    #The second line of text under the app name
    state = "Playing on My Awesome Server"
    #The Asset ID or URLs of images to randomly use for the large image
    largeImageKey = ["mclogonew"]
    #The text to show when someone hovers over the largeImage
    largeImageText = "It's Minecraft {{game.version}}, but modded"
    #The Asset ID or URLs of images to randomly use for the small image
    smallImageKey = ["{{images.player}}"]
    #The text to show when someone hovers over the smallImage
    smallImageText = "{{player.name}}"
    #The Twitch or Youtube URL to use when type is set to STREAMING
    streamingActivityUrl = "https://twitch.tv/twitch"
    #List of buttons (max 2) to show on the RPC
    buttons = []
```

So your full config file, will now look like this:

```toml title="config/simple-rpc/server-entries.toml"
#Enable/Disable Server Entries overrides
enabled = true
#Internal Version Number. NO TOUCHY!
version = 3
#Server override entries
#REMOVE MEEEEEEE entry = []

[[entry]]
    ip = "127.0.0.1"
    
    [[entry.presence]]
        #The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
        type = "PLAYING"
        #The first line of text under the app name
        description = "Currently In {{world.name}}"
        #The second line of text under the app name
        state = "Playing on My Awesome Server"
        #The Asset ID or URLs of images to randomly use for the large image
        largeImageKey = ["mclogonew"]
        #The text to show when someone hovers over the largeImage
        largeImageText = "It's Minecraft {{game.version}}, but modded"
        #The Asset ID or URLs of images to randomly use for the small image
        smallImageKey = ["{{images.player}}"]
        #The text to show when someone hovers over the smallImage
        smallImageText = "{{player.name}}"
        #The Twitch or Youtube URL to use when type is set to STREAMING
        streamingActivityUrl = "https://twitch.tv/twitch"
        #List of buttons (max 2) to show on the RPC
        buttons = []
```

---

## Example with Multiple RPCs per Server

```toml title="config/simple-rpc/server-entries.toml"
#Enable/Disable Server Entries overrides
enabled = true
#Internal Version Number. NO TOUCHY!
version = 3
#Server override entries
#REMOVE MEEEEEEE entry = []

[[entry]]
    ip = "127.0.0.1"
    
    [[entry.presence]]
        #The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
        type = "PLAYING"
        #The first line of text under the app name
        description = "Currently In {{world.name}}"
        #The second line of text under the app name
        state = "Playing on My Awesome Server"
        #The Asset ID or URLs of images to randomly use for the large image
        largeImageKey = ["mclogonew"]
        #The text to show when someone hovers over the largeImage
        largeImageText = "It's Minecraft {{game.version}}, but modded"
        #The Asset ID or URLs of images to randomly use for the small image
        smallImageKey = ["{{images.player}}"]
        #The text to show when someone hovers over the smallImage
        smallImageText = "{{player.name}}"
        #The Twitch or Youtube URL to use when type is set to STREAMING
        streamingActivityUrl = "https://twitch.tv/twitch"
        #List of buttons (max 2) to show on the RPC
        buttons = []

    [[entry.presence]]
        #The Activity type to use for this RPC. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
        type = "PLAYING"
        #The first line of text under the app name
        description = "I AM LOOSING MY MIND WRITING THESE DOCS"
        #The second line of text under the app name
        state = "Playing with some friends"
        #The Asset ID or URLs of images to randomly use for the large image
        largeImageKey = ["mclogonew"]
        #The text to show when someone hovers over the largeImage
        largeImageText = "It's Minecraft {{game.version}}, but modded"
        #The Asset ID or URLs of images to randomly use for the small image
        smallImageKey = ["{{images.player}}"]
        #The text to show when someone hovers over the smallImage
        smallImageText = "{{player.name}}"
        #The Twitch or Youtube URL to use when type is set to STREAMING
        streamingActivityUrl = "https://twitch.tv/twitch"
        #List of buttons (max 2) to show on the RPC
        buttons = []
```

You can also add your own buttons to these entries. See [Adding Buttons](./adding-buttons) for more info.

:::danger IP Address Notice
Please note that ip, has to match the IP address or url that you use to connect to the server exactly. Meaning if you connect using server.yourdomain.com, then you need to use that as the IP. If you use 127.0.0.1:5689, then you need to use that as the IP
:::