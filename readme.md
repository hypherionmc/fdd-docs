---
icon: home
title: Getting Started
---
ModPublisher is a Gradle Plugin that allows modders to publish their mods to Modrinth, Curseforge and GitHub in one go.

No need for separate plugins, just one!

---

+++ Groovy DSL
#### Installing the Plugin

To use this plugin inside your project, first you have to add our maven.

To does this, open up `settings.gradle` and add the following:

```groovy
pluginManagement {
    repositories {
        gradlePluginPortal()
        maven {
            url "https://maven.firstdark.dev/releases"
        }
    }
}
```

Next, in your `build.gradle` add:

![](https://maven.firstdarkdev.xyz/api/badge/latest/releases/com/hypherionmc/modutils/modpublisher?color=40c14a&name=modpublisher)

```groovy
plugins {
    id "com.hypherionmc.modutils.modpublisher" version "VERSION"
}
```

Replace VERSION with the version above.

***

#### Basic Setup

Add this into your `build.gradle` file:

!!!info
This is just an example. You can remove what you don't need
!!!

```groovy
publisher {
    // Setup the required API keys. You only need to define the keys for 
    // the platforms you plan on uploading to
    apiKeys {
        // Modrinth Token
        modrinth System.getenv("MODRINTH_TOKEN")
        // Curseforge Token
        curseforge System.getenv("CURSE_TOKEN")
        // GitHub Token
        github System.getenv("GITHUB_TOKEN")
    }

    // Enable Debug mode. When enabled, no files will actually be uploaded
    setDebug(true)

    // Curseforge Project ID
    setCurseID("1234")

    // Modrinth Project ID
    setModrinthID("dsgfhs79789")

    // Type of release. beta, alpha or release
    setVersionType("beta")

    // Changelog. This can be a file, string, OR, gist/github url
    // For example: markdown.md, or "This is my changelog"
    // Or: https://raw.githubusercontent.com/hypherionmc/changelogs/changelog.md
    // Or https://gist.githubusercontent.com/hypherionmc/92f825d3c9337964cc77c9c8c9bf65e6/raw/ceeaaee5b98c688a23398864fe480b84796a1651/test_gist.md
    setChangelog("changelog.md")

    // Required for Modrinth/GitHub
    setVersion("1.20.2-${project.version}")

    // Fancy display name for the upload.
    // Will default to the project version if not set
    setDisplayName("[1.20.x] Simple Discord Link - ${project.version}")

    // The supported game versions
    setGameVersions("1.20", "1.20.1", "1.20.2")

    // The modloaders your upload supports.
    // This can also be an Enum from ModLoader,
    // like setLoaders(ModLoader.FABRIC, ModLoader.FORGE)
    setLoaders("forge", "fabric")

    // The new Curseforge Environment tag. Optional
    // Valid values are "server", "client" or "both"
    // You can also use CurseEnvironment.BOTH, or CurseEnvironment.SERVER or CurseEnvironment.CLIENT
    setCurseEnvironment("both")

    // The file to be uploaded. This can be a file, task, or string.
    // setArtifact("build/libs/mymod.jar")
    // setArtifact(jar.getArchiveFile().get())
    // If this is a task, the task specified will be executed before publishing
    setArtifact(jar)

    // Override the artifact uploaded to modrinth
    // setPlatformArtifact(Platform.Modrinth, "build/libs/mymod.jar")
    // setPlatformArtifact(Platform.Modrinth, jar.getArchiveFile().get())
    // If this is a task, the task specified will be executed before publishing
    // Valid platforms are modrinth, curseforge and github
    setPlatformArtifact("modrinth", modrinthJar)

    // Disable the built in Fractureizer scanner
    setDisableMalwareScanner(true)

    // Safety check to check if the artifact contains a valid mod metadata entry,
    // which could possibly mean that the jar is empty
    setDisableEmptyJarCheck(true)

    // Additional files to upload. Same as artifact, this can be a task, file or string
    addAdditionalFile(jar, secondJar)
}
```

+++ Kotlin DSL
#### Installing the Plugin

To use this plugin inside your project, first you have to add our maven.

To do this, open up `settings.gradle.kts` and add the following:

```kotlin
pluginManagement {
    repositories {
        gradlePluginPortal()
        maven {
            url = uri("https://maven.firstdark.dev/releases")
        }
    }
}
```

Next, in your `build.gradle.kts` add:

![](https://maven.firstdarkdev.xyz/api/badge/latest/releases/com/hypherionmc/modutils/modpublisher?color=40c14a&name=modpublisher)

```kotlin
plugins {
    id("com.hypherionmc.modutils.modpublisher") version "VERSION"
}
```

Replace VERSION with the version above.

***

#### Basic Setup

Add this into your `build.gradle.kts` file:

!!!info
This is just an example. You can remove what you don't need
!!!

```kotlin
publisher {
    // Setup the required API keys. You only need to define the keys for 
    // the platforms you plan on uploading to
    apiKeys {
        // Modrinth Token
        modrinth(System.getenv("MODRINTH_TOKEN"))
        // Curseforge Token
        curseforge(System.getenv("CURSE_TOKEN"))
        // GitHub Token
        github(System.getenv("GITHUB_TOKEN"))
    }

    // Enable Debug mode. When enabled, no files will actually be uploaded
    debug.set(true)
    
    // Curseforge Project ID
    curseID.set("12345")
    
    // Modrinth Project ID
    modrinthID.set("sdjkg8867")
    
    // GitHub repo to publish to. Only required for GitHub
    githubRepo.set("OWNER/REPO")
    
    // Type of release. beta, alpha or release
    versionType.set("release")
    
    // Changelog. This can be a file, string, OR, gist/github url
    // For example: markdown.md, or "This is my changelog"
    // Or: https://raw.githubusercontent.com/hypherionmc/changelogs/changelog.md
    // Or https://gist.githubusercontent.com/hypherionmc/92f825d3c9337964cc77c9c8c9bf65e6/raw/ceeaaee5b98c688a23398864fe480b84796a1651/test_gist.md
    changelog.set("Coming Soon")
    
    // Required for Modrinth/GitHub
    version.set("1.3.0")
    
    // Fancy display name for the upload.
    // Will default to the project version if not set
    displayName.set("MyAwesomeMod - Version")
    
    // The supported game versions
    // setGameVersions("1.20", "1.20.1", "1.20.2")
    gameVersions.set(listOf("1.19.3", "1.19.4"))
    
    // The modloaders your upload supports.
    // This can also be an Enum from ModLoader,
    // like setLoaders(ModLoader.FORGE, ModLoader.FABRIC)
    loaders.set(listOf("forge", "fabric"))
    
    // The new Curseforge Environment tag. Optional
    // Valid values are "server", "client" or "both"
    // You can also use CurseEnvironment.BOTH, or CurseEnvironment.SERVER or CurseEnvironment.CLIENT
    // setCurseEnvironment(CurseEnvironment.CLIENT)
    curseEnvironment.set("both")
    
    // The file to be uploaded. This can be a file, task, or string.
    // setArtifact("build/libs/mymod.jar")
    // setArtifact(jar.getArchiveFile().get())
    // If this is a task, the task specified will be executed before publishing
    artifact.set(tasks.jar)

    // Override the artifact uploaded to modrinth
    // setPlatformArtifact(Platform.Modrinth, "build/libs/mymod.jar")
    // setPlatformArtifact(Platform.Modrinth, jar.getArchiveFile().get())
    // If this is a task, the task specified will be executed before publishing
    // Valid platforms are modrinth, curseforge and github
    setPlatformArtifact("modrinth", modrinthJar)

    // Disable the built in Fractureizer scanner
    disableMalwareScanner.set(true)
    
    // Safety check to check if the artifact contains a valid mod metadata entry,
    // which could possibly mean that the jar is empty
    disableEmptyJarCheck.set(true)
    
    // Additional files to upload. Same as artifact, this can be a task, file or string
    additionalFiles.set(listOf(tasks.jar))
}
```
+++

[!ref Modrinth/Curseforge Dependencies](dependencies/)
