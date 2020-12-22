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
        },
        {
          "title": "Pagination",
          "type": "simple",
          "link": "/pagination"
        },
        {
          "title": "Ratings",
          "type": "simple",
          "link": "/ratings"
        }/* ,
      {
        "title": "Utilities & Helpers",
        "type": "simple",
        "link": "/utilities-helpers"
      } */
      ]
    },
    {
      "title": "Widgets",
      "type": "dropdown",
      "icon": "<i class=\"pe-7s-display2\"></i>",
      "submenus": [
        {
          "title": "Accordions",
          "type": "simple",
          "link": "/accordions"
        },
        {
          "title": "Modal dialogs",
          "type": "simple",
          "link": "/modals"
        },
        {
          "title": "Notifications",
          "type": "simple",
          "link": "/notifications"
        },
        {
          "title": "Drag & Drop",
          "type": "simple",
          "link": "/drag-drop"
        },
        {
          "title": "Calendars",
          "type": "simple",
          "link": "/calendars"
        },
        {
          "title": "Carousels",
          "type": "simple",
          "link": "/carousels"
        },
        {
          "title": "Popovers",
          "type": "simple",
          "link": "/popovers"
        },
        {
          "title": "Tooltips",
          "type": "simple",
          "link": "/tooltips"
        },
        {
          "title": "Tree View",
          "type": "simple",
          "link": "/tree-view"
        },
        {
          "title": "Tabs",
          "type": "simple",
          "link": "/tabs"
        },
        {
          "title": "Guided Tours",
          "type": "simple",
          "link": "/guided-tours"
        },
        {
          "title": "Image Crop",
          "type": "simple",
          "link": "/image-crop"
        },
        {
          "title": "Loading Indicators",
          "type": "simple",
          "link": "/loading-indicators"
        },
        {
          "title": "Count Up",
          "type": "simple",
          "link": "/count-up"
        },
        {
          "title": "Context Menus",
          "type": "simple",
          "link": "/context-menus"
        }
      ]
    },
    {
      "title": "Tables",
      "type": "header"
    },
    {
      "title": "Regular Tables",
      "type": "dropdown",
      "icon": "<i class=\"pe-7s-albums\"></i>",
      "submenus": [
        {
          "title": "Tables examples 2",
          "type": "simple",
          "link": "/regular-tables-2"
        }
      ]
    },
    {
      "title": "Forms",
      "type": "header"
    },
    {
      "title": "Widgets",
      "type": "dropdown",
      "icon": "<i class=\"pe-7s-tools\"></i>",
      "submenus": [
        {
          "title": "Clipboard",
          "type": "simple",
          "link": "/forms-clipboard"
        },
        {
          "title": "Colorpicker",
          "type": "simple",
          "link": "/forms-colorpicker"
        },
        {
          "title": "Datepicker",
          "type": "simple",
          "link": "/forms-datepicker"
        },
        {
          "title": "Dual Listbox",
          "type": "simple",
          "link": "/forms-dual-listbox"
        },
        {
          "title": "Input Mask",
          "type": "simple",
          "link": "/forms-input-mask"
        },
        {
          "title": "Input Select",
          "type": "simple",
          "link": "/forms-input-select"
        },
        {
          "title": "Slider",
          "type": "simple",
          "link": "/forms-slider"
        },
        {
          "title": "Textarea Autosize",
          "type": "simple",
          "link": "/forms-textarea-autosize"
        },
        {
          "title": "Timepicker",
          "type": "simple",
          "link": "/forms-timepicker"
        },
        {
          "title": "Toggle Switch",
          "type": "simple",
          "link": "/forms-toggle-switch"
        },
        {
          "title": "Typeahead",
          "type": "simple",
          "link": "/forms-typeahead"
        },
        {
          "title": "Upload",
          "type": "simple",
          "link": "/forms-upload"
        },
        {
          "title": "Validation",
          "type": "simple",
          "link": "/forms-validation"
        },
        {
          "title": "WYSIWYG Editors",
          "type": "simple",
          "link": "/forms-wysiwyg-editor"
        }
      ]
    },
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
