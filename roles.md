---
title: Role Assignment
order: f
---
!!!info
These docs are for SDLink V2 and older. For SDLink V3 beta, please see the [NEW DOCS HERE](https://sdlinkbeta.fdd-docs.com)
!!!


!!!warning
For Role assignments to work, you will need to update the bot permissions. Either manually give your bot the `Manage Roles` permission, or visit the Invite URL given in the log in your browser, to update the permissions.

DO NOT KICK THE BOT FROM YOUR SERVER WHEN DOING THIS!
!!!

Since SDLink v2.2, you can assign roles based on certain events.

For instance, when a player whitelists themselves, you can add a role to them, and also remove the role, when they are un-whitelisted.

---

### Staff Role

The Staff role, allows you to give server members permission to execute staff commands.

Before, this relied on Admin/Kick perms of the user.

Inside the `botConfig` section of the config, you will find a field named `staffRole`. When this is set, only users with this role assigned can use staff commands.

#### Example

`staffRole = "MC Server Staff"`

This will allow anyone with the 'MC Server Staff' role to use staff commands like Status, List etc. If this is not set, it will default back to Admin/Kick Perms

---

### Assign Role With Whitelisting

Inside the `general` section of you the config, you will find a field called `autoWhitelistRole`.

Here, you can enter the name of a role that will be added/removed when a player is whitelisted.

#### Example

`autoWhitelistRole = "Minecraft Players"`

This will check if your server contains a role called "Minecraft Players" and assign it to the user when they whitelist themselves.

---

### Assign Role With Account Linking

Inside the `general` section of you the config, you will find a field called `linkedRole`.

Here, you can enter the name of a role that will be added/removed when a player links their MC and Discord accounts.

#### Example

`linkedRole = "Verified Players"`

This will check if your server contains a role called "Verified Players" and assign it to the user when they link their accounts.
