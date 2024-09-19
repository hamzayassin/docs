---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become as admin"
description: "How can I become an admin on my CS2 Pro server from FSHOST"
sidebar_label: "Become an Admin"
---

## Introduction
How do I become an administrator on my own CS2 Pro server for the first time? We've created some descriptions below on how to do it.

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Pro only</span>

**There are 2 different ways you can do this.**
:::note[You can use `Say` or `Say_team` from your in-game]
0. What RCONPassword did you create for your CS2 Pro Server? (You need to remember it)
1. Join your FSHOST Pro Server
2. **Say**/**Say_team**: `/login YourServer's RCONPassword`
3. **Say**/**Say_team**: `/addadmin YourSteamID64` to add yourself or your friend as admin.
:::

:::note[Open your console, from your in-game]
0. What RCONPassword did you create for your CS2 Pro Server? (You need to remember it)
1. Join your FSHOST Pro Server
2. `login YourServer's RCONPassword` 
3. `addadmin YourSteamID64` to add yourself or your friend as admin.
:::

**Example, when you have added yourself as admin**
![2024-08-22_13-24](https://github.com/user-attachments/assets/74a456ce-627a-4508-ab33-c827415b6593)


| Chat Command | Description |
| ------------ | ----------- |
| `/addadmin [target]` | To add a new administrator to your CS2 server, you can enter their Steam Nickname or SteamID64 |
| `/removeadmin [target]` | To remove an administrator from the server, you can enter their Steam Nickname or SteamID64 |
| `/listadmins` | Show a list of administrators on your CS2 server along with their SteamID64 and nickname. |
