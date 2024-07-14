"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9475],{8021:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(4848),d=s(8453);const i={id:"cs16-becomeadmin",title:"CS 1.6: Become an admin on your own server",description:"Information on how to become an admin on your CS 1.6 server from FSHOST",sidebar_label:"Become admin"},r=void 0,c={id:"cs16-becomeadmin",title:"CS 1.6: Become an admin on your own server",description:"Information on how to become an admin on your CS 1.6 server from FSHOST",source:"@site/docs/cs16-becomeadmin.md",sourceDirName:".",slug:"/cs16-becomeadmin",permalink:"/docs/cs16-becomeadmin",draft:!1,unlisted:!1,editUrl:"https://github.com/fshostme/docs/tree/main/docs/cs16-becomeadmin.md",tags:[],version:"current",lastUpdatedBy:"Miksen",lastUpdatedAt:1720956255e3,frontMatter:{id:"cs16-becomeadmin",title:"CS 1.6: Become an admin on your own server",description:"Information on how to become an admin on your CS 1.6 server from FSHOST",sidebar_label:"Become admin"},sidebar:"gameserverSidebar",previous:{title:"Server crash - What to do?",permalink:"/docs/gameserver-server-down-what-now"},next:{title:"GSL-Token",permalink:"/docs/source-gsltoken"}},o={},l=[];function a(e){const n={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'...\n; Examples of admin accounts:\n; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"\n; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"\n; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"\n\n"loopback" "" "abcdefghijklmnopqrstu" "de"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the config the entry ",(0,t.jsx)(n.code,{children:'"loopback" "" "abcdefghijklmnopqrstu" "en"'})," must be adjusted. Back then the authentication was done only by name and password. Nowadays it is only done via the the SteamID64. You can find your SteamID64 by opening your Steam profile and right-clicking anywhere on it. There you click on ",(0,t.jsx)(n.strong,{children:"Copy Steam URL"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Afterwards, the URL must be typed in one of the following websites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://steamrep.com/",children:"https://steamrep.com/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://steamidfinder.com/",children:"https://steamidfinder.com/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://steamid.io/",children:"https://steamid.io/"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/13604413/159179089-7c731c8b-9e85-4d9d-a6f0-2748752e6537.png",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["This will provide you the general account information as well as the Steam ID.  In this case we only need the SteamID64. The Steam ID must then be added to the client entry under ",(0,t.jsx)(n.strong,{children:"SteamID"}),". The result of this looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The line contains the following information:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"name/SteamID - Unique ID of the player."}),"\n",(0,t.jsx)(n.li,{children:"password - none available if Steam authentication"}),"\n",(0,t.jsx)(n.li,{children:"permission level"}),"\n",(0,t.jsx)(n.li,{children:"connection flags - The flags control how AMX Mod X attempts to authorize a connecting admin."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In that case, no password is needed since it is an authentication via Steam. Therefore we set ",(0,t.jsx)(n.code,{children:"ce"})," instead of ",(0,t.jsx)(n.code,{children:"en"}),". Below you can find an overview of all authorization levels and connection flags:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Authorization level"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Authorization level"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"immunity (can't be kicked/baned/slayed/slaped and affected by other commmands)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b"}),(0,t.jsx)(n.td,{children:"reservation (can join on reserved slots)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"c"}),(0,t.jsx)(n.td,{children:"amx_kick command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"d"}),(0,t.jsx)(n.td,{children:"amx_ban and amx_unban commands"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"e"}),(0,t.jsx)(n.td,{children:"amx_slay and amx_slap commands"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"f"}),(0,t.jsx)(n.td,{children:"amx_map command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"g"}),(0,t.jsx)(n.td,{children:"amx_cvar command (not all cvars will be available)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"h"}),(0,t.jsx)(n.td,{children:"amx_cfg command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"i"}),(0,t.jsx)(n.td,{children:"amx_chat and other chat commands"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"j"}),(0,t.jsx)(n.td,{children:"amx_vote and other vote commands"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"k"}),(0,t.jsx)(n.td,{children:"access to sv_password cvar (by amx_cvar command)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"l"}),(0,t.jsx)(n.td,{children:"access to amx_rcon command and rcon_password cvar (by amx_cvar command)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"m"}),(0,t.jsx)(n.td,{children:"custom level A (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"n"}),(0,t.jsx)(n.td,{children:"custom level B (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"o"}),(0,t.jsx)(n.td,{children:"custom level C (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"p"}),(0,t.jsx)(n.td,{children:"custom level D (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"q"}),(0,t.jsx)(n.td,{children:"custom level E (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"r"}),(0,t.jsx)(n.td,{children:"custom level F (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s"}),(0,t.jsx)(n.td,{children:"custom level G (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"t"}),(0,t.jsx)(n.td,{children:"custom level H (for additional plugins)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"u"}),(0,t.jsx)(n.td,{children:"menu access"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"z"}),(0,t.jsx)(n.td,{children:"user (no admin)"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Connection flags"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Flag"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"disconnect player on invalid password"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b"}),(0,t.jsx)(n.td,{children:"clan tag"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"c"}),(0,t.jsx)(n.td,{children:"this is steamid/wonid"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"d"}),(0,t.jsx)(n.td,{children:"this is ip"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"e"}),(0,t.jsx)(n.td,{children:"password not checked (only name/ip/steamid needed)"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(6540);const d={},i=t.createContext(d);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);