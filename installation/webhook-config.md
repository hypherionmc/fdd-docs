---
title: Webhook Setup
order: f
---

# Webhook Setup

## Video Guide
[!embed](https://iframe.mediadelivery.net/embed/281161/740f240c-1387-444a-a340-43c9ef6b43aa?autoplay=false&loop=false&muted=false&preload=true&responsive=true)

---

In order to use the webhook messages, you need to add a webhook integration to the channel you want the messages to go to.

!!! Webhook vs Embeds
Webhooks are not required for embedded messages. They are both separate from each other.
!!!

!!!warning Tip
You can use the `/setchannel` command in discord to configure channels and webhooks
!!!

Right-Click -> Edit Channel on the channel you want to send webhooks to. In this example I'm using the **Chat** channel
<br>![](https://cdn.firstdark.dev/docs/sdlink-wiki/webhook1.png)

Select **Integrations** on the side
<br>![](https://cdn.firstdark.dev/docs/sdlink-wiki/webhook2.png)
warning callout format
Click "Create Webhook"
<br>![](https://cdn.firstdark.dev/docs/sdlink-wiki/webhook3.png)

You now have a webhook:
<br>![](https://cdn.firstdark.dev/docs/sdlink-wiki/webhook4.png)

Click the webhook to expand it.

Change the name (if you want) and click "Copy Webhook URL"
<br>![](https://cdn.firstdark.dev/docs/sdlink-wiki/webhook5.png)

!!!warning Keep the Webhook URL Private
The webhook url contains sensitive server information and needs to be kept private.
When you start the server after adding the url to the config, the url is encrypted.
!!!
