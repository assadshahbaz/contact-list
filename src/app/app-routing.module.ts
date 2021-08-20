import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'contact-detail' },
  { path: 'contact-detail/:id', component: ContactDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
