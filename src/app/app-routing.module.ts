import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'projekt-liste',
    pathMatch: 'full'
  },
  {
    path: 'projekt-liste',
    loadChildren: () => import('./pages/projekt-liste/projekt-liste.module').then( m => m.ProjektListePageModule)
  },
  {
    path: 'projekt-detail/:id', loadChildren: () => import('./pages/projekt-detail/projekt-detail.module').then(m => m.ProjektDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
