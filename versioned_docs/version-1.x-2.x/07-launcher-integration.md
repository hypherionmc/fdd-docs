---
title: Launcher Integration
order: e
---
Simple RPC 2.2+ now supports Launcher Integrations on some launchers.

When the `launcherIntegration` setting is enabled, Simple RPC will attempt to use the Launcher or Instance icon and replace the text shown on the Large Image, with the name of the launcher and the instance.

:::warning
This ONLY works with the default clientID. When you use a custom app, this setting will be ignored
:::
&nbsp;  

### Supported Launchers:

* Curseforge
* MultiMC
* Technic
* GDLauncher
* ATLauncher

___
:::danger
Some of these launchers have their own built in RPC. You will need to disable that before the mod will work. This is a new and very shitty discord limitation
:::
