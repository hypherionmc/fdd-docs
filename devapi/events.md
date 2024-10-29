---
title: Events
order: c
---

Simple Discord Links provide some basic events, that you can use during development.

To start receiving events, you first need to register your class with our Event Bus.

```java
public final class MyAwesomeMod implements DedicatedServerModInitializer {

    @Override
    public void onInitializeServer() {
        CraterEventBus.INSTANCE.registerEventListener(new MyEventsClass());
    }
}
```

You are now ready to start receiving events.

### Events Example

```java
import com.hypherionmc.craterlib.core.event.annot.CraterEventListener;
import com.hypherionmc.sdlink.api.events.SDLinkReadyEvent;
import com.hypherionmc.sdlink.api.events.SlashCommandRegistrationEvent;
import com.hypherionmc.sdlink.api.events.VerificationEvent;

public class MyEventsClass {

    @CraterEventListener
    public void onSdlinkReady(SDLinkReadyEvent event) {
        // This event is fired when the bot is fully connected to discord and ready to work
    }
    
    @CraterEventListener
    public void onCommandRegister(SlashCommandRegistrationEvent event) {
        // This event is fired during start up, allowing you to register your own commands
    }
    
    @CraterEventListener
    public void onPlayerVerified(VerificationEvent.PlayerVerified event) {
        // Fired when a player is verified by the AccessControl system
    }
    
    @CraterEventListener
    public void onPlayerUnverified(VerificationEvent.PlayerUnverified event) {
        // Fired when a player is unverified by the AccessControl system
    }

}
```