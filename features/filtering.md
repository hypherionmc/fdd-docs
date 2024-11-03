---
title: Message Filtering
order: c
---

!!!warning Online Config Editor
You can edit your config files, using our online config editor at https://editor.firstdark.dev. Alternatively, use the `sdconfigeditor` command in your console to edit your config live on the server, using the web interface.
!!!

Message Filtering is a system that allows you to ignore certain messages from being relayed to discord or to replace words in messages.

This is useful for filtering out common spam messages like `gg`, `creeper`, `[REDACTED]`, etc.

***

To use this feature, find the `ignoredMessages` section of the config. By default, it will look like this

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = false
	#List of entries to process
    entries = []
```

In the above:

1) `ignoredMessages` -> Enable or Disable the filtering feature
2) `entires` -> List of entries to process. See examples below.

***

### Examples

||| Ignoring a message, if it starts a word 

In this example, a message starting with `Hey everyone`, will be ignored.

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "Hey everyone"
      replace = ""
      searchMode = "STARTS_WITH"
      action = "IGNORE"
```

So now, every message starting with `Hey everyone` or `hey everyone` will not be relayed to discord
|||

||| Replacing the First Word of a message

In this example, we will replace a message starting with `gg everyone`, to `Good Game everyone`.

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "gg"
      replace = "Good Game"
      searchMode = "STARTS_WITH"
      action = "REPLACE"
```
|||

***

||| Ignore a message containing a word

In this example, we will not relay a message containing the word `dammit`.

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "dammit"
      replace = ""
      searchMode = "CONTAINS"
      action = "IGNORE"
```

This will ignore any message containing the word `dammit`.
|||

||| Replace a word in a message

In this example, we will replace the word `dammit`, with `[REDACTED]`

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "dammit"
      replace = "[REDACTED]"
      searchMode = "CONTAINS"
      action = "REPLACE"
```

This will ignore any message containing the word `dammit`.
|||

***

||| Ignore an exact message

In this example, we will ignore a message like `Can someone help me?`

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "Can someone help me?"
      replace = ""
      searchMode = "MATCHES"
      action = "IGNORE"
```

This will ignore any message containing the word `Can someone help me?`.
|||

||| Replace an Exact Message

In this example, we will replace an exact message like `I am leaving now`

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "I am leaving now"
      replace = "Goodbye Everyone"
      searchMode = "MATCHES"
      action = "REPLACE"
```
|||

***

### Combined Example

```json
#Configure messages that will be ignored when relaying to discord
[ignoredMessages]
	#Filter certain types of messages from being relayed back to discord
	ignoredMessages = true
        
	#List of entries to process
    [[ignoredMessages.entries]]
      search = "Hey everyone"
      replace = ""
      searchMode = "STARTS_WITH"
      action = "IGNORE"

    [[ignoredMessages.entries]]
      search = "gg"
      replace = "Good Game"
      searchMode = "STARTS_WITH"
      action = "REPLACE"

    [[ignoredMessages.entries]]
      search = "dammit"
      replace = ""
      searchMode = "CONTAINS"
      action = "IGNORE"

    [[ignoredMessages.entries]]
      search = "dammit"
      replace = "[REDACTED]"
      searchMode = "CONTAINS"
      action = "REPLACE"

    [[ignoredMessages.entries]]
      search = "Can someone help me?"
      replace = ""
      searchMode = "MATCHES"
      action = "IGNORE"

    [[ignoredMessages.entries]]
      search = "I am leaving now"
      replace = "Goodbye Everyone"
      searchMode = "MATCHES"
      action = "REPLACE"
```