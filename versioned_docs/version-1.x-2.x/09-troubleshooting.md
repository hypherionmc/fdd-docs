---
title: Troubleshooting
order: g
---
While this mod normally works perfectly the first time, there are some cases where it may not.

### My status won't display

Let's rule out the most common issues here.

* Make sure you have an active internet connection. This mod requires internet, because it needs to communicate with the Discord API.
* You might have disabled game activity on Discord. To check this, head over to `Settings -> Gaming activity`.

![Game Activity Screen](https://cdn.firstdarkdev.xyz/docs/srpc/game-act.png)

* If you are not using the default config file, chances are there is an error with the config file. Double check that the TOML syntax is correct by using a site like https://www.toml-lint.com/.
* **Check that the Client ID matches the one from your Discord Developer Dashboard. If you copied the ID from ANYWHERE ELSE, it's wrong, and the mod won't work**

&nbsp;  

### Windows Only

Make sure you are NOT running discord in administrator mode. Doing so will cause the mod to be denied permission to communicate with discord, so your RPC will not display!

&nbsp;

### This mod crashes my game!

This section only applies to versions before 1.3. A crash would occur if you have an error in your config file or if something went wrong while communicating with discord.
