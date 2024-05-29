---
title: Custom Variables
order: c
---
You can add your own configuration variables.

These variables can be used to simplify repeated text such as your modpack version, or just as a funny Easter egg.

### Adding your own

Inside your `simple-rpc.toml` file, you will find a new section called `CustomPlaceholders`.

By default, it will look like this:

```json
# Add your own Placeholders here
[CustomPlaceholders]
# Enable/Disable Custom Placeholders
Enabled = false
# List of Custom Placeholders. YOU CAN NOT REPLACE BUILT-IN PLACEHOLDERS!
Variables = []
```

To start adding your own variables, remove `Variables = []` and replace it with

```json
[[CustomPlaceholders.Variables]]
Name = "hello"
Value = "Hello World"
```

So your config will now look like this:

```json
# Add your own Placeholders here
[CustomPlaceholders]
# Enable/Disable Custom Placeholders
Enabled = true

# List of Custom Placeholders. YOU CAN NOT REPLACE BUILT-IN PLACEHOLDERS!
[[CustomPlaceholders.Variables]]
Name = "hello"
Value = "Hello World"
```

!!! danger
DO NOT add `{}` to your variable name! This is added automatically
!!!

Now, you have a variable called `{hello}` that you can use anywhere variables are supported. This will resolve to `Hello World`.

---

### Mixing Custom Variables with Built-In Variables

You can also use built-in variables inside your custom variables.

For example:

```json
# List of Custom Placeholders. YOU CAN NOT REPLACE BUILT-IN PLACEHOLDERS!
[[CustomPlaceholders.Variables]]
Name = "myversion"
Value = "Playing Stardew {game.version} with SMAPI {game.smapi}"
```

Now, when you use `{myversion}`, you will see `Playing Stardew 1.0.0 with SMAPI 1.0.2`

!!! danger
Your Custom Variables CAN NOT, have the same name as any built-in variable. They will simply be ignored and will not work!
!!!
