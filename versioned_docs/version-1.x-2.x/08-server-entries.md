---
title: Custom Server Entries
order: f
---
Since Simple RPC Version 2.5, it's now possible to add "custom server entries", that allow you to change the Rich Presence display data based on the IP of the server you are connected to.
This allows modpack makers to include a rich presence when someone is playing on one of their official servers, instead of just having `Playing on djghksdjh`.

This file can be found in the dedicated `simple-rpc` folder and is called `server-entries.toml`. This file, like the normal config file also supports translations, so, you can for example use `server-entries-en_us.toml` for english.

This file has a very basic layout, and is easy to work with. By default, the config file looks like this:

```toml
enabled = false
version = 1
entries = []
```

To add a custom server entry, simply replace `entries = []` with the following:

```toml
[[entry]]
	ip = "yourserverip"
	description = "Look mom, I have a server!"
	state = "Playing on the best damn mc server ever"
	largeImageKey = "server_log"
	largeImageText = "Find us at https://myawesomeserver.com"
	smallImageKey = ""
	smallImageText = ""
```

:::info
Please note that `ip`, has to match the IP address or url that you use to connect to the server exactly. Meaning if you connect using `server.yourdomain.com`, then you need to use that as the IP. If you use `127.0.0.1:5689`, then you need to use that as the IP
:::

As an example, a complete config file would look like this:

```toml
enabled = true
version = 1

[[entry]]
	ip = "hypherionmc.me:3008"
	description = "Testing Server Overrides"
	state = "Playing on a local server"
	largeImageKey = "hypherion_2"
	largeImageText = "It works"
	smallImageKey = ""
	smallImageText = ""
```

:::warning
Don't forget to change `enabled` to `true` to enable this config file to work!
:::
