---
slug: rcon
id: 12345678
title: "STEAM_0:0:663180869"
---

## Log into RCON
Open console in-game and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).
<br /> `/rconpassword type_rcon_pass_here`

## General Settings
**Map**<br />
You can change the current map to any stock one or we have a custom map list.
<br /> `/rcon map mp_mapnamehere`

After changing any map settings, like the game mode, it is required to restart the map so it can change.
<br /> `/rcon map_restart`

Reset the scores and map.
<br /> `/rcon fast_restart`

Load next map in rotation.
<br /> `/rcon map_rotate`

**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `/rcon g_password "12345678"`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you are required to keep the advert part in the hostname.**
`/rcon sv_hostname "^6CUSTOM HOSTNAME ^7- free @ fshost.me"`

**Game Mode** <br />
Changing the game mode is easy with this command but remember to restart the map after setting the game mode.
<br /> `/rcon g_gametype gametypehere`

| Command | Name |
| ------- | ---- |
| /rcon g_gametype bas  | Base Assault |
| /rcon g_gametype bel | Behind Enemy Lines |
| /rcon g_gametype ctf  | Capture the Flag |
| /rcon g_gametype dm | Deathmatch |
| /rcon g_gametype dom | Domination |
| /rcon g_gametype hq | Headquarters |
| /rcon g_gametype re | Retrieval |
| /rcon g_gametype sd | Search and Destroy |
| /rcon g_gametype tdm | Team Deathmatch |


## Policing Your Server

**Status**
- Shows the Slot Number, Name, GUID, IP, and other info of the players connected.
`/rcon status`

**Players**
- Get PB player list, if PB is enabled
`/rcon pb_sv_plist`

- Kick a player
`/rcon clientkick clientslot`

- Kick all players
`/rcon kickall`

## Screenshots
:::tip
We have no timeframe for when screenshots will be available to be viewed on our site.
:::

- **Take a screenshot (you will need PB enabled for this)**
`/rcon pb_sv_getss clientslot`
