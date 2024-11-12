import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PinagsamaComponent } from './pinagsama/pinagsama.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'pinagsama', component: PinagsamaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: 'login' } // Wildcard route for any undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
