---
title: Mention users from Minecraft
order: f
---

!!!warning Online Config Editor
You can edit your config files, using our online config editor at https://editor.firstdark.dev. Alternatively, use the `sdconfigeditor` command in your console to edit your config live on the server, using the web interface.
!!!

Simple Discord Link allows you to mention discord users, roles and channels from Minecraft, when the mod is installed client side as well.

For this to work, you need to have `allowMentions` set to `true` in your config file on the server.

### Mentioning Roles/Users from Minecraft

To mention a role or user, open up your chat and type `[@` to show the user/role suggestions popup. Find the user you want to ping from that list, and press enter (this works the same way as command suggestions). Make sure your mention then ends with another `]`.


So for example, `[@hypherionsa]` where `@hypherionsa` was selected from the popup.

!!!info
Only roles that can be mentioned by everyone will show up in this list
!!!

***

### Mentioning Channels

Mentioning channels work the same way as role/user mentions, except you will type `[#` to trigger the suggestions popup.


!!!danger
An alternative way to do this is to use the special `<@userid>`, `<@roleid>` or `<#channelid>` mention format.
!!!