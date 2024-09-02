---
title: Maintenance Mode
order: a
---

When Maintenance Mode is enabled, only players you explicitly allowed to join the server, will be able to join. This is useful for testing new features, configuring options, or just general updates and cleanup.

:::note Allowed Players Note
You will also need to add yourself, and any other admins/OP members to the list!
:::

***

### Managing Maintenance Mode

||| Enabling/Disabling Maintenance Mode
To enable/disable maintenance mode, use the `/maintenance on|off` command.
|||

||| Enable Maintenance until server restart
To automatically disable maintenance when the server restarts, use the `/maintenance schedule untilRestart` command.

This will then enable mainteneance, and disable it once your server restarts.
|||

||| Viewing the current maintenance status
To check if your server is in maintenance mode or not, use the `/maintenance status` command.
|||

***

### Adding/Removing Allowed Players

||| Adding an allowed player
To allow a player to join your server during maintenance mode, use the `/maintenance addAllowed username` command. This will add the player to the allowed list and also reload the config.
|||

||| Removing an allowed player
To remove a player from being able to join your server during maintenance mode, use the `/maintenance removeAllowed username` command. This will remove the player, reload the config and also kick them from the server if they are online at that moment.
|||

||| Viewing Allowed Players
To view a list of players that are currently allowed to access your server, use the `/maintenance list` command.
|||

***

### Changing the MOTD, Icon and Kick Message

||| Changing the MOTD
To change the MOTD that will be shown during maintenance mode, use the `/maintenance setMotd <message>` command.

You can also use [Minecraft](https://www.digminecraft.com/lists/color_list_pc.php) formatting codes, or [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting codes here.
|||

||| Changing the Kick Message
To change the Kick Message that will be shown during maintenance mode, use the `/maintenance setMessage <message>` command.

You can also use [Minecraft](https://www.digminecraft.com/lists/color_list_pc.php) formatting codes, or [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting codes here.
|||

||| Changing the Server Icon
Upload another png image of `64x64px` (in the same folder as your current server icon) and name it `whateveryoulike.png`.

Next, head over to `config/mmode.json`. Change the value of `maintenanceIcon` to `whateveryoulike.png`.

Finally, execute the command `/maintenance reload` to reload the config. Your server will now display this icon when you have maintenance mode enabled
|||