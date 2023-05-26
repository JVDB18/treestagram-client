import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {NzImageModule} from "ng-zorro-antd/image"


@NgModule({
  declarations: [
  ProfileComponent
],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    NzImageModule
  ]
})
export class ProfilesModule { }
