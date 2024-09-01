---
slug: rcon
id: cs2-rcon
title: "RCON Commands"
---

::::danger[RCON Info]
<span style={{color: 'white'}}>**RCON supplied by Valve is currently broken/non-functional. Please use `fake_rcon` or other options as directed below.**</span>
::::


## Log into RCON
Open your in-game console and run one of the following commands to log in to your server as admin.

The RCON password will be displayed on your [free server panel](https://fshost.me/free-panel) or within your [Pro area](https://fshost.me/pro).

**Temporary Admin** - using Fake RCON
<br />`fake_rcon_password type_rcon_pass_here`
<br />`fake_rcon say hi`

![image](https://help.fshost.me/img/cs2-console.png)

## General Settings
**Maps**<br />
List all maps.
<br /> `rcon maps *`

You can change the current map to any stock one.
<br />**In-game console**: `fake_rcon changelevel mapnamehere` 
<br />**Say/Say_team**: `!map mapnamehere` - Example: `!map dust2`


<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Pro only</span> 

You can also use maps from the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730). Enter the file ID (in URL after id=) after the command.
<br /> `fake_rcon host_workshop_map fileID`

To restart the game after X amount of seconds.
<br /> `fake_rcon mp_restartgame seconds`

This command sets how much money players are given at the beginning of a half. Default is 800.
<br /> `fake_rcon mp_startmoney Amount`


**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `fake_rcon sv_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you must keep the advert part in the hostname.**
`fake_rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"`

**Cheats** <br />Do you want to enable sv_cheats?
`fake_rcon sv_cheats 1`


## Load a different config/gamemode/map
<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Free only</span>
<br />Loads the predefined settings.

| Chat Command | Description |
| ------------ | ----------- |
| !esl5on5     | This is a default esl5on5 file (None pause/unpause command!) |
| !scrim       | Scrim config with all rounds enabled (None pause/unpause command!) |
| !dm          | Deathmatch Gamemode |
| !retake      | Retake Gamemode |
| !wingman     | Wingman Gamemode |
| !map ancient | !ancient         |
| !map anubis  | !anubis          |
| !map dust2   | !dust2           |
| !map inferno | !inferno         |
| !map mirage  | !mirage          |
| !map nuke    | !nuke            |
| !map overpass | !overpass       |
| !map vertigo | !vertigo         |


## Matchmaking (eBot supported not in-game bots)
1. Go to [public.ebot.wedeho.be](https://public.ebot.wedeho.be/)
2. Create an account
3. Add Gameserver (using IP:PORT and RCON Password)
4. Create a match
5. Go to My Matches
6. Start
