---
title: Scheduled Maintenance
order: c
---

Scheduled maintenance allows you to configure when maintenance will start, and optionally when it will end.

!!!info
Schedules use the CRON timing format. You can use this [website](https://www.uptimia.com/cron-expression-generator) to help you generate the correct time.
!!!

### Managing Scheduled Maintenance

||| Set a Start Schedule
To schedule a maintenance start time, use the `/maintenance schedule repeating start <crontime>` command.

If your server is offline at the time maintenance is scheduled to start, it will be skipped, and executed at the next start time.
|||

||| Set an End Schedule
To schedule a maintenance end time, use the `/maintenance schedule repeating end <crontime>` command.

If your server is offline at the time maintenance is scheduled to stop, it will be skipped, and executed at the next stop time.
|||

||| Temporarily Disable Schedule on restart
To disable scheduled maintenance when your server restarts, use the `/maintenance schedule disableOnRestart true|false` command.

This will keep your schedule intact, but will disable maintenance when the server restarts.
|||

***

### Disabling a maintenance schedule

To disable your maintenance schedule completely, you can use the same commands as above for start/stop, but set the time to `""`. Alternatively, set the start/end times in your config to `""` and use the `/maintenance reload` command.