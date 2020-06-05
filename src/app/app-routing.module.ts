import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component';

const routes: Routes = [
  {
    path: 'instagram',
    component: InstagramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
