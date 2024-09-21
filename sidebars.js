/**
* Creating a sidebar enables you to:
- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
*/

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
  guidesSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          default: return "First steps";
        }
      })(),
      defaultStyle: true,
    },
    "welcome",
    "faq",
    "free-vs-pro",
    {
      type: 'category',
      label: 'Pro Control Panel',
      items: [
        "dashboard",
        "serverlist",
        "editserver"
      ]
    }, 
    "network/network-analysis",
    "firststeps-locations",   
    {
      type: 'category',
      label: 'Support',
      items: [
        "contactsupport",
        "create-screenshots"
      ]
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        "banned",
        "account-termination-and-cancellation-period",
        "account-paymentoptions",
      ]
    },
  ],
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gameserverSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          default: return "First steps";
        }
      })(),
      defaultStyle: true,
    },
    "server-faqs",
    "server-rcon",
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          default: return "All Games (A-Z)";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Call of Duty",
      items: [
        "cod/cod-firststeps-dashboard",
        "cod/cod-rcon"
      ],
    },
    {
      type: "category",
      label: "Call of Duty 2",
      items: [
        "cod2/cod2-firststeps-dashboard",
        "cod2/cod2-rcon"
      ],
    },
    {
      type: "category",
      label: "Call of Duty 4: Modern Warfare",
      items: [
        "cod4/cod4-landing",
        "cod4/cod4-rcon",
        {
          type: "category",
          label: "Mods",
          items: [
            "cod4/mods/cod4-mods-promodlive",
            "cod4/mods/cod4-mods-fpspromod",
            "cod4/mods/cod4-mods-gungame",
            "cod4/mods/cod4-mods-codjumper",
            "cod4/mods/cod4-mods-stock-custom-maps"
          ]
        },
        "cod4/cod4-customfeatures"
      ],
    },
    {
      type: "category",
      label: "Call of Duty: United Offensive",
      items: [
        "coduo/coduo-firststeps-dashboard",
        "coduo/coduo-rcon"
      ],
    },    
    {
      type: "category",
      label: "Counter-Strike: 1.6",
      items: [
        "cs16/cs16-firststeps-dashboard",        
        "cs16/cs16-becomeadmin",
        "cs16/cs16-rcon"
      ],
    },
    {
      type: "category",
      label: "Counter-Strike: CZero",
      items: [
        "cscz/cscz-firststeps-dashboard",
        "cscz/cscz-becomeadmin",
        "cscz/cscz-rcon"
      ],
    },
    {
      type: "category",
      label: "Counter-Strike: Source",
      items: [
        "css/css-firststeps-dashboard",
        "css/css-rcon"
      ],
    },
    {
      type: "category",
      label: "Counter-Strike: 2",
      items: [
        "cs2/cs2-firststeps-dashboard",
        "cs2/cs2-becomeadmin",
        "cs2/cs2-rcon",
        "cs2/source-gsltoken",
        "cs2/cs2-pluginslist",
        {
          type: "category",
          label: "Plugins: Pro Commands",
          items: [
            "cs2/plugins/cs2-plugins-matchzy",
            "cs2/plugins/cs2-plugins-retakes",
            "cs2/plugins/cs2-plugins-skins",
            "cs2/plugins/cs2-plugins-simpleadmin",
            "cs2/plugins/cs2-plugins-gotvdiscord",
            "cs2/plugins/cs2-plugins-openprefireprac",
            "cs2/plugins/cs2-plugins-ingamecommands"
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Half-Life 1: Deathmatch",
      items: [
        "hldm/hldm-firststeps-dashboard",
        "hldm/hldm-rcon"
      ],
    },
  ],
};

export default sidebars;
