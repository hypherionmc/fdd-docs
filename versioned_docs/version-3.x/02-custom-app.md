---
title: Customizing the Name & Images
order: b
---

:::warning
Optional Step. Only required if you want to use your own name.
:::

:::info
Since Simple RPC 3.2.0, you can use multiple images in an RPC section.

This means that `smallImageKey = ["imagekey"]` becomes `smallImageKey = ["imagekey", "imagekey2"]`

These images will then be selected at random
:::

## Overview
By default, the mod uses "Minecraft" as the app name along with the minecraft icons as for the images. **If this is all you want, you can skip this step**.

If you want to use your own name, such as "My Cool Modpack", then this guide will help you create and setup a new discord app to use with the mod

:::info
You can find and download the default assets used by the mod at the end of this page
:::
:::danger
After uploading your assets, your assets may appear empty or not show up on discord at all. This is normal, and it will show up after a couple of minutes
:::
:::info
**By the end of this guide you should:**
* Have a custom discord app set up
* Have all your RPC images uploaded
* Have your custom app name displaying on discord
:::

## Part 1 - Creating the Discord App

### Step 1
![The Discord Developers dashboard](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-1.png)

To get started, head over to [https://discord.com/developers/](https://discord.com/developers/) and sign in using your discord account. After signing in, you will be taken to the Discord Developer Dashboard. Press the "New Application" button located at the top right of the screen

### Step 2
![Create Application Popup](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-2.png)

You will get a popup prompting you for a name. Enter the name of your modpack or anything else you'd like and click "Create"


### Step 3
![Application Overview Screen](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-3.png)

Once you created your app, you will be taken to a General Information Page. Here you can give your app a description, change the icon of the app and find the Application ID required by the mod. Take note of this as you will need it later

:::info
It's recommended that you upload an icon. The minimum size of your image needs to be at least **1024x1024px**
:::

---

## Part 2 - Uploading your Assets

### Step 1
![Assets Overview Screen](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-4.png)

Once you are done setting up the general information for your app, head over to `Rich Presence` from the left side menu. Next click on `Art Assets`. Here you can upload and manage images that get shown on your Discord Status.


### Step 2
![Assets Upload View](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-5.png)

On the bottom of the page, you can upload your icons for use by the mod. **By default the image key will be the same as the file name. Take note of them as you need them later on in the config.**

:::warning
Your icons need to be a minimum size of **512x512px**. **1024x1024px** is recommended
:::

### Step 3
Now that you have your Discord Application ID, open up the Simple RPC config file and replace the existing ID in `applicationID` with your own one.

Now also remember to replace all `smallImageKey` and `largeImageKey` values with the names of your own images

&nbsp;  
There you go. You should now have your custom app setup and ready for use. Next, check out How to configure the config to make use of your app
&nbsp;

---

## Default Assets and Their Purpose

You can [Download](https://cdn.firstdarkdev.xyz/docs/srpc/rpcicons.zip) the set of icons used by the default app. You don't need to use all of them! Below is a list of the main images used by the app. The rest of the icons in the set are for things like launcher integration and known servers.
The names of the images in the set are the image keys you can use

| Image | Image Key | Purpose | 
| --- | --- | --- |
| ![mclogo](https://cdn.discordapp.com/app-assets/762726289341677668/762727693144948777.png) | mclogo | Used pre 2.3 for the Large and Small Images |
| ![mclogonew](https://cdn.discordapp.com/app-assets/762726289341677668/873132898226683905.png) | mclogonew | Used by 2.3+ for the Large and Small Images |
| ![overwold](https://cdn.discordapp.com/app-assets/762726289341677668/817148572079751188.png) | overworld | Used by the Dimension Override for Overworld as the large image |
| ![nether](https://cdn.discordapp.com/app-assets/762726289341677668/817148553617080390.png) | nether | Used by the Dimension Override for The Nether as the large image |
| ![end](https://cdn.discordapp.com/app-assets/762726289341677668/817148546993881088.png) | end | Used by the Dimension Override for The End as the large image |

