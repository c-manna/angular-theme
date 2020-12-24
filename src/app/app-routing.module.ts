import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { ApplicationsChatComponent } from './example-pages/applications-chat/applications-chat.component';
import { PagesLoginComponent } from './example-pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './example-pages/pages-register/pages-register.component';
import { PagesRecoverPasswordComponent } from './example-pages/pages-recover-password/pages-recover-password.component';
import { PagesError404Component } from './example-pages/pages-error-404/pages-error-404.component';
import { ButtonsComponent } from './example-pages/buttons/buttons.component';
import { UtilitiesHelpersComponent } from './example-pages/utilities-helpers/utilities-helpers.component';
import { SearchBarsComponent } from './example-pages/search-bars/search-bars.component';
import { RegularTables2Component } from './example-pages/regular-tables-2/regular-tables-2.component';
import { FormsToggleSwitchComponent } from './example-pages/forms-toggle-switch/forms-toggle-switch.component';
import { TabsComponent } from './example-pages/tabs/tabs.component';
import { PaginationComponent } from './example-pages/pagination/pagination.component';
import { RatingsComponent } from './example-pages/ratings/ratings.component';
import { FormsClipboardComponent } from './example-pages/forms-clipboard/forms-clipboard.component';

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
      { path: 'forms-toggle-switch', component: FormsToggleSwitchComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'ratings', component: RatingsComponent },
      { path: 'forms-clipboard', component: FormsClipboardComponent },
    ]
    },
    {
    path: '',
    component: CollapsedSidebarComponent,
    children: [
      { path: 'applications-chat', component: ApplicationsChatComponent },
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
