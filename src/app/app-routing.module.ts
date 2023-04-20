import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'auth', loadChildren:()=> import('./modules/authentication/authentication.module').then(m=>m.AuthenticationModule)
},{
  path:'profile', loadChildren:()=> import('./modules/profiles/profiles.module').then(m=>m.ProfilesModule)
},{
  path:'feed', loadChildren:()=> import('./modules/feed/feed.module').then(m=>m.FeedModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
