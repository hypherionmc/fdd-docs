---
title: Using Local Images as Icons
order: a
---

:::danger Experimental Feature
This feature is still highly experimental, and may not work as expected. Please report any bugs you encounter, so they can be fixed
:::

:::info Privacy Notice
If you are concerned about the privacy of this feature, please see the [PRIVACY NOTICE](#privacy-notice) below
:::

Local Images is a new feature, currently exclusive to Simple RPC, that allows you to use your own image files, as RPC icons, without having to host them somewhere.

This means that you no longer need to upload custom images to an image hosting service like IMGUR, but instead, use it directly from your own PC.

If you want other users to be able to use these same images, be sure to export them in your modpack.


### Limitations

Currently, this feature has the follow limitations:

- Only images smaller than 1MB are supported. Larger images are ignored
- Only SVG, BMP, JPG, PNG, GIF and WEBp files are supported

### How it works

This feature, works by checking a folder in your config for image files, then creating a hash from them, before sending them to a relay server so that discord can use it. Images are only uploaded if they do not exist in the relay server cache, so you don't have to worry about images constantly uploading.

Images are rechecked each time the config is reloaded, or when you restart the game.

---

## Enabling local images

Once you install Simple RPC 4.0.1-beta or newer, a new folder called `icons` will be created inside your `config/simple-rcp` folder. You will place your compatible images in this folder.


Next, open up your config and change `rpcImageServer` from `false` to `true`.

Finally, change your `largeImageKey` or `smallImageKey` to match the name of your file.

For example, if you have a file called `homer.gif`, you will place `largeImageKey = ["homer.gif"]`. This will tell the mod to load the image from your folder, instead of from discord.


:::warning First Load Delay
When using an image for the very first time, there might be a slight delay before the image becomes usable. This is normal.

This is just so that the relay server, cloudflare and discord can cache the image. After that, it should be fine
:::

---

## Privacy Notice

We get it, sending data from your pc to another server is scary. Therefore, this service is completely OPT-IN, and not OPT-OUT.

Simple RPC will NOT send any data, to our servers without you explicitly enabling this feature.

Once you enable the feature, the following happens:

1) Your `icons` folder is scanned for images
2) Each image is then hashed, and a request is made to the relay server, to check if the images exists in the cache.
3) If any of the images do not exist in the cache, only those images are uploaded
4) Images are then cached and stored for 24 hours, before automatically being deleted.


### FAQ

- Q: Are my images accessible to anyone on the internet?
    - A: Only if they know the image hash. There are no public listings for uploaded images, and the backend storage is not accessible to the public.
- Q: Can I delete an image once it's been uploaded?
    - A: Not directly no. The images are automatically deleted after 24 hours, however, if you know the SHA256 hash of the image, you can request direct deletion using our Discord Server.
- Q: Will my images be used for AI Training?
    - A: No. FUCK AI!
- Q: I don't trust you. Can I host my own server for this?
    - A: Absolutely. The entire server is open source, and can easily be self-hosted by anyone.
- Q: I don't like this feature being in the mod.
    - A: I get it. I didn't like implementing this either. We will take community feedback regarding this feature into account, and that means that this feature COULD be removed at any moment.


All this being said, you use this service at your own risk. We take NO responsibility for the images you use with this service, and nor do we take the responsibility for images used by other users.

If you find an image that is not suitable for discord usage, you are welcome to report it to us, and we will do our best to remove it ASAP. Please note that we have no way of knowing who added the image to begin with, so we can only delete the offending image