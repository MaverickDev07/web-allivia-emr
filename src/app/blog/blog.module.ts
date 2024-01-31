import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogsComponent } from './pages/blogs/blogs.component';



@NgModule({
  declarations: [
    MainComponent,
    BlogsComponent
  ],
  imports: [
    BlogRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class BlogModule { }
