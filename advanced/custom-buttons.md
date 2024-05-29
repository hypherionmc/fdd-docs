---
title: Adding Custom Buttons
order: b
---
![Example of a Button](https://cdn.firstdarkdev.xyz/docs/srpc/buttons.png)

&nbsp;  
!!!primary
You can only add two buttons per section. This is a Discord Limit and not a mod limit
!!!
!!!warning
Warning, when clicking the button on your own status from your own Discord Account, it will appear to do nothing. This is another discord limitation. To test the button, sign into a second discord account in your web browser.
!!!
&nbsp;

You will find an entry under each section of the config file. This entry is called `Buttons`

By default, this entry has a value of `Buttons = []`. To add your buttons, simple replace `Buttons = []` to

```json
# section will be either Init, MainMenu, etc
[[Section.Buttons]]
	Title = "Test Button"
	Url = "https://google.com
```
!!!primary
You can find a more complete example at the end of this page
!!!

&nbsp;  
You can add buttons to any section of the RPC config file where you see the `Buttons = []` placeholder. Please note that if you add more than 2 buttons, the presence will fail to update.
&nbsp;
___

### Examples
&nbsp;

#### Adding a button to the Game Loading Event
```json
# The Game Loading event
[GameLoading]
# Enable/Disable the Game Loading event
Enabled = true
# The first line of text under the app name
Description = "Stardew Valley is loading"
# The second line of text under the app name
State = "Game Starting..."
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""

# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
[[GameLoading.Buttons]]
Title = "Google"
Url = "https://google.com"
```
&nbsp;

#### Adding two buttons to the Main Menu RPC:
```json
# The Game Loading event
[GameLoading]
# Enable/Disable the Game Loading event
Enabled = true
# The first line of text under the app name
Description = "Stardew Valley is loading"
# The second line of text under the app name
State = "Game Starting..."
# Discord Assets ID or Direct URL to display as the large image
LargeImageKey = "stardew"
# The text that gets displayed when the large image is hovered
LargeImageText = "It's Stardew Valley, but modded!"
# Discord Assets ID or Direct URL to display as the small image
SmallImageKey = ""
# The text that gets displayed when the large image is hovered
SmallImageText = ""

# List of Buttons to display on your RPC. Only 2 buttons can be used! DISCORD LIMIT!
[[GameLoading.Buttons]]
Title = "Google"
Url = "https://google.com"

[[GameLoading.Buttons]]
Title = "Twitter"
Url = "https://twitter.com"
```
&nbsp;

***

___
!!!danger
Please note that discord has a character limit of 32 characters on the `label`. This limit has been implemented internally as well
!!!
