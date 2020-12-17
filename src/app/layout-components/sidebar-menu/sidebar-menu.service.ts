import { Injectable } from '@angular/core';

interface MenuItem {
    title: string;
    type: string;
    badge?: {
        class: string;
        text: string;
    };
    link?: string;
    active?: boolean;
    icon?: string;
    submenus?: MenuItem[];
}

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService {

    menus: MenuItem[] = [
  {
    "title": "Navigation menu",
    "type": "header"
  },
  {
    "title": "Dashboards",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-safe\"> </i>",
    "submenus": [
      {
        "title": "Default",
        "type": "simple",
        "link": "/dashboard-default"
      }
    ]
  },
  {
    "title": "Applications",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-network\"></i>",
    "badge": {
      "class": "badge badge-success",
      "text": "12"
    },
    "submenus": [
      {
        "title": "Chat",
        "type": "simple",
        "link": "/applications-chat"
      }
    ]
  },
  {
    "title": "Pages",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-portfolio\"></i>",
    "submenus": [
      {
        "title": "Login",
        "type": "simple",
        "link": "/pages-login"
      },
      {
        "title": "Register",
        "type": "simple",
        "link": "/pages-register"
      },
      {
        "title": "Recover Password",
        "type": "simple",
        "link": "/pages-recover-password"
      },
      {
        "title": "Error 404",
        "type": "simple",
        "link": "/pages-error-404"
      }
    ]
  },
  {
    "title": "UI Components",
    "type": "header"
  },
  {
    "title": "Elements",
    "type": "dropdown",
    "icon": "<i class=\"pe-7s-keypad\"></i>",
    "submenus": [
      {
        "title": "Buttons",
        "type": "simple",
        "link": "/buttons"
      },
      {
        "title": "Search Bars",
        "type": "simple",
        "link": "/search-bars"
      }/* ,
      {
        "title": "Utilities & Helpers",
        "type": "simple",
        "link": "/utilities-helpers"
      } */
    ]
  }
];

    constructor() { }

    getMenuList() {
        return this.menus;
    }

    getMenuItemByUrl(aMenus: MenuItem[], aUrl: string): MenuItem {
        for (const theMenu of aMenus) {
            if (theMenu.link && theMenu.link === aUrl) {
                return theMenu;
            }

            if (theMenu.submenus && theMenu.submenus.length > 0) {
                const foundItem = this.getMenuItemByUrl(theMenu.submenus, aUrl);
                if (foundItem) {
                    return foundItem;
                }
            }
        }

        return undefined;
    }

    toggleMenuItem(aMenus: MenuItem[], aCurrentMenu: MenuItem): MenuItem[] {
        return aMenus.map((aMenu: MenuItem) => {
            if (aMenu === aCurrentMenu) {
                aMenu.active = !aMenu.active;
            } else {
                aMenu.active = false;
            }

            if (aMenu.submenus && aMenu.submenus.length > 0) {
                aMenu.submenus = this.toggleMenuItem(aMenu.submenus, aCurrentMenu);

                if (aMenu.submenus.find(aChild => aChild.active)) {
                    aMenu.active = true;
                }
            }

            return aMenu;
        });
    }
}
