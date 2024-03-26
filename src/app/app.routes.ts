//Adapted from

//Importing the angular router
import { Routes } from '@angular/router';

//Importing components to create paths
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

//exporting the routes 
export const routes: Routes = [

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

];
