---
title: Backups
order: b
---

Maintenance Mode backups, unlike most backup mods, creates a FULL backup of your server. This means, that if something goes wrong, and you need to restore your server, you can simply download the latest backup, and replace your server files with it.

!!!warning Backup Size
Since the backups includes your World, Mods, Datapacks, Configs and everything else, the backups can get quite big in size, very quickly. Make sure to keep an eye on your disk usage.
!!!

***

### Managing Backups

||| Manual Backup
To do a manual backup, whenever you want, just use the `/maintenance backup` commands.

This will store your new backup in `mbackups`, labeled with the date and time the backup was created.
|||

||| Automatic Backups
Automatic backups happen whenever your server is placed into Maintenance Mode. Be it via direct command, or a schedule.

To enable/disable automatic backups, use the `/maintenance doBackups true|false` command
|||