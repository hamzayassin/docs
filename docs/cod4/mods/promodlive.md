---
slug: promodlive
id: cod4-mods-promodlive
title: "Promod LIVE v2.20"
description: "Information about Promod LIVE v2.20"
---

Promod, a competition mod for Call of Duty 4: Modern Warfare

## Promod modes
Changing the Promod mode can be done using the below syntax after `promod_mode`.

:::tip
The promod_mode dvar follows a specific syntax. However, you can use the segments between underscores ( _ ) in any order.
:::

### Main match modes

| Command                     | Description                                                                  |
|:----------------------------|:-----------------------------------------------------------------------------|
| /rcon promod_mode match     | standard match mode, may not be used with knockout mode. Round limit = mr#*2 |
| /rcon promod_mode knockout  | Knockout match mode, may not be used with standard match mode.               |
| /rcon promod_mode match_mrX | Maxrounds - Default is 10. Works only in Search & Destroy and Sabotage.      |
| /rcon promod_mode lan       | g_antilag 0, PunkBuster messages turned off, may not be used with pb mode.   |
| /rcon promod_mode hc        | Hardcore mode (disables some HUD elements and reduces health level to 30).   |
| /rcon promod_mode knife     | Adds a knife round and an extra ready-up mode to Search & Destroy matches.   |
| /rcon promod_mode 1v1/2v2   | Disables Demolitions and Sniper classes.                                     |

### Other modes
There are also some other modes, these can not be combined with the options above.

| Command                              | Description                                        |
|--------------------------------------|----------------------------------------------------|
| /rcon promod_mode comp_public        | the default mode for competitive public            |
| /rcon promod_mode comp_public_lan    | same as above, but for LAN servers                 |
| /rcon promod_mode comp_public_hc     | competitive public in hardcore mode                |
| /rcon promod_mode comp_public_hc_lan | same as above, but for LAN servers                 |
| /rcon promod_mode custom_public      | custom public mode reading settings from z_c_r.iwd |
| /rcon promod_mode custom_public_lan  | same as above, but for LAN servers                 |
| /rcon promod_mode strat              | strategy mode for practicing                       |

### Some examples

| Command                               | Description                                                       |
|---------------------------------------|-------------------------------------------------------------------|
| /rcon promod_mode 2v2_mr10            | 2v2 settings with 10 total rounds                                 |
| /rcon promod_mode match_mr12          | 5v5 settings with 12 total rounds                                 |
| /rcon promod_mode match_mr12_pb       | 5v5 settings with 12 total rounds without PB                      |
| /rcon promod_mode match_mr10_knife_pb | 5v5 settings with 10 total rounds without PB but with knife round |
