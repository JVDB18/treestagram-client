import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },

  { path: '', loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule) },

  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) },

  { path: 'profile', loadChildren: () => import('./modules/profiles/profiles.module').then(m => m.ProfilesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
