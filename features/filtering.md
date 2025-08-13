---
title: Message Filtering
order: c
---

!!!warning Online Config Editor
You can edit your config files, using our online config editor at https://editor.firstdark.dev. Alternatively, use the `sdconfigeditor` command in your console to edit your config live on the server, using the web interface.
!!!

Message filtering is a powerful system, that allows you to replace words or emojis etc, in usernames and messages sent between Minecraft and Discord/Discord and Minecraft.

This is useful for filtering out common spam messages like `gg`, `creeper`, `[REDACTED]`, or, replacing Minecraft Emojis with Discord compatible emojis.

***

To use this feature, find the `filtering` section of the config. By default, it will look like this

```json
#Configure message/username filtering for discord messages
[filtering]
    #Enable the filter system
    enabled = true
    #List of entries to process
    entries = []
    #Ignore messages sent from certain threads. Enable debug logging to see what thread the message is from
    ignoredThreads = []
```

In the above:

1) `ignoredMessages` -> Enable or Disable the filtering feature
2) `entires` -> List of entries to process. See examples below.
3) `ignoredThreads` -> This is an advanced feature, used to disable some `catch all` messages relayed from other sources, that do not fall into any of the default categories

***

### Examples

||| Ignoring a message, if it starts a word 

In this example, a message starting with `Hey everyone`, will be ignored.

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[filtering.entries]]
        search = "Hey everyone"
        target = "CHAT"
        replace = ""
        searchMode = "STARTS_WITH"
        action = "IGNORE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```

So now, every message starting with `Hey everyone` or `hey everyone` will not be relayed to discord.

### Explanation of fields

- `search` -> The text to search for
- `target` -> Choose between targeting `CHAT`, `USERNAME`, `BOTH`, or `CONSOLE`
- `replace` -> The text, that will replace `search`, if needed
- `searchMode` -> How to apply the filter. `CONTAINS`, `STARTS_WITH`, `MATCHES`, `REGEX`
- `action` -> The action to perform when the filter matches. `IGNORE` or `REPLACE`
- `appliesTo` -> Does this filter apply to `DISCORD` (messages coming from Minecraft) or `MINECRAFT` (messages going to Minecraft)
- `ignoreConsole` -> Should this filter be applied to messages in the Console Relay feature
|||

||| Replacing the First Word of a message

In this example, we will replace a message starting with `gg everyone`, to `Good Game everyone`.

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
    #Filter certain types of messages from being relayed back to discord
    ignoredMessages = true
    
    #List of entries to process
    [[filtering.entries]]
        search = "gg everyone"
        target = "CHAT"
        replace = "Good Game everyone"
        searchMode = "STARTS_WITH"
        action = "REPLACE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```
|||

***

||| Ignore a message containing a word

In this example, we will not relay a message containing the word `dammit`.

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
    #Filter certain types of messages from being relayed back to discord
    ignoredMessages = true
    
    #List of entries to process
    [[filtering.entries]]
        search = "dammit"
        target = "CHAT"
        replace = ""
        searchMode = "CONTAINS"
        action = "IGNORE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```

This will ignore any message containing the word `dammit`.
|||

||| Replace a word in a message

In this example, we will replace the word `dammit`, with `[REDACTED]`

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
    #Filter certain types of messages from being relayed back to discord
    ignoredMessages = true
    
    #List of entries to process
    [[filtering.entries]]
        search = "dammit"
        target = "CHAT"
        replace = "[REDACTED]"
        searchMode = "CONTAINS"
        action = "REPLACE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```

This will ignore any message containing the word `dammit`.
|||

***

||| Ignore an exact message

In this example, we will ignore a message like `Can someone help me?`

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
    #Filter certain types of messages from being relayed back to discord
    ignoredMessages = true
    
    #List of entries to process
    [[filtering.entries]]
        search = "Can someone help me?"
        target = "CHAT"
        replace = ""
        searchMode = "MATCHES"
        action = "IGNORE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```

This will ignore any message exactly matching `Can someone help me?`.
|||

||| Replace an Exact Message

In this example, we will replace an exact message like `I am leaving now`

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
    #Filter certain types of messages from being relayed back to discord
    ignoredMessages = true
    
    #List of entries to process
    [[filtering.entries]]
        search = "I am leaving now"
        target = "CHAT"
        replace = "Goodbye Everyone"
        searchMode = "MATCHES"
        action = "REPLACE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```
|||

***

### Combined Example

```json
#Configure messages that will be ignored when relaying to discord
[filtering]
    #Filter certain types of messages from being relayed back to discord
    ignoredMessages = true
    
    #List of entries to process
    [[filtering.entries]]
        search = "Hey everyone"
        target = "CHAT"
        replace = ""
        searchMode = "STARTS_WITH"
        action = "IGNORE"
        appliesTo = "DISCORD"
        ignoreConsole = false
    
    [[filtering.entries]]
        search = "gg everyone"
        target = "CHAT"
        replace = "Good Game everyone"
        searchMode = "STARTS_WITH"
        action = "REPLACE"
        appliesTo = "DISCORD"
        ignoreConsole = false
    
    [[filtering.entries]]
        search = "dammit"
        target = "CHAT"
        replace = ""
        searchMode = "CONTAINS"
        action = "IGNORE"
        appliesTo = "DISCORD"
        ignoreConsole = false
        
    [[filtering.entries]]
        search = "dammit"
        target = "CHAT"
        replace = "[REDACTED]"
        searchMode = "CONTAINS"
        action = "REPLACE"
        appliesTo = "DISCORD"
        ignoreConsole = false

    [[filtering.entries]]
        search = "Can someone help me?"
        target = "CHAT"
        replace = ""
        searchMode = "MATCHES"
        action = "IGNORE"
        appliesTo = "DISCORD"
        ignoreConsole = false
    
    [[filtering.entries]]
        search = "I am leaving now"
        target = "CHAT"
        replace = "Goodbye Everyone"
        searchMode = "MATCHES"
        action = "REPLACE"
        appliesTo = "DISCORD"
        ignoreConsole = false
```