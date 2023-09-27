import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule) },
  { path: 'episodio', loadChildren: () => import('../app/modules/episodio/episodio.module').then(m => m.EpisodioModule) },
  { path: 'account', loadChildren: () => import('../app/modules/account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
