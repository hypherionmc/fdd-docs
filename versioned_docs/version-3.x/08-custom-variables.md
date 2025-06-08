---
title: Custom Variables
order: i
---
Simple RPC 3.2+ now allows you to add your own configuration variables.

These variables can be used to simplify repeated text such as your modpack version, or just as a funny easter egg.

### Adding your own

Inside your `simple-rpc.toml` file, you will find a new section called `custom`.

By default, it will look like this:

```toml
#Custom Config Variables that you can use
[custom]
	#Must these variables be parsed along with other variables
	enabled = true
	#Your custom variables to add
	variables = []

```

To start adding your own variables, remove `variables = []` and replace it with

```toml
[[custom.variables]]
    name = "mycustomvar"
    value = "Hello World"
```

So your config will now look like this:

```toml
#Custom Config Variables that you can use
[custom]
	#Must these variables be parsed along with other variables
	enabled = true
	#Your custom variables to add
    [[custom.variables]]
        name = "mycustomvar"
        value = "Hello World"

```

:::danger
DO NOT add `%` to your variable name! This is added automatically
:::

Now, you have a variable called `%mycustomvar%` that you can use anywhere variables are supported. This will resolve to `Hello World`.

---

### Mixing Custom Variables with Built-In Variables

You can also use built-in variables inside your custom variables.

For example:

```toml
[[custom.variables]]
    name = "mycustomvar"
    value = "Hello World for %mcver%"
```

Now, when you use `%mycustomvar%`, you will see `Hello World for 1.19.2`

:::danger
Your Custom Variables CAN NOT, have the same name as any built-in variable. They will simply be ignored and will not work!
:::
