---
title: Access Control
order: b
---

!!!warning Online Config Editor
You can edit your config files, using our online config editor at https://editor.firstdark.dev. Alternatively, use the `sdconfigeditor` command in your console to edit your config live on the server, using the web interface.
!!!

## Video Guide
[!embed](https://iframe.mediadelivery.net/embed/281161/a09a721a-a7d2-48a7-b997-bbdbb4f8b722?autoplay=false&loop=false&muted=false&preload=true&responsive=true)

---

Simple Discord Link V3 no longer contains the old Whitelisting and Account Linking systems. Instead, it includes a new system called Access Control, which is a much more powerful, much more stable and much more user/server owner friendly.

!!!warning
You and any other "staff members" will also need to verify your Minecraft account, and if configured, have any of the `requiredRoles` assigned to you.

If you don't, you will also get kicked from the server when you try to join
!!!

---

### What is access control?

Access Control is a new system that combines the old whitelisting and account linking system, with some new features.

The new system allows you to:

1) Always enforce account linking, now called verification. This is required for the other features of the new system.
2) Deny access to players if they are not a member of your discord server (Configurable).
3) Only allow access to certain roles. This is perfect for patreon/staff only servers.
4) The new system includes 2 staff commands to manually verify/unverify players, as well as a list command to see verified players.
5) Allow players to optionally verify their accounts, which allows features like LuckPerms, FTB Rank Sync and Linked Names

---

### How do I use it?

In your config, you will find a section like this:

```json
#Manage access to your server, similar to whitelisting
[accessControl]
	#Enable Access Control
	enabled = false
	#Does the player need to be a member of your discord to join
	requireDiscordMembership = false
	#Optional: The player requires any of these roles to be able to join your server
	requiredRoles = []
	#Optional: Role name or ID to assign to verified player accounts
	verifiedRole = ""

	#Configure messages shown to players when they don't meet verification requirements
	[accessControl.verificationMessages]
		#The message shown to players that are not verified
		accountVerification = "This server requires account verification. Your verification code is: {code}. Please visit our discord server for instructions on how to verify your account."
		#Message to show to players that are not a member of your discord
		nonMember = "Sorry, you need to be a member of our discord server to join this server"
		#Message to show when player doesn't have one of the required roles. Use {roles} to display the names of configured roles
		requireRoles = "Sorry, but you require any of the following roles: {roles}"
```

To enable the system, simply change `enabled` to `true`.

For example:

```json
#Manage access to your server, similar to whitelisting
[accessControl]
	#Enable Access Control
	enabled = true
```

When this is enabled, any unverified player that tries to join your server, will see the message configured in `accountVerification`. Remember to include `{code}` to show the player their actual verification code.

The player will then need to visit your discord server, and run the `/verify` command, with the code they were given to verify their MC account. After this, they will be able to join your server.

---

### Deny access to players who are not in my discord

If you run a private server, you may want your players to be in your discord to be able to receive news about your server, or for whatever reason you choose.

Normally, with the old whitelisting system, there was no way to deny them access to the server, if they are not in your discord, other than removing them from the whitelist.


With V3, it's as simple as changing `requireDiscordMembership` to `true`.

For example:

```json
#Does the player need to be a member of your discord to join
	requireDiscordMembership = true
```

This will let SDLink verify that the player has a verified account, and that they are a member of your server. If they are not in your discord, they will be kicked and shown the `nonMember` message.

---

### Only allow access to certain roles

If you run a patreon only server, making sure your supporters have access to your Minecraft server is usually a manual, pain-in-the-ass task.

No more. With Access control, you can define discord roles that can access your minecraft server.

For example, I have a supporters role in my discord. This is given automatically when someone donates to my Ko-Fi or Patreon account. 

Now, let's say my `Supporters Role` has the following role id: `1252852852325485258`, my config will look like this:

```json
#Optional: The player requires any of these roles to be able to join your server
	requiredRoles = ["1252852852325485258"]
```

This means, that only discord users who are in my server, and, have the `Supporters Role` can access my minecraft server. If my supporters stops supporting me, they loose the role and can no longer access my minecraft server.


If I had another role, for example a staff member role I want to access the server, my config would look like this:

```json
#Optional: The player requires any of these roles to be able to join your server
	requiredRoles = ["1252852852325485258", "65746541674651654635"]
```

In this case, `65746541674651654635` is the ID of my staff role.

This whole process is automatic, and only requires your player to have a confirmed account. 

!!!info
Note that you would also need one of the roles configured here to be able to join the server
!!!

***

### Block Certain Roles from Access your Server

Let's say Hypherion has been misbehaving in your discord server, and you've put him in a timeout, and you also want to put him in a timeout from your server, without banning him...

In your discord, you have a role called `Time Out` with ID `3985082359835832039275`. 

To block pesky Hypherion from accessing your server while he has this role, you just need to add this to your config:

```json
deniedRoles = ["3985082359835832039275"]
```

So your full config will look like this:

```json
[accessControl]
	#Enable Access Control
	enabled = true
	#Does the player need to be a member of your discord to join
	requireDiscordMembership = true
	#Optional: The player requires any of these roles to be able to join your server
	requiredRoles = []
	#Optional: Players with these roles will never be allowed access to your server
	deniedRoles = ["3985082359835832039275"]
	#Optional: Role name or ID to assign to verified player accounts
	verifiedRole = ""
	#Should players with verified accounts, be banned from Minecraft if they get banned on discord
	banPlayerOnDiscordBan = false
	#Should members with verified accounts, be banned from discord when they are banned on Minecraft
	banMemberOnMinecraftBan = false
```

Now for as long as mister Hypherion has the `Time Out` role, he won't be able to access your minecraft server.