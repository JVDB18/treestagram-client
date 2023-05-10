import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { NzMessageModule } from 'ng-zorro-antd/message';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';

import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    NzUploadModule,
    NzMessageModule,
    NzGridModule,
    NzFormModule,
    NzInputModule

  ]
})
export class PostModule { }
