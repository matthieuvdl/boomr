import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accountinfos',
    loadChildren: () => import('./accountinfos/accountinfos.module').then( m => m.AccountinfosPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  },
  {
    path: 'user1',
    loadChildren: () => import('./user1/user1.module').then( m => m.User1PageModule)
  },
  {
    path: 'user2',
    loadChildren: () => import('./user2/user2.module').then( m => m.User2PageModule)
  },
  {
    path: 'user3',
    loadChildren: () => import('./user3/user3.module').then( m => m.User3PageModule)
  },
  {
    path: 'user4',
    loadChildren: () => import('./user4/user4.module').then( m => m.User4PageModule)
  },
  {
    path: 'user5',
    loadChildren: () => import('./user5/user5.module').then( m => m.User5PageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
