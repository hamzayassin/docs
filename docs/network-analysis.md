---
id: network-analysis
title: "Network troubleshooting with MTR/WinMTR"
description: Information on how to perform a network analysis with MTR/WinMTR to identify network problems
sidebar_label: Network troubleshooting
---

## Introduction

WinMTR is a network diagnostics program that combines the features of ping and traceroute. The program was developed by Matt Kimball based on the well-known MTR program for Linux. It offers the possibility to get detailed information about possible network problems. The program also allows to track the time between sending a signal and receiving the corresponding response packet. In the following screenshot the outgoing route to fshost.me is shown as an example:

![image](https://cdn.discordapp.com/attachments/1226241443459240068/1262376808880537620/2024-07-15-13-53-17-Win-MTR-v0-92-64-bit-by-Appnor-MSP-www-winmtr-net.png?ex=66965f85&is=66950e05&hm=fde0363c91c98910587f7c5779a99b8d59f5ebbfce5e57ccfdcef8594a0a070c&)


## Installation



### Windows

WinMTR for Windows can be downloaded from the [FSHOST](https://docs.fshost.me/WinMTR.zip) page. Once installed, the program must be started and the host name or IP address of the affected case needs to be filled in:

![image](https://user-images.githubusercontent.com/13604413/159171614-5ffff921-5d69-4786-8c8f-1a1f63413a97.png)





### Linux

MTR on Linux requires an SSH connection to the server.

Now the package can be installed with the following command:

```
apt install -y mtr-tiny
```

![image](https://cdn.discordapp.com/attachments/1226241443459240068/1262347763501371482/image.png?ex=66964478&is=6694f2f8&hm=991cfbb1663c7fb1fe26ca271e7b23edeb80de1d971aac98b97087d67f5cf5ac&)


The evaluation can then be started with the command **mtr IP address**. By pressing CTRL+C you can stop the test at any time as desired.

![image](https://cdn.discordapp.com/attachments/1226241443459240068/1262348718036877332/image.png?ex=6696455b&is=6694f3db&hm=587214880dd59b83e6cce21ffc26b5427c4947b15014ac88e15f85f6ac0bdf6b&)


## Create report

The network diagnostic test should be performed when the problem actively occurs. The person who is affected by the problem should perform the test. In order to be able to analyze the network problems as well as possible, an evaluation of the outgoing and ingoing route should be made. Depending on the operating system either WinMTR (Windows) or MTR (Linux) is used. 



## Evaluate report

The program provides several kinds of information. You have to check this information carefully in order to identify the problem correctly.

![image](https://cdn.discordapp.com/attachments/1226241443459240068/1262377848920866857/2024-07-15-13-56-48-Win-MTR-v0-92-64-bit-by-Appnor-MSP-www-winmtr-net.png?ex=6696607d&is=66950efd&hm=f392b7719aae0b8db0332526eab3af26099d03c97fbe5f319dfb7129c1b7f8f4&)


While evaluating a route, the example message **No response from host** may appear from time to time, reporting 100% packet loss. However, this is often not the direct cause. In such a case it is possible that only the packets are filtered by the firewall and therefore no response comes or is generally unreachable. The next possible option for the route is then selected. Only if the packet loss starts at one point and continues through others is there active packet loss. 

| Value  |                Meaning                 |
| :----: | :------------------------------------: |
|  Host  |        Name of the network node        |
| Loss % |       Percentage of packet loss        |
|  Sent  | The number of packets sent to the node |
|  Recv  |     The number of received packets     |
|  Best  |         Best ping of the node          |
|  Avrg  |        Average ping of the node        |
|  Wrst  |         Worst ping of the node         |
|  Last  |         Last ping of the node          |
