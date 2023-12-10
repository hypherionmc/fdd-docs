---
title: Publish to a Single Platform
order: c
---

The plugin includes four tasks. `publishMod`, `publishCurseforge`, `publishGitHub`, `publishModrinth` and can be found under the `publishing` section of the gradle tasks.

If you only want to publish to a single platform when you have multiple platforms enabled (for example when one platform fails), just execute the single task for that platform.


||| Example Scenario
Scenario: You have configured your mod to published to both Curseforge and Modrinth. During the upload, the curse api went down, and the upload failed. Now, if you run `publishMod` again, your mod will be published to modrinth again.

Solution: Simply run the `publishCurseforge` task, and your mod will only be uploaded to curseforge.
|||