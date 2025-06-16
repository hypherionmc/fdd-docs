---
title: Custom Placeholders
position: 7
---

:::warning In Game Config Screen
Simple RPC has a full in-game config screen, accessible from ModMenu or the Mods menu in NeoForge/Forge. You will need Cloth Config installed to use it.
:::

You can add your own Custom Placeholders, that can be used for anything from text, to images. This makes it easier to specify your own placeholder, for your modpack logo for example. That way, if you ever change the logo, you only have to change it one place.

### Default Config

By default, the placeholders section of the config looks like this:

```toml title="config/simple-rpc/simple-rpc.toml"
#Custom Config Variables that you can use
[custom]
	#Must these variables be parsed along with other variables
	enabled = false

	#Your custom variables to add
    variables = []
```

To add your own variables, remove `variables = []` and replace it with the following:

```toml title="config/simple-rpc/simple-rpc.toml"
[[custom.variables]]
    #The name of your variable. Will be parsed into {{custom.variablename}}
    name = "mycustomvar"
    #The value that this variable will output
    value = "Hello World 2"
```

This will add a placeholder under `{{custom.mycustomvar}}`.

<Expand title="Full Example with Placeholders">

```toml title="config/simple-rpc/simple-rpc.toml"
#Custom Config Variables that you can use
[custom]
	#Must these variables be parsed along with other variables
	enabled = true

	#Your custom variables to add
    #REMOVE MEEEEEEE variables = []

	[[custom.variables]]
		#The name of your variable. Will be parsed into {{custom.variablename}}
		name = "mycustomvar"
		#The value that this variable will output
		value = "Hello World 2"

    [[custom.variables]]
        #The name of your variable. Will be parsed into {{custom.variablename}}
        name = "modpackname"
        #The value that this variable will output
        value = "My Awesome Modpack"
```
</Expand>

---

### Mixing Custom Variables with Built-In Variables

You can also use built-in variables inside your custom variables.

<Expand title="Example">

```toml title="config/simple-rpc/simple-rpc.toml"
[[custom.variables]]
        #The name of your variable. Will be parsed into {{custom.variablename}}
        name = "modpackname"
        #The value that this variable will output
        value = "My Awesome Modpack for {{game.version}}"
```
</Expand>