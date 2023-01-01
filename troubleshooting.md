---
order: f
---

In some cases, the bot may not work as intended. Before Version 1.4.0, you would need to manually check everything to figure out why it doesn't work.

Since Version 1.4.0, configuration and permission errors are printed to the log. Below are examples of the errors, and how to fix them.

***

### Blank Messages sent to Discord

You did not enable the needed permissions on your discord account, as stated in the docs.

Visit [Creating The Discord Bot](initial-setup.md) and see PART 3

### Bot Not Invited

This error occurs when you have not invited the bot to your discord server. Yes this seems like common sense, yet people still forget to do that, or just don't do it at all.

+++ Error In Log
```
[23:01:09] [pool-2-thread-4/ERROR] (Simple Discord Link) 
******************* Simple Discord Link Errors *******************
1) Bot does not appear to be in any servers. You need to invite the bot to your discord server before chat relays will work. Use link https://discord.com/api/oauth2/authorize?client_id=xxxxxxxxxxxxxxxxx&permissions=738543616&scope=bot to invite the bot
******************* Simple Discord Link Errors *******************
```
+++ Fix
Copy and paste the link given in your log into your browser.

This will open up the Discord Bot invite page. From there, choose your Discord server and invite the bot
+++

***

### Chat Channel ID Not Set

This error occurs when you have not entered a valid channel id for the chat relay channel. Remember, you still need to do this, even when using webhooks!

+++ Error In Log
```
[23:03:52] [pool-2-thread-5/ERROR] (Simple Discord Link)
******************* Simple Discord Link Errors *******************
1) channelID is not set.... The bot requires this to know where to relay messages from
   ******************* Simple Discord Link Errors *******************
```
+++ Fix
Visit the `Configuring the Mod` page and follow the steps in section `Configuring channels`
+++

***

### Missing Channel Permissions

This error occurs when the bot is missing permissions on either the Chat or Events channel. This usually happens on servers with special role configurations.

+++ Error In Log
```
[23:14:08] [pool-2-thread-7/ERROR] (Simple Discord Link) 
******************* Simple Discord Link Errors *******************
1) Missing Chat Channel Permission: View Channel
2) Missing Chat Channel Permission: Send Messages
3) Missing Chat Channel Permission: Embed Links
4) Missing Chat Channel Permission: Manage Channel. Topic updates will not work
******************* Simple Discord Link Errors *******************
```

```
[23:14:08] [pool-2-thread-7/ERROR] (Simple Discord Link) 
******************* Simple Discord Link Errors *******************
1) Missing Event Channel Permission: View Channel
2) Missing Event Channel Permission: Send Messages
3) Missing Event Channel Permission: Embed Links
4) Missing Event Channel Permission: Manage Channel. Topic updates will not work
******************* Simple Discord Link Errors *******************
```
+++ Fix
* Click the `gear` icon next to the channel name (this is the channel you configured), and click on `Permissions`
* Under `Roles/Members` make sure your Bot appears on that list. If it doesn't, click the `+` icon to add it.
* Click on the Bot name in the `Roles/Members` section and on the right hand section, make sure the Permission is set to `Checked`
+++
