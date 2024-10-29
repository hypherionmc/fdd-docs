---
title: Sending a Message
order: b
---

To send a message to discord, you can use our API classes provided. Below is a basic example of how to send a CHAT message.

```java
public class CustomSDLinkMessage {
    
    public void sendChatMessage(Player player, Component message) {
        // Check if SDLink is ready, enabled and can send messages
        if (!BotController.INSTANCE.isBotReady())
            return;

        // Construct the author
        DiscordAuthor author = DiscordAuthor.of(player.getDisplayName().getString(), player.getStringUUID(), player.getGameProfile().getName());

        // Construct the message
        DiscordMessage message1 = new DiscordMessageBuilder(MessageType.CHAT)
                .message(message.getString())
                .author(author)
                .build();
        
        // Send the message
        message1.sendMessage();
    }
    
}
```

***

#### Sending a Generic Message

```java
public class CustomSDLinkMessage {

    public void sendGenericMessage() {
        // Check if SDLink is ready, enabled and can send messages
        if (!BotController.INSTANCE.isBotReady())
            return;

        // Construct the author
        DiscordAuthor author = DiscordAuthor.SERVER;

        // Construct the message
        DiscordMessage message1 = new DiscordMessageBuilder(MessageType.CUSTOM)
                .message("Hello World")
                .author(author)
                .build();

        message1.sendMessage();
    }

}
```