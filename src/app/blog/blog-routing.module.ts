import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'blogs',
        component: BlogsComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BlogRoutingModule { }
