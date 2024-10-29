---
title: Getting Started
order: a
---

Simple Discord Link has a basic developer API that allows you to add your own integration with the mod.

To get started, first add our Maven Repository to your `build.gradle`:

```groovy
maven {
    url "https://maven.firstdark.dev/releases"
}
```

Next, add Simple Discord Link and CraterLib:

(Check the versions [HERE](https://maven.firstdark.dev/#/releases/com/hypherionmc))

```groovy
dependencies {
    implementation("com.hypherionmc.sdlink:sdlink:VERSION")
    
    // Forge
    implementation(fg.deobf("com.hypherionmc.craterlib:CraterLib-Forge-MCVERSION:VERSION"))
    
    // NeoForge
    implementation(fg.deobf("com.hypherionmc.craterlib:CraterLib-NeoForge-MCVERSION:VERSION"))

    // Fabric
    modImplementation("com.hypherionmc.craterlib:CraterLib-Fabric-MCVERSION:VERSION")
}
```

!!! Notice
CraterLib is a required dependency for Simple Discord Link
!!!