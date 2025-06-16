---
title: Create A Custom Discord App
order: a
---
:::warning
Optional Step - Only required for a Custom name/Assets
:::

By default, the mod uses "Minecraft" as the app name and uses the minecraft icons as the default images. **If this is all you want, you can skip this step**.

If you want to use your own images, or use a name other than "Minecraft", this guide will help you create and setup a new discord app to use with the mod.

---

:::info
You can find and download the default assets used by the mod at the end of this page
:::
:::secondary By the end of this guide you should:
- Have a custom discord app set up
- Have all your RPC images uploaded
- Have your custom app name displaying on discord
:::
&nbsp;  

## Part 1 - Creating the Custom App
### Step 1
![The Discord Developers dashboard](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-1.png)

To get started, head over to [https://discord.com/developers/](https://discord.com/developers/) and sign in using your discord account. After signing in, you will be taken to the Discord Developer Dashboard. Press the "New Application" button located at the top right of the screen

### Step 2
![Create Application Popup](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-2.png)

You will get a popup prompting you for a name. Enter the name of your modpack or anything else you'd like and click "Create"

### Step 3
![Application Overview Screen](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-3.png)

Once you created your app, you will be taken to a General Information Page. Here you can give your app a description, change the icon of the app and find the **Application ID** required by the mod. Take note of this as you will need it later
:::secondary
It's recommended that you upload an icon. The minimum size of your image needs to be at least **1024x1024px**
:::

## Part 2 - Uploading the assets

### Step 1
![Assets Overview Screen](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-4.png)

Once you are done setting up the general information for your app, head over to "Rich Presence" from the left side menu. This will take you to the "Assets" page of your app. Here you can upload and manage images that get shown on your Discord Status.


### Step 2
![Assets Upload View](https://cdn.firstdarkdev.xyz/docs/srpc/rpc-app-5.png)

On the bottom of the page, you can upload your icons for use by the mod. **By default the image key will be the same as the file name. Take note of them as you need them later on in the config.**
:::secondary Notice
Your icons need to be a minimum size of **512x512px**. **1024x1024px** is recommended
:::
:::danger
After saving, your assets may appear empty. This is normal, but you can still use them. They will show up again on the dashboard after a couple of minutes.
:::
 
&nbsp;  
There you go. You should now have your custom app setup and ready for use. Next, check out How to configure the config to make use of your app
&nbsp;  

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
