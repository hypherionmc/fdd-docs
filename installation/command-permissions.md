---
title: Slash Command Permissions
order: g
---

## Video Guide
[!embed](https://iframe.mediadelivery.net/embed/281161/358d7487-0923-436e-92cb-9dfebec33534?autoplay=false&loop=false&muted=false&preload=true&responsive=true)

---

Most bots typically use an "admin" or "manager" rol to control access to bot commands and features.

SDLink instead integrates with the Discord Integration Command Permissions system, so you have full control over how slash commands are used, and made available to other users.

***

### Accessing the Bot Permissions

You can access the slash command permissions in one of two ways:

1) Right-Click the bot user, head to Apps and then Manage Integration
2) Go to Server Settings -> Integrations -> YOURBOTNAME

***

### Role Based and Member Based Permissions

The first section allows you to restrict command usage to certain members or certain roles. By default, SDLink allows everyone to use its commands, but will enact certain default command-level restrictions.


Let's say that I have a "Minecraft Staff" role on my server, and I want members with that role to be able to use the bot commands, but not anyone else. First thing we do is disable command usage for everyone, by toggling it off:

![Deny Everyone](https://cdn.firstdark.dev/docs/sdlink-wiki/deny_all.png)

Then we want to add our "Minecraft Staff" role to be allowed to use SDLink's commands. Click "Add Roles or Members". We'll check the box next to "Minecraft Staff", our server staff role, then click add.

![Click Add Role or Members](https://cdn.firstdark.dev/docs/sdlink-wiki/add_role.png)
![Choose the Role](https://cdn.firstdark.dev/docs/sdlink-wiki/choose_role.png)

Now we can see that our "Minecraft Staff" role has permissions to use SDLink's commands, and only this role.

![New Permissions](https://cdn.firstdark.dev/docs/sdlink-wiki/after_add.png)

***

### Channel Based Permissions

The process is similar for restricting usage to specific channels. Say for example, we have a `#bot-commands channel` in our server, and we only want commands run here, to keep `#general` nice and tidy. We can achieve this by disabling usage in all channels, and adding our bot commands channel (called `#bot-config` here) to be allowed.

![Commands restricted to one channel](https://cdn.firstdark.dev/docs/sdlink-wiki/add_channel.png)

***

### Command Based Permissions

This is where things get interesting. You can restrict usage of specific commands based on specific members, roles or channels. By default, SDLink restricts usage of commands like `/staffverify` and `/staffunverify` to members with the "Manage Server" permission, but you can override this here.

Let's suppose we want to restrict usage of the `/status` command to our moderator role, and only in our `#bot-config` channel. First we start by clicking the command name, then disabling the command usage from all channels and members:

![Commands List](https://cdn.firstdark.dev/docs/sdlink-wiki/commands_list.png)

![Deny everyone and all channels](https://cdn.firstdark.dev/docs/sdlink-wiki/deny_roles_channels.png)

Now we just add our moderator role (First Dark Team) and staff channel (#bot-config) to be allowed, and we're set!

![Role and Channel configured](https://cdn.firstdark.dev/docs/sdlink-wiki/role_channel_configured.png)

***

That's about all there is to it. There are much more detailed examples available on Google, but this should be simple enough.

***

:::note Credit
Thank you to beansquared for allowing me to use [modrunner's documentation](https://modrunner.net/docs/guides/configuring-permissions) as a reference for writing this guide.
:::