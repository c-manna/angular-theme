import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-tabs-header',
  templateUrl: './tabs-header.component.html',
})
export class TabsHeaderComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  @ViewChild('staticTabs2') staticTabs2: TabsetComponent;

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  selectTab2(tabId: number) {
    this.staticTabs2.tabs[tabId].active = true;
  }

}
