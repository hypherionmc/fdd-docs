---
title: Adding your own commands
order: d
---

You can add your own slash commands, which can be used by people in discord. 

To do this, create a new class extending the `SDLinkSlashCommand` class, and register it during the `SlashCommandRegistrationEvent`.

```java
import com.hypherionmc.sdlink.core.discord.commands.slash.SDLinkSlashCommand;
import com.jagrosh.jdautilities.command.SlashCommandEvent;

public class HelloWorldSlashCommand extends SDLinkSlashCommand {

    public HelloWorldSlashCommand() {
        // Require the default permissions for the command. Set to false to add your own.
        super(true);

        this.name = "helloworld";
        this.help = "This is an example command";

        // See https://github.com/Chew/JDA-Chewtils/wiki/SlashCommands-in-JDA-Chewtils for more information
    }

    @Override
    protected void execute(SlashCommandEvent slashCommandEvent) {

    }

}
```

### Register the command

```java
import com.hypherionmc.craterlib.core.event.annot.CraterEventListener;
import com.hypherionmc.sdlink.api.events.SDLinkReadyEvent;
import com.hypherionmc.sdlink.api.events.SlashCommandRegistrationEvent;
import com.hypherionmc.sdlink.api.events.VerificationEvent;

public class MyEventsClass {
    
    @CraterEventListener
    public void onCommandRegister(SlashCommandRegistrationEvent event) {
        event.addCommand(new HelloWorldSlashCommand());
    }

}
```