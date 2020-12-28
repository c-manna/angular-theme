import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { ApplicationsChatComponent } from './example-pages/applications-chat/applications-chat.component';
import { ApplicationsMailComponent } from './example-pages/applications-mail/applications-mail.component';
import { PagesLoginComponent } from './example-pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './example-pages/pages-register/pages-register.component';
import { PagesRecoverPasswordComponent } from './example-pages/pages-recover-password/pages-recover-password.component';
import { PagesError404Component } from './example-pages/pages-error-404/pages-error-404.component';
import { ButtonsComponent } from './example-pages/buttons/buttons.component';
import { UtilitiesHelpersComponent } from './example-pages/utilities-helpers/utilities-helpers.component';
import { SearchBarsComponent } from './example-pages/search-bars/search-bars.component';
import { RegularTables2Component } from './example-pages/regular-tables-2/regular-tables-2.component';
import { PaginationComponent } from './example-pages/pagination/pagination.component';
import { RatingsComponent } from './example-pages/ratings/ratings.component';

import { FormsClipboardComponent } from './example-pages/forms-clipboard/forms-clipboard.component';
import { FormsColorpickerComponent } from './example-pages/forms-colorpicker/forms-colorpicker.component';
//import { FormsDatepickerComponent } from './example-pages/forms-datepicker/forms-datepicker.component';
import { FormsDualListboxComponent } from './example-pages/forms-dual-listbox/forms-dual-listbox.component';
import { FormsInputMaskComponent } from './example-pages/forms-input-mask/forms-input-mask.component';
import { FormsInputSelectComponent } from './example-pages/forms-input-select/forms-input-select.component';
import { FormsSliderComponent } from './example-pages/forms-slider/forms-slider.component';
import { FormsTextareaAutosizeComponent } from './example-pages/forms-textarea-autosize/forms-textarea-autosize.component';
import { FormsTimepickerComponent } from './example-pages/forms-timepicker/forms-timepicker.component';
import { FormsToggleSwitchComponent } from './example-pages/forms-toggle-switch/forms-toggle-switch.component';
import { FormsTypeaheadComponent } from './example-pages/forms-typeahead/forms-typeahead.component';
import { FormsUploadComponent } from './example-pages/forms-upload/forms-upload.component';
import { FormsValidationComponent } from './example-pages/forms-validation/forms-validation.component';
import { FormsWysiwygEditorComponent } from './example-pages/forms-wysiwyg-editor/forms-wysiwyg-editor.component';

import { AccordionsComponent } from './example-pages/accordions/accordions.component';
import { ModalsComponent } from './example-pages/modals/modals.component';
import { NotificationsComponent } from './example-pages/notifications/notifications.component';
import { DragDropComponent } from './example-pages/drag-drop/drag-drop.component';
//import { CalendarsComponent } from './example-pages/calendars/calendars.component';
import { CarouselsComponent } from './example-pages/carousels/carousels.component';
import { PopoversComponent } from './example-pages/popovers/popovers.component';
import { TooltipsComponent } from './example-pages/tooltips/tooltips.component';
import { TreeViewComponent } from './example-pages/tree-view/tree-view.component';
import { TabsComponent } from './example-pages/tabs/tabs.component';
import { GuidedToursComponent } from './example-pages/guided-tours/guided-tours.component';
import { ImageCropComponent } from './example-pages/image-crop/image-crop.component';
import { LoadingIndicatorsComponent } from './example-pages/loading-indicators/loading-indicators.component';
import { CountUpComponent } from './example-pages/count-up/count-up.component';
import { ContextMenusComponent } from './example-pages/context-menus/context-menus.component';

// Layouts
import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';

const routes: Routes = [
    {
    path: '',
    component: LeftSidebarComponent,
    children: [
      { path: 'dashboard-default', component: DashboardDefaultComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'utilities-helpers', component: UtilitiesHelpersComponent },
      { path: 'search-bars', component: SearchBarsComponent },
      { path: 'regular-tables-2', component: RegularTables2Component },
      { path: 'pagination', component: PaginationComponent },
      { path: 'ratings', component: RatingsComponent },
      { path: 'forms-clipboard', component: FormsClipboardComponent },
      { path: 'forms-colorpicker', component: FormsColorpickerComponent },
      //{ path: 'forms-datepicker', component: FormsDatepickerComponent },
      { path: 'forms-dual-listbox', component: FormsDualListboxComponent },
      { path: 'forms-input-mask', component: FormsInputMaskComponent },
      { path: 'forms-input-select', component: FormsInputSelectComponent },
      { path: 'forms-slider', component: FormsSliderComponent },
      { path: 'forms-textarea-autosize', component: FormsTextareaAutosizeComponent },
      { path: 'forms-timepicker', component: FormsTimepickerComponent },
      { path: 'forms-toggle-switch', component: FormsToggleSwitchComponent },
      { path: 'forms-typeahead', component: FormsTypeaheadComponent },
      { path: 'forms-upload', component: FormsUploadComponent },
      { path: 'forms-validation', component: FormsValidationComponent },
      { path: 'forms-wysiwyg-editor', component: FormsWysiwygEditorComponent },
      { path: 'accordions', component: AccordionsComponent },
      { path: 'modals', component: ModalsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'drag-drop', component: DragDropComponent },
      //{ path: 'calendars', component: CalendarsComponent },
      { path: 'carousels', component: CarouselsComponent },
      { path: 'popovers', component: PopoversComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'tree-view', component: TreeViewComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'guided-tours', component: GuidedToursComponent },
      { path: 'image-crop', component: ImageCropComponent },
      { path: 'loading-indicators', component: LoadingIndicatorsComponent },
      { path: 'count-up', component: CountUpComponent },
      { path: 'context-menus', component: ContextMenusComponent },
    ]
    },
    {
    path: '',
    component: CollapsedSidebarComponent,
    children: [
      { path: 'applications-chat', component: ApplicationsChatComponent },
      { path: 'applications-mail', component: ApplicationsMailComponent },
    ]
    },
    {
    path: '',
    component: MinimalLayoutComponent,
    children: [
      { path: 'pages-login', component: PagesLoginComponent },
      { path: 'pages-register', component: PagesRegisterComponent },
      { path: 'pages-recover-password', component: PagesRecoverPasswordComponent },
      { path: 'pages-error-404', component: PagesError404Component },
    ]
    },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
