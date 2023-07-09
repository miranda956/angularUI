import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { TransferComponent } from './demo/components/transfer/transfer.component';
import { DepositComponent } from './demo/components/deposit/deposit.component';
import { WithdrawComponent } from './demo/components/withdraw/withdraw.component';
import { MinistatementComponent } from './demo/components/ministatement/ministatement.component';
import { RegistrationComponent } from './demo/components/registration/registration.component';
import { LandingComponent } from './demo/components/landing/landing.component';
import { BalanceComponent } from './demo/components/balance/balance.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' }, // Redirect to the landing component as the default page
  {
    path: '', component: AppLayoutComponent,
     
    children: [
   
      { path: 'transfer', component: TransferComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'balance', component: BalanceComponent },
      { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },

   
      { path: 'ministatement', component: MinistatementComponent },
      { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
      { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
    ],
  },
  { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'landing', component: LandingComponent },
  { path: 'pages/notfound', component: NotfoundComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'pages/notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
