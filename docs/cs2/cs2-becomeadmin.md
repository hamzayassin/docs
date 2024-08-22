---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become admin"
description: "Information on how to become an admin on your CS2 server from FSHOST"
sidebar_label: "Become admin"
---



## Introduction
Using administrator privileges allows you to manage the server in-game. This gives you the ability to execute commands through the console.

## Prerequisites
To use administrator privileges, a foundation must first be established. By default, CS2 does not offer comprehensive administration management. However, there are frameworks for this purpose, such as CounterStrikeSharp.


:::note
**You won't be added as admin automatically by using `/login`.**
<br />
1. Join your FSHOST Pro Server
2. Type `/login <rconpass>` first,
3. Type `/addadmin <nickname/user ID/steamid64>` to add yourself or your friend as admin.
<br />**Example target**:
<br />Your SteamID64
<br />or Your Steam-Nickname
:::

**Example, when you have added yourself as admin**
![2024-08-22_13-24](https://github.com/user-attachments/assets/74a456ce-627a-4508-ab33-c827415b6593)


| Chat Command | Description |
| ------------ | ----------- |
| `/login [rconpass]` | Authenticate as the server owner to add or remove administrators from the server. |
| `/addadmin [target]` | To add a new administrator to your CS2 server, you can enter their nickname/user ID/steamid64 |
| `/removeadmin [target]` | To remove an administrator from the server, you can enter their nickname/user ID/steamid64 |
| `/listadmins` | Show a list of administrators on your CS2 server along with their SteamID64 and nickname. |
