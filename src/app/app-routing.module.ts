import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenerComponent } from './opener/opener.component';

const routes: Routes = [
    { path: '', redirectTo: '/opener', pathMatch: 'full' },
    { path: 'opener', component: OpenerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
