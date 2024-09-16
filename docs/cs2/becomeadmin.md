---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become admin"
description: "How can I become as admin on my CS2 Pro server from FSHOST"
sidebar_label: "Become Admin"
---

## Introduction
Using administrator privileges allows you to manage the server in-game. This gives you the ability to execute commands through the console.

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Pro only</span>

**There are 2 different ways you can do this.**
:::note[You can use `Say` or `Say_team` from your in-game]
0. First, find your RCONPass (Edit your server) and remember the RCONPass you created to your CS2 Server
1. Join your FSHOST Pro Server
2. **Say**/**Say_team**: `/login <rconpass>`
3. **Say**/**Say_team**: `/addadmin <Steam Nickname/SteamID64>` to add yourself or your friend as admin.
:::

:::note[Open your console, from your in-game]
0. First, find your RCONPass (Edit your server) and remember the RCONPass you created to your CS2 Server
1. Join your FSHOST Pro Server
2. `login <rconpass>` 
3. `addadmin <Steam Nickname/SteamID64>` to add yourself or your friend as admin.
:::

**Example, when you have added yourself as admin**
![2024-08-22_13-24](https://github.com/user-attachments/assets/74a456ce-627a-4508-ab33-c827415b6593)


| Chat Command | Description |
| ------------ | ----------- |
| `/addadmin [target]` | To add a new administrator to your CS2 server, you can enter their Steam Nickname/SteamID64 |
| `/removeadmin [target]` | To remove an administrator from the server, you can enter their Steam Nickname/SteamID64 |
| `/listadmins` | Show a list of administrators on your CS2 server along with their SteamID64 and nickname. |
