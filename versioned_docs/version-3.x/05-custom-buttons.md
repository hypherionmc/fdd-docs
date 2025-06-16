---
title: Adding Custom Buttons
order: f
---
![Example of a Button](https://cdn.firstdarkdev.xyz/docs/srpc/buttons.png)

&nbsp;  
Simple RPC 2.1+ now supports adding customizable buttons to your Rich Presence. This is useful for adding a link to your curseforge page, discord, Youtube, Website or just about anything else.
:::warning
You can only add two buttons per section. This is a Discord Limit and not a mod limit
:::
:::warning
When clicking the button on your own status from your own Discord Account, it will appear to do nothing. This is another discord limitation. To test the button, sign into a second discord account in your web browser.
:::
&nbsp;

When loading the game the first time with 2.1+ installed, your config file will be updated, and you will find a new entry under each section of the config file. This entry is called `buttons`

By default, this entry has a value of `buttons = []`. To add your buttons, simple replace `buttons = []` to

```toml
# section will be either init, main_menu, etc
[[section.buttons]]
	label = "Test Button"
	url = "https://google.com
```
:::secondary
You can find a more complete example at the end of this page
:::

&nbsp;  
You can add buttons to any section of the RPC config file, and they are hot-re loadable. Please note that if you add more than 2 buttons, the presence will fail to update.
&nbsp;
___

## Examples

### Adding a button to the main menu
```toml
#The Main Menu event
[main_menu]
	#Enable/Disable the Main Menu Event
	enabled = true
	#The first line of text under the app name
	description = "%player% is currently lazy"
	#The seconds line of text under the app name
	state = "Chilling in the menu"
	#The Asset ID of the image to display as the large image
	largeImageKey = "mclogo"
	#The text that gets displayed when the large image is hovered
	largeImageText = "It's Minecraft %mcver%, but modded"
	#The Asset ID of the image to display as the small image
	smallImageKey = "mclogo"
	#The text that gets displayed when the small image is hovered
	smallImageText = "%mods% mods installed"
	#The buttons to display on Discord
	# REMOVE ME buttons = []
	
	[[main_menu.buttons]]
		label = "Test Button"
		url = "https://google.com"
```
&nbsp;

### Adding two buttons to the Main Menu RPC:
```toml
#The Main Menu event
[main_menu]
	#Enable/Disable the Main Menu Event
	enabled = true
	#The first line of text under the app name
	description = "%player% is currently lazy"
	#The seconds line of text under the app name
	state = "Chilling in the menu"
	#The Asset ID of the image to display as the large image
	largeImageKey = "mclogo"
	#The text that gets displayed when the large image is hovered
	largeImageText = "It's Minecraft %mcver%, but modded"
	#The Asset ID of the image to display as the small image
	smallImageKey = "mclogo"
	#The text that gets displayed when the small image is hovered
	smallImageText = "%mods% mods installed"
	#The buttons to display on Discord
	# REMOVE ME buttons = []
	
	[[main_menu.buttons]]
		label = "Test Button"
		url = "https://google.com"

	[[main_menu.buttons]]
		label = "Another Button"
		url = "https://youtube.com"
```
&nbsp;

***

### Adding buttons to the Single Player Event
```toml
#The Single Player Event
[single_player]
	#Enable/Disable the Single Player Event
	enabled = true
	#The first line of text under the app name
	description = "Currently In %world%"
	#The second line of text under the app name
	state = "Playing lonely mode"
	#The Asset ID of the image to display as the large image
	largeImageKey = "mclogonew"
	#The text that gets displayed when the large image is hovered
	largeImageText = "It's Minecraft %mcver%, but modded"
	#The Asset ID of the image to display as the small image
	smallImageKey = "mclogo"
	#The text that gets displayed when the small image is hovered
	smallImageText = "%mods% mods installed"
	#The buttons to display on Discord
	# REMOVE ME buttons = []
	[[single_player.buttons]]
		label = "Test Button"
		url = "https://google.com"
```

### Adding 2 buttons to the single player event:

```toml
#The Single Player Event
[single_player]
	#Enable/Disable the Single Player Event
	enabled = true
	#The first line of text under the app name
	description = "Currently In %world%"
	#The second line of text under the app name
	state = "Playing lonely mode"
	#The Asset ID of the image to display as the large image
	largeImageKey = "mclogonew"
	#The text that gets displayed when the large image is hovered
	largeImageText = "It's Minecraft %mcver%, but modded"
	#The Asset ID of the image to display as the small image
	smallImageKey = "mclogo"
	#The text that gets displayed when the small image is hovered
	smallImageText = "%mods% mods installed"
	#The buttons to display on Discord
	# REMOVE ME buttons = []
	[[single_player.buttons]]
		label = "Test Button"
		url = "https://google.com"
	
	[[single_player.buttons]]
		label = "Another Button"
		url = "https://youtube.com"
```

___
:::danger
Please note that discord has a character limit of 32 characters on the `label`. This limit has been implemented internally as well
:::
