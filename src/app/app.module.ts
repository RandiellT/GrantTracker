//Adapted from Angular (n.d.) and Jensen (2018)

//Importing modules expected to use
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {DefaultMatCalendarRangeStrategy, MatDatepickerModule} from '@angular/material/datepicker';

//Importing components to be declared
import { AppComponent } from './app.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { OfferGrantsComponent } from './components/offer-grants/offer-grants.component';
import { MonitorAwardComponent } from './components/monitor-award/monitor-award.component';
import { AccessReportsComponent } from './components/access-reports/access-reports.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReviewedReportsComponent } from './components/reviewed-reports/reviewed-reports.component';
import { SearchGrantsComponent } from './components/search-grants/search-grants.component';
import { SubmitReportComponent } from './components/submit-report/submit-report.component';
import { TrackProposalComponent } from './components/track-proposal/track-proposal.component';
import { WriteProposalComponent } from './components/write-proposal/write-proposal.component';
import { ApproveProposalComponent } from './components/approve-proposal/approve-proposal.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';

//Importing Services to be provided by frontend
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { OfferGrantsService } from './services/offer-grants.service';
import { MonitorAwardService } from './services/monitor-award.service';
import { AccessReportsService } from './services/access-reports.service';
import { ResourcesService } from './services/resources.service';
import { ReviewedReportsService } from './services/reviewed-reports.service';
import { SearchGrantsService } from './services/search-grants.service';
import { SubmitReportsService } from './services/submit-reports.service';
import { TrackProposalService } from './services/track-proposal.service';
import { WriteProposalService } from './services/write-proposal.service';
import { ApproveProposalService } from './services/approve-proposal.service';


//Creating routes for the frontend components
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: AddUserComponent
    },
    {
        path: 'user',
        component: ViewUserComponent
    },
    {
        path: 'login',
        component: AddLoginComponent
    },
    {
        path: 'offers',
        component: OfferGrantsComponent
    },
    {
        path: 'resources',
        component: ResourcesComponent
    },
    {
        path: 'search',
        component: SearchGrantsComponent
    },
    {
        path: 'review-reports',
        component: ReviewedReportsComponent
    },
    {
        path: 'access-reports',
        component: AccessReportsComponent
    },
    {
        path: 'submit-reports',
        component: SubmitReportComponent
    },
    {
        path: 'approve-proposals',
        component: ApproveProposalComponent
    },
    {
        path: 'track-proposals',
        component: TrackProposalComponent
    },
    {
        path: 'write-proposals',
        component: WriteProposalComponent
    },
    {
        path: 'monitor-award',
        component: MonitorAwardComponent
    },
    {
    path: 'home',
    redirectTo:'/',
    pathMatch: 'full'
    }
]

//Declaring the components to be used.
@NgModule({
  declarations: [
    AppComponent,
    ViewUserComponent,
    AddLoginComponent,
    OfferGrantsComponent,
    MonitorAwardComponent,
    AccessReportsComponent,
    ResourcesComponent,
    ReviewedReportsComponent,
    SearchGrantsComponent,
    SubmitReportComponent,
    TrackProposalComponent,
    WriteProposalComponent,
    ApproveProposalComponent,
    HomeComponent,
    AddUserComponent
	],

//Importing modules that are going to be used.
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatDatepickerModule
	],

//Services to be provided by the frontend 
  providers: [
    UserService,
    LoginService,
    OfferGrantsService,
    MonitorAwardService,
    AccessReportsService,
    ResourcesService,
    ReviewedReportsService,
    SearchGrantsService,
    SubmitReportsService,
    TrackProposalService,
    WriteProposalService,
    ApproveProposalService,
    provideAnimationsAsync(),
    DefaultMatCalendarRangeStrategy
	],

  //Using bootstrap to make the app interactive
  bootstrap: [AppComponent]
})

//Exporting the app module as a class 
export class AppModule { }