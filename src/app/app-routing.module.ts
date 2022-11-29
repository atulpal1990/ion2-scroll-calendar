import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'calenders',
    loadChildren: () => import('./calenders/calenders.module').then( m => m.CalendersPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
