import {Component, ViewChild} from '@angular/core';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
    selector: 'app-context-menus-basic',
    templateUrl: './context-menus-basic.component.html',
})
export class ContextMenusBasicComponent {

    @ViewChild('contextMenuExample1') public contextMenuExample1: ContextMenuComponent;
    @ViewChild('contextMenuExample2') public contextMenuExample2: ContextMenuComponent;
    @ViewChild('contextMenuExample3') public contextMenuExample3: ContextMenuComponent;
    @ViewChild('contextMenuExample4') public contextMenuExample4: ContextMenuComponent;

}
